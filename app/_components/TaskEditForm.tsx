'use client';

import React from 'react';
import { editTask } from '@/utils/actions';

const TaskEditForm = ({
    task,
}: {
    task: {
        id: string;
        content: string;
        createdAt: Date;
        completed: boolean;
    } | null;
}) => {
    return (
        <form
            action={editTask}
            className="max-w-sm p-12 border border-base-300 rounded-lg"
        >
            <input type="hidden" name="id" value={task?.id} />
            <input
                type="text"
                name="content"
                defaultValue={task?.content}
                required
                className="input input-bordered w-full"
            />
            <div className="form-control my-4">
                <label htmlFor="completed" className="label cursor-pointer">
                    <span className="label-text">Completed</span>
                    <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        defaultChecked={task?.completed}
                        className="checkbox checkbox-primary checkbox-sm"
                    />
                </label>
            </div>
            <button
                type="submit"
                className="btn btn-primary btn-block btn-small"
            >
                Update task
            </button>
        </form>
    );
};

export default TaskEditForm;
