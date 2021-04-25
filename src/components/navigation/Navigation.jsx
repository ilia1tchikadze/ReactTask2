import React from 'react'
import propTypes from "prop-types"

function Navigation({activePage, onPageChange}) {
    return (
        <div className="row mt-2 ">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <button
                     className={`nav-link ${activePage === "todoPage" ? "active" : ""}`}
                     onClick = {() => onPageChange("homePage")}>
                     TODO PAGE</button>
                </li>
                <li className="nav-item mr-2 ">
                    <button
                     className={`nav-link ${activePage === "commentPage" ? "active" : ""}`}
                     onClick = {() => onPageChange("commentPage")}>
                     Comments Page</button>
                </li>
            </ul>
        </div>
            
    )

    
}

Navigation.propTypes = {
    activePage : propTypes.string.isRequired,
    onPageChange : propTypes.func.isRequired,
}


export default Navigation
