import { useState, useContext, useEffect } from "react";
import EditionContext from "../../EditionContext";
import css from './MedalTable.module.scss'

import paolo from '../../assets/images/paolo.png'
import caterina from '../../assets/images/caterina.png'
import diana from '../../assets/images/diana.png'
import oscar from '../../assets/images/oscar.png'

const partecipantImages = { paolo, caterina, oscar, diana }

const MedalTable = () => {
  const { edition, partecipants } = useContext(EditionContext);
  const [orderedPartecipants, setOrderedPartecipants] = useState(partecipants)
  useEffect(() => {
    // set the positions
    setOrderedPartecipants((orderedPartecipants) => {
      return orderedPartecipants.sort((a, b) => edition[b] - edition[a])
    })
  }, [edition])

  const partecipantPosition = (partecipant) => {
    return orderedPartecipants.reduce((acc, p, i) => {
      if (p === partecipant) {
        return i
      }
      return acc
    }, 0)
  }

  const partecipantLeft = (partecipant) => {
    // difference from the first:
    const partecipantPoints = edition[partecipant]

    const firstPoints = edition[orderedPartecipants[0]]
    const lastPoints = edition[orderedPartecipants[orderedPartecipants.length - 1]]

    const maxPointsInTheGame = firstPoints > 10 ? firstPoints + 5 : 10
    const minPointsInTheGame = lastPoints - 3 > 0 ? lastPoints - 3 : 0
    const pointsDifference = maxPointsInTheGame - minPointsInTheGame
    // pointsDifference : 100 = (partecipantPoints - minPointsInTheGame) : x
    return 100 * (partecipantPoints - minPointsInTheGame) / pointsDifference;
  }

  return <div className={css.partecipantsContainer}>
    {partecipants.map(partecipant => (
      <div key={partecipant} className={css.partecipant} style={{
        top: partecipantPosition(partecipant) * 25 + '%',
        width: partecipantLeft(partecipant) + '%'
      }}>
        {partecipant}: {edition[partecipant]} <br />
        position: {partecipantPosition(partecipant) + 1}
        <img src={partecipantImages[partecipant]} alt="" />
      </div>
    ))}
  </div >
}

export default MedalTable;