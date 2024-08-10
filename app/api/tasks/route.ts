import prisma from '@/utils/db';

export const GET = async (request: Request) => {
    const tasks = await prisma.task.findMany();
    return Response.json({ data: tasks });
};

export const POST = async (request: Request) => {
    const data = await request.json();
    const task = await prisma.task.create({
        data: { content: data.content },
    });
    return Response.json({ message: 'task created', data: task });
};
