import React from 'react'

function LocalRow(props) {

    /* const deletLocal = ((e) => e.target.value);
    const deleteLocal = () => props.deleteLocal(deletLocal); */
    return (
        <tr key={props.name}>
        <td>
        {props.local.name}
        </td>
        <td>
            <input type="checkbox" 
            checked={props.local.done} 
            onChange={ () => props.toggleLocal(props.local)} 
            />
        </td>
        {/* <td><button className = "btn btn-danger btm-sm delete" 
        onClick={deleteLocal}>
        X</button></td> */}
    </tr>
    )
}

export default LocalRow
