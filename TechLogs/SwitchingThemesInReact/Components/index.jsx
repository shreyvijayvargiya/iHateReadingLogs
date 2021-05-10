import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logs from './Logs';
import Project from './Project';
import About from './About';
import Checkout from './Checkout';

const routes = [
    {
        name: 'logs',
        id: 1
    },
    {
        name: 'about',
        id: 2
    },
    {
        name: 'project',
        id: 3
    },
    {
        name: 'checkout',
        id: 4
    },
]
const Navbar = () => {

    const router = useRouter();
    const pathname = router.pathname;
    const [ bg, setBg ] = React.useState("red");
    const [ route, setRoute ] = useState("logs"); 

    useEffect(() => {
        setBgColor()
    }, []);

    function setBgColor(){
        if(pathname === '/logs'){
            setBg('green')
        }else if(pathname === '/about'){
            setBg('purple')
        }else if(pathname === '/checkout'){
            setBg('red')
        }else if(pathname === '/project'){
            setBg('yellow')
        }else if(pathname === '/'){
            setBg('green')
        }
    };

    function changeRoutes(goTo) {
        router.push(goTo);
        setBgColor()
    };
    function getComponet(){
        if(pathname === '/logs'){
            return <Logs bg={bg}  />
        }else if(pathname === '/about'){
            return <About bg={bg} />
        }else if(pathname === '/checkout'){
            return <Checkout bg={bg} />
        }else if(pathname === '/project'){
            return <Project bg={bg} />
        }else if(pathname === '/'){
            return <Logs bg={bg}  />
        }
    }
    return (
        <div className={`h-screen w-full flex flex-col bg-${bg}-400 justify-center items-center p-4`}>
            {getComponet()}
            <div className="flex justify-around items-center">
                {routes.map(item => (
                        <div key={item.id}>
                            <button  
                                className={`p-2 rounded-md hover:bg-${bg}-500 focus:outline-none focus:border-none`}
                                onClick={() => changeRoutes(item.name)}
                            >
                                {(item.name).toUpperCase()}
                            </button>
                        </div>
                ))}
            </div>
        </div>
    )
};
export default Navbar;
