import React from 'react';
import './Equally.css';
import OrderPrice from "../OrderPrice/OrderPrice";
import RenderEquallySum from "../RenderEquallySum/RenderEquallySum";

const Equally = props => {
    return (
        <div className="Equally">
            <div className="input-block">
                <p className="text">Человек:</p>
                <input className="input" onChange={(event => props.changeCriteria(event, "count"))}/>
                <p>чел.</p>
            </div>
            <div className="input-block">
                <p className="text">Сумма заказа:</p>
                <input className="input" onChange={(event => props.changeCriteria(event,"sum"))}/>
                <p>сом</p>
            </div>
            <OrderPrice
                changeCriteria={props.changeCriteria}
            />
            <button onClick={props.orderSum} className="button28">Рассчитать</button>
            <RenderEquallySum
                equallyOrder = {props.equallyOrder}
            />
        </div>
    );
};

export default Equally;