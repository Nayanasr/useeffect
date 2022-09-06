import React, { useState } from 'react'

function WrongUseEffect() {
    const [count, setCount] = useState(0);
    useState(() => {
        console.log("useeffect executed");
    }); // this is wrong way

    const increment = () => {
        setCount(count + 1);
    };
  return (
    <div>
        <p>count = {count}</p>
        <button onClick = {increment}>Click</button>
    </div>
  );
}

export default WrongUseEffect;