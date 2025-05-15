import React from 'react'
import StateGov from './StateGov';
const IndianGov = () => {
  let money = 100;
  return (
    <div>
      <h1>This is indian GOB componenets</h1>
      <StateGov money={money}/>
    </div>
  )
};

export default IndianGov;
