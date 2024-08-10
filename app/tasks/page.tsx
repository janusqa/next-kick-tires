import React from 'react';
import TaskCreateForm from '../_components/TaskCreateForm';
import TaskList from '../_components/TaskList';

/** Force this page to always show the freshest data
 * That is every time the user request this page do
 * not cache it render it on server at that moment
 * and ship to client.
 */
export const dynamic = 'force-dynamic';

const TasksPage = () => {
    return (
        <section className="max-w-lg">
            <TaskCreateForm />
            <TaskList />
        </section>
    );
};

export default TasksPage;
