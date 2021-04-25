import React, {useState} from 'react'
import TaskListContextProvider from "./context/TaskListContext"

import "./App.css"
import Navigation from './components/navigation/Navigation'
import TodoPage from './components/pages/TodoPage'
import CommentPage from './components/pages/CommentPage'
import Them from './components/thems/Them'

function App() {

    const [page, setPage] = useState({
        todoPage : true,
        commentPage : false
    })

    const [activePage, setActivePage] = useState('todoPage')

    const onPageChange = (pageKey) =>{
        const updatePage = {...page}
        Object.keys(updatePage).forEach((key) =>{
            if(key === pageKey){
                updatePage[pageKey] = true
            }else{
                updatePage[key] = false
            }
        })
        setPage(updatePage)

        setActivePage(pageKey)
    }

    return (
        <>
            <Navigation activePage={activePage} onPageChange={onPageChange} />
            <TaskListContextProvider>
                <Them>
                    {page.commentPage && <CommentPage />}   
                    {page.todoPage && <TodoPage />}
                </Them> 
            
            </TaskListContextProvider>
       </>
    )
}
export default App
