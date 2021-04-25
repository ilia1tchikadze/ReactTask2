import React, {useContext} from 'react'
import Task from "../form/Task"
import {TaskListContext} from "../../context/TaskListContext"

function TaskList() {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
        {tasks.length ? (
            <ul className="list">
                {tasks.map((task) =>{
                    return <Task task={task} key={task.id} />

                })}
            </ul>

        ): (
            <div className="no-tasks">NO TASKS</div>
        )}
            
        </div>
    
    )
}

export default TaskList
