import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <>
            <h1 className="text-7xl">About page</h1>
            <Link href="/" className="text-2xl">
                Home page
            </Link>
        </>
    );
};

export default AboutPage;
