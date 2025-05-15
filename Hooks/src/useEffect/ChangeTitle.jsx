import React, { useEffect, useState } from "react"


const ChangeTitle = () => {
  const [counter ,setCounter] = useState(0);
  
      useEffect(()=>
      {
          console.log("useeffect hook running");
          document.title = counter;
      },[counter])
  
    return (
      <>
      <div>
          <h1>{counter}</h1>
          <button onClick={()=>setCounter(counter+1)}>Increase</button>
          <button onClick={()=>setCounter(counter-1)}>Decrease</button>
      </div>
      </>
    )
};

export default ChangeTitle;
