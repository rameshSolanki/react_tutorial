import { useState } from "react";
import User from "../User";

const Contact = ()=> {
    const [data, setData] = useState("Submit data.");

    const submitData = ()=> {
        setData("Data submit success.");
    }

    return (
        <div className="text-center">
            <User
            name="ramesh"
            age={29}
            />
            <User
            name="test"
            age={25}
            />
        <h1>{data}</h1>
        <button onClick={submitData}>Submit</button>
        </div>
    )
}

export default Contact