import React from 'react'
import propTypes from "prop-types"

function Them({children, type="bg-dark"}) {
    return (
        <div className={`${type}`}>
            {children}
        </div>
    )
}
Them.prototype = {
    type: propTypes.string.isRequired,
}

export default Them
