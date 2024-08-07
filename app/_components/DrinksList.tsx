import Link from 'next/link';
import React from 'react';

const DrinksList = ({
    drinks,
}: {
    drinks: { idDrink: string; strDrink: string }[];
}) => {
    return (
        <ul className="menu menu-verticle pl-0">
            {drinks.map((drink) => (
                <li key={drink.idDrink}>
                    <Link
                        href={`/drinks/${drink.idDrink}`}
                        className="text-xl font-medium"
                    >
                        {drink.strDrink}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DrinksList;
