import React from 'react';
import { deleteTask } from '@/utils/actions';
import FormSubmitButton from './FormSubmitButton';

const TaskDeleteForm = ({ id }: { id: string }) => {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="id" value={id} />
            <FormSubmitButton label="Delete" style="btn btn-xs btn-error" />
        </form>
    );
};

export default TaskDeleteForm;
