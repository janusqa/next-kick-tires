import React from 'react';
import prisma from '@/utils/db';

const PrismaExample = async () => {
    const primsmaHandlers = async () => {
        await prisma.task.create({
            data: {
                content: 'wake up',
            },
        });

        const allTasks = await prisma.task.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return allTasks;
    };

    const allTasks = await primsmaHandlers();

    return (
        <>
            <h1 className="text-7xl">Prisma example</h1>
            {allTasks.map((task) => (
                <h2 key={task.id} className="text-xl py-2">
                    {task.content}
                </h2>
            ))}
        </>
    );
};

export default PrismaExample;
