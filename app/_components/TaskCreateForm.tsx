'use client';

import React, { useEffect } from 'react';
import { createTask } from '@/utils/actions';
import FormSubmitButton from './FormSubmitButton';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

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

const initialState: { message: string | null } = {
    message: null,
};

const TaskCreateForm = () => {
    // we now need to do some error checking so we will do this via useFormAction
    // useFormaction will track the state of the form submission
    // We will use it to display feedback to user as the state changes
    // This neccesitates this component to be a RCC
    const [state, formAction] = useFormState(createTask, initialState);

    useEffect(
        function () {
            if (state.message === 'success') {
                toast.success('Success!');
            } else {
                toast.error(state.message);
            }
        },
        [state]
    );

    return (
        <form action={formAction}>
            {state.message ? <p className="mb-2">{state.message}</p> : null}
            <div className="join w-full">
                <input
                    type="text"
                    className="input input-bordered join-item w-full"
                    placeholder="type here"
                    name="content"
                    required
                />
                <FormSubmitButton
                    label="Create Task"
                    style="btn btn-primary join-item"
                />
            </div>
        </form>
    );
};

export default TaskCreateForm;
