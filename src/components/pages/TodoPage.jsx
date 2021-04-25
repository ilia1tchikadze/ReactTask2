import React from 'react'
import TaskForm from '../form/TaskForm'


function TodoPage() {
    
    return (
        <div className="container">
            <div className="app-wrapper">
                <div className="main">
                   <TaskForm />
                </div>
            </div>
        </div>
    )
}

export default TodoPage
