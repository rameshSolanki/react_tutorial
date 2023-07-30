import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const useEffectApi = () => {
    const [num, setNum] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Indicates whether the data is being loaded

    useEffect(() => {
        async function getData() {
            try {
                const api = await fetch(`https://dummyjson.com/products?limit=${num+100}`);
                const res = await api.json();
                setData(res.products);
                console.log(res.products);
                setIsLoading(false);
            } catch (error) {
                alert('error ' + error);
                setIsLoading(false);
            }
           
        }
        getData();
    }, [num]);
   
    // Display loading message while data is being fetched
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <button className="text-white bg-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-" type="button" onClick={() => setNum(num+1)}>Get Data - {num}</button>
            {
                data.map((element, index) => {
                    return (
                        <div key={index} className="mt-4">
                            {element.id}
                            <h2 className="text-blue-400 text-2xl"><Link to={"/use-effect-api/" + element.id}>{element.title}</Link></h2>
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