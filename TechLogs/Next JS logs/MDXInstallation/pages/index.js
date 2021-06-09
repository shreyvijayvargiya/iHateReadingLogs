import React from 'react';
import { Button, TextField } from '@material-ui/core';
import Link from 'next/link';

const App = () => {
    return (
        <div>
            <h1>Writing Blog using MDX with  Next JS Repository</h1>
            <Link href="https://shreyvijayvargiya26.medium.com/creating-your-blog-with-mdx-in-next-js-691a9368569b" target="_blank">
                <Button variant="contained" color="primary">Read the artcile</Button>
            </Link>
            <br />
            <p>Click the link below to read the article written using MDX extension</p>
            <Link href="blog/post?title=Writing%20your%20blog%20using%20MDX%20extension">
                <Button
                    size="small"
                    color="secondary"
                    variant="outlined"
                >Article
                </Button>
            </Link>
        </div>
    )
};
export default App;
