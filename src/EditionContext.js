import { createContext, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

const EditionContext = createContext(null)

const useSubscription = (callback) => {

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    supabase
      .from('*')
      .on('*', callback)
      .subscribe()
    // return () => {
    //   console.log('unsubscribe')
    //   subscription.unsubscribe()
    // }
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */
}

export const EditionProvider = ({ children }) => {
  const [edition, setEdition] = useState(null)

  useSubscription(payload => {
    setEdition(payload.new)
  });
  const partecipants = ['diana', 'paolo', 'caterina', 'oscar']



  const clearGong = async (partecipant, amount) => {
    await supabase
      .from('editions')
      .update({ gong: null })
      .match({ id: '1' })
  }
  const changePoints = async (partecipant, amount) => {
    const points = edition[partecipant] + amount
    await supabase
      .from('editions')
      .update({ [partecipant]: points })
      .match({ id: '1' })
  }

  const createGong = async () => {
    // random USER expect the first
    const maxPoints = partecipants.reduce((acc, partecipant) => {
      if (edition[partecipant] > acc) {
        return edition[partecipant]
      }
      return acc
    }, 0)
    let notFirsts = partecipants.filter(partecipant => edition[partecipant] !== maxPoints)
    if (notFirsts.length === 0) {
      notFirsts = partecipants
    }
    const randomIndex = parseInt(Math.random() * notFirsts.length)
    const gonger = notFirsts[randomIndex]
    await supabase
      .from('editions')
      .update({ gong: gonger })
      .match({ id: '1' })
  }

  if (!edition) {
    supabase
      .from('editions')
      .select()
      .then(({ error, data }) => {
        if (error) {
          return console.error(error)
        }
        setEdition(data[data.length - 1])
      })
      .catch(error => {
        console.error(error)
      })
    return <p>Loading</p>
  }



  return <EditionContext.Provider value={{ edition, changePoints, createGong, clearGong, partecipants }}>
    {children}
  </EditionContext.Provider >
}

export default EditionContext