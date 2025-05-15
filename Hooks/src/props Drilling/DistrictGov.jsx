import React from 'react'
import Panchayat from './Panchayat';
const DistrictGov = ({money}) => {
  return (
    <div>
      <h1>This is block componenet</h1>
      <Panchayat money={money}/>
    </div>
  )
}

export default DistrictGov;
