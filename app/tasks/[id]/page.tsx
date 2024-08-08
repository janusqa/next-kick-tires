import React from 'react';
import { getTask } from '@/utils/actions';
import Link from 'next/link';
import TaskEditForm from '@/app/_components/TaskEditForm';

const EditTaskPage = async ({ params }: { params: { id: string } }) => {
    const task = await getTask(params.id);
    return (
        <>
            <div className="mb-16">
                <Link href="/tasks" className="btn btn-accent">
                    Back to task
                </Link>
            </div>
            <TaskEditForm task={task} />
        </>
    );
};

export default EditTaskPage;
