import { useContext, useEffect } from "react";
import MedalTable from "../components/MadalTable/MedalTable";
import EditionContext from "../EditionContext";


const Dashboard = () => {
  const { edition, createGong } = useContext(EditionContext);
  useEffect(() => {
    if (edition.gong !== null) {
      return () => {
        // clearInterval(interval)
      }
    }
    const interval = setInterval(() => {
      console.log('Should not come here')
      if (Math.random() > 0.5) {
        console.log('create gong')
        createGong()
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [edition.gong, createGong])
  return <div>
    <MedalTable />
    {edition.gong && <h3>Gong: {edition.gong}</h3>}
  </div>
}
export default Dashboard;