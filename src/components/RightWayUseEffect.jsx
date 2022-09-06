import React, { useEffect, useState } from 'react'

function RightWayUseEffect() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useeffect executed in mounting phase");

        return () => {
            console.log("useeffect executed in unmounting phase");//if there is return inside the useeffect--unmounting phase
        }
    }, []); // mounting phase similar to componentdidmount

    useEffect(() => {
        if(count !==0) {
            console.log("useeffect ComponentDidUpdate is executed");
        }
    }, [count]); // if there is dependency array in your useEffect it is updating phase
    
  return (
    <div>
        <h1>count-{count}</h1>
        <button onClick = {() => {
            setCount(count + 1);
        }}>Click</button>
    </div>
  );
}

export default RightWayUseEffect;