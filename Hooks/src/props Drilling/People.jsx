import React, { useContext } from 'react'
import MyContext from '../useContext/MyContext';

const People = () => {
  const { money,person, counter, setCounter } = useContext(MyContext);

  console.log(useContext(MyContext));

  return (
    <>
      <div>
        <h1>Village level</h1>
        <h2>Money: ₹{money}</h2>
        <h2>Counter: {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>increase</button>
        
      </div>
    </>
  )
}

export default People;
