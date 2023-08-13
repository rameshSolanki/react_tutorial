import { useRef } from "react"

const UseRefEx = () => {
    let ref = useRef(0);
    let nameRef = useRef("test");
    let emailRef = useRef("");
   
    function handleSubmit(e) {
        e.preventDefault();
        ref.current = ref.current + 1;
        console.log(`Clicked ${ref.current} times`);
        console.log(`Entered name is ${nameRef.current.value} and Email is ${emailRef.current.value}`);
    }
    return (
        <div>
            <h1 className="text-2xl mb-4">UseRef Demo</h1>
            <form onSubmit={handleSubmit} className="font-normal">
                <label className="block mb-2">Name</label>
                <input type="text" ref={nameRef} className="flex items-start mb-4 border border-gray-300 p-2"/>
                
                <label className="block mb-2">Email</label>
                <input type="text" ref={emailRef} className="flex items-start mb-4 border border-gray-300 p-2"/>

                <input className="flex items-start mb-4 text-white bg-blue-700 px-2" type="submit" />
            </form>
        </div>
    )
}

export default UseRefEx