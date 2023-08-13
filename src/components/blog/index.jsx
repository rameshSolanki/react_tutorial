import { useState, React } from "react";

const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

const Blog = ()=> {
    const [product, setProduct] = useState("");
    const clickHandler = (evt)=> {
        console.log(evt.target.innerText)
        setProduct("clicked product is - "  + evt.target.innerText)
    }
    
    const listItems = products.map(product =>
        <li onClick={clickHandler} key={product.id} style={{ color: product.title == 'Apple' ? 'red' : ''}}>{product.title}</li>
    );
    return (
        <div className="text-center">
        <h1 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Blog List</h1>
        <p>{product}</p>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">{listItems}</ul>
        </div>
    )
}

export default Blog