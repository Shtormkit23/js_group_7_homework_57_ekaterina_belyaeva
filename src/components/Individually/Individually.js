import React from 'react';
import './Individually.css'
import Person from "../Person/Person";
import OrderPrice from "../OrderPrice/OrderPrice";
import RenderIndividuallySum from "../RenderIndividuallySum/RenderIndividuallySum";

const Individually = props => {
    return (
        <div className="Individually">
            {
                props.people.map((person) => {
                   return <Person
                       key={person.id}
                       name={person.name}
                       sum={person.sum}
                       handleChangeName={(event) => props.handleChangeName(event,person.id)}
                       handleChangeSum={(event) => props.handleChangeSum(event,person.id)}
                       removePerson={(event) => props.removePerson(event,person.id)}
                   />
                })
            }

            <button className="addPeople" onClick={props.addPerson}>+</button>
            <OrderPrice
                changeCriteria={props.changeCriteria}
                orderSum={props.orderSum}
            />
            <button disabled={!props.people.length} onClick={props.orderIndividuallySum} className="button28">Рассчитать</button>
            <RenderIndividuallySum
                individuallyOrder = {props.individuallyOrder}
                individuallyOrderForPerson = {props.individuallyOrderForPerson}
            />
        </div>
    );
};

export default Individually;