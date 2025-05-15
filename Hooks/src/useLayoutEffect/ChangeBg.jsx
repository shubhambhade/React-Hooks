import React,{useState, useLayoutEffect} from 'react'

const ChangeBg = () => {

    const[color,setColor] = useState('lightblue');

    useLayoutEffect(()=>{
        document.body.style.background = color;

    },[color]);

  return (
    <div>
      <h1>Current Color : {color}</h1>
      <button onClick={()=>setColor('red')}>Red</button>
    </div>
  )
}

export default ChangeBg;
