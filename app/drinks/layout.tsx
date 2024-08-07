import React from 'react';

const DrinksLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="max-w-xl">
            <div className="mockup-code mb-8">
                <pre data-prefix="$">
                    <code>npx create-next-ap@latest .</code>
                </pre>
            </div>
            {children}
        </div>
    );
};

export default DrinksLayout;
