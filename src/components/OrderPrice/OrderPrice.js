import React from 'react';

const OrderPrice = props => {
    return (
        <div className="OrderPrice">
            <div>
                <div className="input-block-2">
                    <p className="text">Процент чаевых:</p>
                    <input className="input" onChange={(event => props.changeCriteria(event,"percent"))}/>
                    <p>%</p>
                </div>
                <div className="input-block-2">
                    <p className="text">Доставка:</p>
                    <input className="input" onChange={(event => props.changeCriteria(event,"delivery"))}/>
                    <p>сом</p>
                </div>
            </div>
        </div>
    );
};

export default OrderPrice;