'use client';

import React from 'react';

const ErrorPage = ({ error }: { error: unknown }) => {
    const getErrorMessage = (error: unknown) => {
        let message: string;

        if (error instanceof Error) {
            message = error.message;
        } else if (error && typeof error === 'object' && 'message' in error) {
            message = String(error.message);
        } else if (typeof error === 'string') {
            message = error;
        } else {
            message = 'Oops, something went wrong!';
        }
        return message;
    };

    return <div>{getErrorMessage(error)}</div>;
};

export default ErrorPage;
