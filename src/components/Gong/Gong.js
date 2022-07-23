import css from "./Gong.module.scss"
import marco1 from '../../assets/images/marco-1.mp4'
import marco2 from '../../assets/images/marco-2.mp4'
import marcoCate from '../../assets/images/marco-cate.mp4'
import marcoOscar from '../../assets/images/marco-oscar.mp4'

const marcos = { 'marco-1': marco1, 'marco-2': marco2, 'marco-cate': marcoCate, 'marco-oscar': marcoOscar }

const Gong = ({ gong }) => {
  if (gong.includes('marco')) {
    return <div className={css.gongMarco}>
      <video controls>
        <source src={marcos[gong]} type="video/mp4" />
      </video>
    </div>
  }
  return <div className={css.gong}>
    <h2>GONG!</h2>
    <p>è il turno di</p>
    <h1>
      {gong}
    </h1>
  </div>
}
export default Gong;