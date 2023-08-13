import { contextEx } from "../contextEx";
import { useState, React } from "react";
import MyComponent from "../MyComponent";

const UseContextEX = ()=> {
    const [text, setText] = useState("");
    
    return (
        <div className="text-center">
            <h1>UseContext Demo</h1>
        <contextEx.Provider value={{ text, setText }}>
            <MyComponent />
        </contextEx.Provider>
        </div>
    )
}

export default UseContextEX