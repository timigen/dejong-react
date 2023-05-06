import { useStoreState, useStoreActions } from "easy-peasy";
import { useState } from 'react';

function Controls() {
  const a = useStoreState(store => store.a);
  const b = useStoreState(store => store.b);
  const c = useStoreState(store => store.c);
  const d = useStoreState(store => store.d);
  
  const numberOfPoints = useStoreState(store => store.numberOfPoints);

  const setA = useStoreActions(actions => actions.setA);
  const setB = useStoreActions(actions => actions.setB);
  const setC = useStoreActions(actions => actions.setC);
  const setD = useStoreActions(actions => actions.setD);
  const setNumberOfPoints = useStoreActions(actions => actions.setNumberOfPoints);

  return (
    <>
      <input value={ a } onChange={ (e) => { setA(e.target.value) }}/>
      <input value={ b } onChange={ (e) => { setB(e.target.value) }} />
      <input value={ c } onChange={ (e) => { setC(e.target.value) }} />
      <input value={ d } onChange={ (e) => { setD(e.target.value) }}/>
      <input value={ numberOfPoints } onChange={ (e) => { setNumberOfPoints(e.target.value) }}/>
    </>
  )
}
  
export default Controls