import React from 'react'

function LocalVisibilityC(props) {
    return (
        <div className="form-check">
        <input type="checkbox" 
        className="form-check-input-center" 
        checked={props.isChecked} 
        onChange={e => props.callback(e.target.checked)}/>
        <label htmlFor="form-check-label">
            {props.description}
        </label>
            
        </div>
    )
}

export default LocalVisibilityC