// import { supabase } from './supabaseClient'
import { useContext } from "react";
import EditionContext from "../EditionContext";
// import { supabase } from "../supabaseClient";

function Remote() {
  const { edition, changePoints, clearGong } = useContext(EditionContext);
  console.log(edition)

  return (
    <div className="App">
      <header className="App-header">
        <h1>{edition.name}</h1>
        <p> <button onClick={() => changePoints('diana', -1)}>-</button>  Diana: {edition.diana}  <button onClick={() => changePoints('diana', 1)}>+</button> </p>
        <p> <button onClick={() => changePoints('paolo', -1)}>-</button>  Paolo: {edition.paolo}  <button onClick={() => changePoints('paolo', 1)}>+</button> </p>
        <p> <button onClick={() => changePoints('caterina', -1)}>-</button>  Cate: {edition.caterina}  <button onClick={() => changePoints('caterina', 1)}>+</button> </p>
        <p> <button onClick={() => changePoints('oscar', -1)}>-</button>  Oscar: {edition.oscar}  <button onClick={() => changePoints('oscar', 1)}>+</button> </p>

        {edition.gong && <button onClick={clearGong}>Clear Gong</button>}
      </header>
    </div>
  );
}
export default Remote