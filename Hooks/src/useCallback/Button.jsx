import React from 'react'

const Button = React.memo(({onclick}) => {
    console.log("Button is re-rendered");
  return (
    <div>
      <button onClick={onclick}>Click</button>
    </div>
  )
})

export default Button;
