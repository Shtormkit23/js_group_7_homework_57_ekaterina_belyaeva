import React from 'react';

const RenderIndividuallySum = props => {
    if (props.individuallyOrderForPerson.length > 0) {
        return (
            <div>
                <p>Общая сумма: {props.individuallyOrder.total} сом</p>
                {
                    props.individuallyOrderForPerson.map((person, index) => {
                        return <p key={index}> {person.name} : {person.sum} сом</p>
                    })
                }
            </div>
        );
    }

    return ''
};

export default RenderIndividuallySum;