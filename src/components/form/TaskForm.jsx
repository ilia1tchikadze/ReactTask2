import React, {useContext, useState, useEffect} from 'react'
import {TaskListContext} from "../../context/TaskListContext"
import Header from '../form/Header'
import TaskList from '../form/TaskList'

function TaskForm() {
    const {addTask, clearTask, editTask, editItem} = useContext(TaskListContext)
   

    const [title, setTitle] = useState('')

    const handleChange = e => {
        setTitle(e.target.value)
        

    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!editItem){
            addTask(title)
            setTitle("")
        }
        else{
            editTask(title, editItem.id)

        }
        
        
    }

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title)
            console.log(editItem)
        }else{
            setTitle("")
        }

    }, [editItem])


    return (
        <>
        <Header />

        <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        placeholder="Add Task..."
        required
        className="task-input"
      />
      <div className="buttons">
        <button
         
         type="submit"
         className="btn add-task-btn">
          {editItem ? "Edit item" : "Add item"}
        </button>

        <button
        onClick={clearTask}
         className="btn clear-btn">
          Clear
        </button>
      </div>
    
    </form>
    <TaskList />
    </>
    )
}

export default TaskForm
