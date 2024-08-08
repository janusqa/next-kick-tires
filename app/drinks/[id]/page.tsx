import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import drinkImg from './drink.jpg';

const DrinkDetailPage = async ({ params }: { params: { id: string } }) => {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    const getDrinkDetail = async (id: string) => {
        const response = await fetch(`${url}${id}`);

        if (!response.ok) throw new Error('Failed to fetch drink details');

        const data = await response.json();

        return data;
    };

    const data: {
        drinks: { idDrink: string; strDrink: string; strDrinkThumb: string }[];
    } = await getDrinkDetail(params.id);

    const title = data?.drinks[0].strDrink;
    const imgSrc = data?.drinks[0].strDrinkThumb;

    return (
        <div>
            <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
                Back to drinks
            </Link>
            {/** Remote Image -
             * Need to set width/height.
             * Need to also whitelist remote image base url in config */}
            <Image
                src={imgSrc}
                width={300}
                height={300}
                className="w-48 h-48 rounded-lg shadow-lg mb-4 priority"
                alt={title}
            />
            {/** Local Image */}
            {/* <Image
                src={drinkImg}
                className="w-48 h-48 rounded-lg"
                alt="A drink"
            /> */}
            <h1 className="text-4xl mb-8">{title}</h1>
        </div>
    );
};

export default DrinkDetailPage;
