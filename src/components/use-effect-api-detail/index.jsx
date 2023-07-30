import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const UseEffectApiDetail = () => {
    const { products_id } = useParams();
    // const [p_id, setNum] = useState(products_id);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Indicates whether the data is being loaded
    // console.log(p_id);
    const id = 1
    async function getData() {
            const api = await fetch(`https://dummyjson.com/products/${products_id}`);
            const res = await api.json();
            setData(res);
            console.log(res);
            setIsLoading(false);
    }
    useEffect(() => {
      getData();
    }, []);
    // Display loading message while data is being fetched
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="mt-4">
            {data.id}
            <h2>{data.title}</h2>
            <h4>{data.category}</h4>
            <p>{data.brand}</p>
            <br />
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" to="/use-effect-api">Go back</Link>
            </div>
        </div>
        
    )
}

export default UseEffectApiDetail