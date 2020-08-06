import React from 'react';
import "./Person.css"

const Person = props => {
    return (<div className="input-block-2">
        <input value={props.name} onChange={props.handleChangeName} placeholder="Введите имя" className="input-name"/>
        <input value={props.sum} onChange={props.handleChangeSum} placeholder="Сумма" className="input-price"/>
        <p>сом</p>
        <button className="delete" onClick={props.removePerson}>delete</button>
    </div>)
};

export default Person;