import React from 'react';

const RenderEquallySum = props => {
    if(props.equallyOrder.people > 0){
        return (
            <div>
                <p>Общая сумма: {props.equallyOrder.total} сом</p>
                <p>Количество человек: {props.equallyOrder.people}</p>
                <p>Каждый платит по: {props.equallyOrder.equallyPrice} сом</p>
            </div>

        );
    }

    return ''
};

export default RenderEquallySum;