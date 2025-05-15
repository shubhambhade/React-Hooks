import React from 'react'
import DistrictGov from './DistrictGov';
const StateGov = ({money}) => {
  return (
    <div>
      <h1>This is state gov</h1>
      <DistrictGov money={money}/>
    </div>
  )
}

export default StateGov;
