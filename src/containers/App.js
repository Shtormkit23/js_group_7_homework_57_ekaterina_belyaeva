import React, {useState} from 'react';
import Equally from "../components/Equally/Equally";
import './App.css'
import Individually from "../components/Individually/Individually";
import { nanoid } from 'nanoid'


const App = () =>{
    const [value, setValue] = useState('equally');

    const [people, setPeople] = useState([
        {name: '', sum: '', id: ''},
    ]);

    const [person, setPerson] = useState(
        {name: '', sum: 0, id: ''}
    );

    const [criteria, setCriteria] = useState([
            {value: 0, id: 'count'},
            {value: 0, id: 'sum'},
            {value: 0, id: 'percent'},
            {value: 0, id: 'delivery'},
    ]);

    const [individuallyOrder,setIndividuallyOrder] = useState({
         total: 0
    })

    const [individuallyOrderForPerson,setIndividuallyOrderForPerson] = useState([

    ])

    const [equallyOrder,setEquallyOrder] = useState({
        total: 0, people: 0, equallyPrice: 0
    })

    const selectValue = e => {
        if(e.target.checked){
            setValue(e.target.value);
        }
    };

    const handleIndividuallyForm = (event) => {
        event.preventDefault();
        const target = event.target.clients;
        console.log(target)
    }

    const handleChangeName = (event,id) => {
        const index = people.findIndex(p => p.id === id);
        const peopleCopy = [...people];
        const personCopy = {...peopleCopy[index]};
        personCopy.name = event.target.value;
        peopleCopy[index] = personCopy;
        setPeople(peopleCopy);
    }

    const handleChangeSum = (event,id) => {
        const index = people.findIndex(p => p.id === id);
        const peopleCopy = [...people];
        const personCopy = {...peopleCopy[index]};
        personCopy.sum = event.target.value;
        peopleCopy[index] = personCopy;
        setPeople(peopleCopy);
    }

    const addPerson = () => {
        const peopleCopy = [...people];
        const personCopy = {...person};
        personCopy.id = nanoid();
        setPerson(personCopy);
        peopleCopy.push(personCopy);
        setPeople(peopleCopy)
    }

    const removePerson = (event,id) => {
        const index = people.findIndex(p => p.id === id);
        const peopleCopy = [...people];
        peopleCopy.splice(index, 1);
        setPeople(peopleCopy);
    };

    const changeCriteria = (event,id) => {
        const criteriaCopy = [...criteria];

        criteriaCopy.map((item) => {
            if(item.id === id){
               return item.value = event.target.value
            }
            return ""
        });

        setCriteria(criteriaCopy)
    }

    const orderSum = () => {
        const count = Number(criteria.filter(item => item.id === 'count')[0].value);
        const percent = Number(criteria.filter(item => item.id === 'percent')[0].value);
        const sum = Number(criteria.filter(item => item.id === 'sum')[0].value);
        const delivery = Number(criteria.filter(item => item.id === 'delivery')[0].value);

        const total = (sum + delivery) + (sum + delivery) / 100 * percent;
        const equallySum = Math.ceil(total / count)
        const newOrderCopy = {...equallyOrder}

        newOrderCopy.total = total
        newOrderCopy.people = count
        newOrderCopy.equallyPrice = equallySum

        setEquallyOrder(newOrderCopy)
    }

    const orderIndividuallySum = () => {

        const percent = Number(criteria.filter(item => item.id === 'percent')[0].value);
        const delivery = Number(criteria.filter(item => item.id === 'delivery')[0].value);
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        const totalIndividually = people.map((person) => {
            return (Number(person.sum) + Number(person.sum) / 100 * percent) + Number(delivery / people.length);
        });

        const totalSum = Number(totalIndividually.reduce(reducer)) + delivery;

        const peopleWithPercent = totalIndividually.map((sum,index) => {
            return {name: people[index].name, sum: Math.ceil(sum)}
        })

        const individuallyOrderCopy = {...individuallyOrder}
        individuallyOrderCopy.total = Math.ceil(totalSum);

        setIndividuallyOrder(individuallyOrderCopy)
        setIndividuallyOrderForPerson(peopleWithPercent)
    }

  return (
    <div className="App">
        <h4>Сумма заказа считается:</h4>
        <div className="radioButton">
            <label className="label"><input type="radio" name="value" value="equally" checked={value === 'equally'} onChange={selectValue}/>Поровну между всеми участниками</label>
            <label className="label"><input type="radio" name="value" value="individually" checked={value === 'individually'} onChange={selectValue}/>Каждому индивидуально</label>
        </div>

        {
            value === 'individually' ?

            <Individually
            handleIndividuallyForm={handleIndividuallyForm}
            handleChangeName={handleChangeName}
            handleChangeSum={handleChangeSum}
            addPerson={addPerson}
            removePerson={removePerson}
            people={people}
            changeCriteria={changeCriteria}
            orderIndividuallySum={orderIndividuallySum}
            individuallyOrder={individuallyOrder}
            individuallyOrderForPerson={individuallyOrderForPerson}
            /> :
            <Equally
                orderSum = {orderSum}
                changeCriteria={changeCriteria}
                equallyOrder = {equallyOrder}
            />}

    </div>
  );
}

export default App;
