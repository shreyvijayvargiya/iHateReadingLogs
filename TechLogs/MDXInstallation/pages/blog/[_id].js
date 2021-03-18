import React from 'react';
import { useRouter } from 'next/router';
import Blog from './blog.mdx';

const DynamicPage = () => {
    const router = useRouter();
    const heading = router.query.title;
    return (
        <div>
            <h1>{heading}</h1>
            <Blog />
        </div>
    );
};
export default DynamicPage;
