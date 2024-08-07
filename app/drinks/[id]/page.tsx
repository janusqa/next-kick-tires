import Link from 'next/link';
import React from 'react';

const DrinkDetailPage = async ({ params }: { params: { id: string } }) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    const getDrinkDetail = async (id: string) => {
        const response = await fetch(`${url}${id}`);

        if (!response.ok) throw new Error('Failed to fetch drink details');

        const data = await response.json();

        return data;
    };

    const data: {
        drinks: { idDrink: string; strDrink: string; strThumb: string }[];
    } = await getDrinkDetail(params.id);

    const title = data?.drinks[0].strDrink;
    const imgSrc = data?.drinks[0].strThumb;

    return (
        <div>
            <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
                Back to drinks
            </Link>
            <h1 className="text-4xl mb-8">{title}</h1>
        </div>
    );
};

export default DrinkDetailPage;
