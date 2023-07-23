import {Link} from 'react-router-dom';

const menus = [
    {
        label: 'Home',
        to: '/'
    },
    {
        label: 'About us',
        to: '/about-us'
    },
    {
        label: 'Blog',
        to: '/blog'
    },
    {
        label: 'Contact',
        to: '/contact'
    },
    {
        label: 'Movie',
        to: '/movie'
    },
    {
        label: 'Todo',
        to: '/todo'
    },
    {
        label: 'useEffectApi',
        to: '/use-effect-api'
    },
];
const Navbar = ()=> {
    return (
        <nav className="bg-gray-800">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
                
            </div>
            <div className="hidden sm:ml sm:block">
                <div className="flex space-x-6">
                <Link  className="bg-blue-900 text-white px-3 py-2 text-md font-medium" to="/">React</Link>
                {
                    menus.map((item, index)=>(
                        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" key={index} to={item.to}>{item.label}</Link>
                    ))
                }
                
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar