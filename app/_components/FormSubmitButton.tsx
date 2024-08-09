'use client';

import { useFormStatus } from 'react-dom';

const FormSubmitButton = ({
    label,
    style,
}: {
    label: string;
    style: string;
}) => {
    'use client';
    const { pending } = useFormStatus();

    return (
        <button type="submit" className={style} disabled={pending}>
            {pending ? 'Please wait...' : label}
        </button>
    );
};

export default FormSubmitButton;
