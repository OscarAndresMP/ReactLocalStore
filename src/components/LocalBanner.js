import React from 'react'

function LocalBanner(props) {
    return (
        <h4 className="bg-success text-white text-center p-4">
            {props.userName} LocalStore ({props.localItems.filter(t => !t.done).length} Tareas por hacer)
        </h4>
    )
}

export default LocalBanner
