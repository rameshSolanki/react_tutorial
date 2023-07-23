import { useEffect, useState } from "react";

const useEffectApi = () => {
    const [num, setNum] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const api = await fetch(`https://dummyjson.com/products?limit=${num+1}`);
            const res = await api.json();
            setData(res.products);
            console.log(res.products);
        }
        getData();
    }, [num]);
   

    return (
        <div>
            <button className="text-white bg-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-" type="button" onClick={() => setNum(num+1)}>Get Data - {num}</button>
            {
                data.map((element, index) => {
                    return (
                        <div key={index}>
                            {element.id}
                            <h2>{element.title}</h2>
                            <h4>{element.category}</h4>
                            <p>{element.brand}</p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default useEffectApi