import { useStoreState } from "easy-peasy";
import { useState } from 'react';

function Controls() {
  const [a, setA] = useState(0);
  return (
    <>
      <input value={a} onChange={setA(event.target.value)}/>
      <input />
      <input />
      <input />
    </>
  )
}
  
export default Controls