
import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]); //man sätter parametern man vill ska re-render i []. annars re-rendrar den varje gång sidan gör det. 
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
        </div>
    )
}

export default UseEffectCounter
