import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <h1 className="text-5xl mb-8 font-bold">
                Let&apos;s Kick the wheels
            </h1>
            <Link href="/client" className="btn btn-accent">
                Get Kickin&apos;
            </Link>
        </>
    );
};

export default HomePage;
