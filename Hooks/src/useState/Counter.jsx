import React ,{ useState} from 'react'

const Counter = () => {
    const [counter_ ,setCounter] = useState(0);

    // let counter_ = 0;

    const increase=()=>
    {
        setCounter(counter_+1);
        console.log(counter_);
    }
    const decrease=()=>
    {
        setCounter(counter_ - 1);
        console.log(counter_);
    }

  return (
    <div>
      <h1>{counter_}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter
