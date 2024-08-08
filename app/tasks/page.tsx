import React from 'react';
import TaskCreateForm from '../_components/TaskCreateForm';
import TaskList from '../_components/TaskList';

const TasksPage = () => {
    return (
        <section className="max-w-lg">
            <TaskCreateForm />
            <TaskList />
        </section>
    );
};

export default TasksPage;
