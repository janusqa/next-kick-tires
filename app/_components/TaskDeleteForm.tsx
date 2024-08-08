import React from 'react';
import { deleteTask } from '@/utils/actions';

const TaskDeleteForm = ({ id }: { id: string }) => {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="id" value={id} />
            <button className="btn btn-xs btn-error">Delete</button>
        </form>
    );
};

export default TaskDeleteForm;
