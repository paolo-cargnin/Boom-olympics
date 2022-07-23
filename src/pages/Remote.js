// import { supabase } from './supabaseClient'
import { useContext, useState } from "react";
import EditionContext from "../EditionContext";
import { supabase } from "../supabaseClient";
// import { supabase } from "../supabaseClient";

function Remote() {
  const { edition, changePoints, clearGong } = useContext(EditionContext);

  const [gongValue, setGongValue] = useState("")
  const gongValues = ['diana', 'paolo', 'caterina', 'oscar', 'marco-1', 'marco-2', 'marco-cate', 'marco-oscar']

  const handleGongChange = (e) => {
    setGongValue(e.target.value)
  }

  const updateGongValue = () => {
    console.log(gongValue)
    supabase
      .from('editions')
      .update({ gong: gongValue })
      .match({ id: 1 })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{edition.name}</h1>
        <p> <button onClick={() => changePoints('diana', -1)}>-</button>  Diana: {edition.diana}  <button onClick={() => changePoints('diana', 1)}>+</button> </p>
        <p> <button onClick={() => changePoints('paolo', -1)}>-</button>  Paolo: {edition.paolo}  <button onClick={() => changePoints('paolo', 1)}>+</button> </p>
        <p> <button onClick={() => changePoints('caterina', -1)}>-</button>  Cate: {edition.caterina}  <button onClick={() => changePoints('caterina', 1)}>+</button> </p>
        <p> <button onClick={() => changePoints('oscar', -1)}>-</button>  Oscar: {edition.oscar}  <button onClick={() => changePoints('oscar', 1)}>+</button> </p>

        {edition.gong && <button onClick={clearGong}>Clear Gong</button>}

        <hr />
        <select name="" id="" value={gongValue} onChange={handleGongChange}>
          <option value="">Select a gong</option>
          {gongValues.map(gong => (
            <option key={gong} value={gong}>{gong}</option>
          ))}
        </select>

        <button onClick={updateGongValue}>Set Gong!</button>
      </header>
    </div>
  );
}
export default Remote