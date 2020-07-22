import React, {useState} from "react";
import '../App.css'
import LeftHand from "./Counter/LeftHand";
import RightHand from "./Counter/RightHand";
import TodoInput from "./ToDo/TodoInput";
import ListOfItems from "./ToDo/ListOfItems";
import StepConfig from "./Counter/StepConfig";

function MainContent() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(2);

    const clickHandler = (newCount) => {
        setCount(newCount);
    }

    const onStepChange = (val) => {
        setStep(val);
    }
    
    const handleChange = (e) => {
        let userInput = e.target.value;
        return <p>{userInput}</p>
    }

    const load = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    const [users, setUsers] = useState([]);

    return (
        <div className="tile is-ancestor tile-margin-top">
            <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child box">
                    <h2 className="title">Lorem ipsum</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a typeface without relying on meaningful
                        content.</p>
                    <button onClick={load}>fetch data</button>
                    <ul>
                        {users.map(el => <li key={el.id}>{el.name}</li>)}
                    </ul>
                </div>
                <div className="tile is-child box">
                    <h2 className="title">Counter</h2>
                    <LeftHand 
                        count={count} 
                        changeCount={clickHandler}
                        step={step}
                    />
                    <RightHand rightData={count} />
                    <StepConfig onStepChange={onStepChange}/>
                    <div id="error-msg"></div>
                </div>
            </div>
            <div className="tile is-parent">
                <div className="tile is-child box">
                    <h2 className="title">ToDo list</h2>
                    <section className="box">
                        <TodoInput handleClick={handleChange}/>
                        <ListOfItems />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default MainContent;