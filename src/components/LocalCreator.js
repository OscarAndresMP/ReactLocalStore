import React from 'react'
import { useState } from "react";

function LocalCreator(props) {
    const [newlocalName, setNewlocalName] = useState('');
    const updateNewLocal = (e) => setNewlocalName(e.target.value);
    const createNewLocal = () => {
        props.createNewLocal(newlocalName);
        setNewlocalName('');
    }

    return (
        <div className="my-1">
            <input type="text" className="form-control" placeholder="Agregar tarea" value={newlocalName} onChange={updateNewLocal}/>
        <button className="btn btn-success my-2 form-control" onClick={createNewLocal}>
            Agregar
        </button>
        </div>
    )
}

export default LocalCreator
