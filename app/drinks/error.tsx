'use client';

import React from 'react';
import getErrorMessage from '@/utils/errorMessage';

const ErrorPage = ({ error }: { error: unknown }) => {
    return <div>{getErrorMessage(error)}</div>;
};

export default ErrorPage;
