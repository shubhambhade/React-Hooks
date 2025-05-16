import React,{useId} from 'react'

const UseID = () => {

    const id = useId();
    const id1 = useId();
    
  return (
    <div>
      <label htmlFor={id}>
        Name : <input id={id} type="text" />
      </label>
      <br />
      <label htmlFor={id1}>
        Name : <input id={id1} type="text" />
      </label>
    </div>
  )
}

export default UseID;
