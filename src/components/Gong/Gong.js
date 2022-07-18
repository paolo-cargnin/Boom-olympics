import css from "./Gong.module.scss"
const Gong = ({ gong }) => {
  return <div className={css.gong}>
    <h2>GONG!</h2>
    <p>è il turno di</p>
    <h1>
      {gong}
    </h1>
  </div>
}
export default Gong;