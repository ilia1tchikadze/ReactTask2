import React,{createContext, useState, useEffect} from 'react'
// import uuid from "uuid"
import Api_Service from '../services/Api';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {

    const [tasks, Settasks] = useState([
        // {title: "Read Books", id:1 },
        // {title: "Wash a Car", id:1 },
        // {title: "Write a Code", id:3 }
    ])

    useEffect(() => {
        Api_Service.getNoteList({callBack: Settasks});
    }, [])

    const [editItem, setEditItem] = useState(null)

    const addTask = (title) => {
        Settasks([...tasks, {title, id: Math.random() * 10000}])
    }

    const removeTask = (id) => {
        Settasks(tasks.filter(task => task.id !== id))
    }

    const clearTask = () => {
        Settasks([])
    }

    const findItem = id =>{
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    const editTask = (title, id) =>{
        const newTask = tasks.map(task => task.id === id ? {title,id} : task)
        Settasks(newTask)
        setEditItem(null)
    }

    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearTask, findItem, editTask, editItem}}>
           {props.children}
        
        </TaskListContext.Provider>
    )
        
    
}

export default TaskListContextProvider