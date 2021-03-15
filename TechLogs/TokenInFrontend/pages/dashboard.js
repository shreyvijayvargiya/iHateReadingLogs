import React from 'react';
import { Button } from '@material-ui/core';
import Cookies from 'next-cookies';
import { useRouter } from 'next/router';
import { removeCookie } from '../utils/cookie';

const Dashbaord = () => {
    
    const router = useRouter();

    const handleLogout = () => {
        removeCookie('authToken');
        router.push('./login');
    }
    return (
        <div>
            <h1> Hello, Users</h1>
            <h2> This page is preotected route and can only be accessed by logged in users</h2>
            <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => handleLogout()}
                style={{ textTransform: 'none' }}
            >
                Logout
            </Button>
        </div>
    );
};
export default Dashbaord;

export async function getServerSideProps({ req, res}){
    const token = Cookies({req, res});
    if(token.authToken === undefined){
        res.statusCode = 302
        res.setHeader('Location', `/login`) 
        return { props: { }};
    }else {
        return { props: { } }
    }
};
  
