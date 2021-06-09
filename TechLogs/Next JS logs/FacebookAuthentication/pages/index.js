import React from 'react';
import app from '../utils/firebase';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

const App = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Hello, Welcome to Firebase authentication Repository</h1>
            <p>Go to /login router to view authentication methods </p>
            <Button
                variant="contained"
                onClick={() => router.push('/login')}
                color="primary"
            >
                Authentication Methods
            </Button>
        </div>
    )
};
export default App;
