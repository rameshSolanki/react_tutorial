import { useMemo } from "react";
import { useState } from "react";

const UseMemoEx = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const loopCal = (num) => {
        for (let index = 0; index < 1000; index++) {
            console.log('calc');
        }
        return num;
    }
    const Cal = useMemo(() =>
         loopCal(count)
         ,[]);
         
    return (
        <>
         <h1 className="text-3xl">UseMemo demo</h1>
         <button onClick={() => setCount(count + 1)} className="text-white bg-blue-700 px-2 p-1 mt-4">Increment</button>
         <p>Count: {count}</p>
        </>
    )
}

export default UseMemoEx