import React from 'react';
import { createTask } from '@/utils/actions';

/** rules for server actions
 * 1. must be async component
 * 2. must have 'use server' declared in the component
 * 3. can be used in a React Server Component or a React Client Component
 * 4. If used crom a RCC must be in a seperate file with 'use server' at the top
 */
// const createTask = async (formData: FormData) => {
//     'use server';
//     const content = formData.get('content');
//     if (content) {
//         await prisma.task.create({
//             data: {
//                 content: String(content),
//             },
//         });
//         revalidatePath('/tasks');
//     }
// };

const TaskCreateForm = () => {
    return (
        <form action={createTask}>
            <div className="join w-full">
                <input
                    type="text"
                    className="input input-bordered join-item w-full"
                    placeholder="type here"
                    name="content"
                    required
                />
                <button type="submit" className="btn btn-primary join-item">
                    Create task
                </button>
            </div>
        </form>
    );
};

export default TaskCreateForm;
