/** rules for server actions
 * 1. must be async component
 * 2. must have 'use server' declared in the component
 * 3. can be used in a React Server Component or a React Client Component
 * 4. If used crom a RCC must be in a seperate file with 'use server' at the top
 */

'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';
import { redirect } from 'next/navigation';
import getErrorMessage from './errorMessage';
import { z, ZodError } from 'zod';

export const getTasks = async () => {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    return tasks;
};

// This was modified to be used with useFormState in client component
// it now accepts a prevstate. This is to facilitate error checking in
// server actions
export const createTask = async (
    prevState: { message: string | null },
    formData: FormData
) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const content = formData.get('content');

    const Task = z.object({
        content: z.string().min(5),
    });

    try {
        Task.parse({ content: content });
        await prisma.task.create({
            data: {
                content: String(content),
            },
        });
        revalidatePath('/tasks');
        return { message: 'success' };
    } catch (error: unknown) {
        if (error instanceof ZodError)
            return { message: getErrorMessage(error.errors[0]) };
        return { message: getErrorMessage(error) };
    }
};

export const deleteTask = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const id = formData.get('id');
    await prisma.task.delete({
        where: {
            id: String(id),
        },
    });
    revalidatePath('/tasks');
};

export const getTask = async (id: string) => {
    const task = await prisma.task.findUnique({
        where: {
            id: String(id),
        },
    });
    return task;
};

export const editTask = async (formData: FormData) => {
    const id = String(formData.get('id'));
    const content = String(formData.get('content'));
    const completed = formData.get('completed') === 'on' ? true : false;

    await prisma.task.update({
        where: {
            id: id,
        },
        data: {
            content: content,
            completed: completed,
        },
    });

    /**
     * When redirecting componnt that uses this action must be a 'use client`
     * OR this action must reside in a RSC which imports a client component
     */
    redirect('/tasks');
};
