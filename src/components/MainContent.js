import React, {useState} from "react";
import '../App.css'
import LeftHand from "./Counter/LeftHand";
import RightHand from "./Counter/RightHand";
import TodoInput from "./ToDo/TodoInput";
import ListOfItems from "./ToDo/ListOfItems";
import StepConfig from "./Counter/StepConfig";
import StartPage from "./BreakoutGame2d/StartPage";

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
        <>
            <div className="tile is-ancestor tile-margin-top">
                <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                        <h2 className="title">Fetching data on btn click</h2>
                        <button onClick={load}>fetch data</button>
                        <ul>
                            {users.map(el => <li key={el.id}>{el.name}</li>)}
                        </ul>
                    </div>
                    <div className="tile is-child box">
                        <h2 className="title">Counter</h2>
                        <p>Enter number of steps you want to decrease or increase counter.</p>
                        <p>Default step is 2.</p>
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
                        <h2 className="title">Breakout 2d</h2>
                        <StartPage />
                    </div>
                </div>
            </div>
            <div>
                <div className="tile is-parent is-8">
                    <div className="tile is-child box">
                        <h2 className="title">ToDo list</h2>
                        <section className="box">
                            <TodoInput handleClick={handleChange}/>
                            <ListOfItems />
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;