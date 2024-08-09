'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

const Providers = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {children}
            <Toaster />
        </>
    );
};

export default Providers;
