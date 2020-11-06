import React, { useState } from "react";
import '../App.css'
import LeftHand from "./Counter/LeftHand";
import RightHand from "./Counter/RightHand";
import TodoInput from "./ToDo/TodoInput";
import ListOfItems from "./ToDo/ListOfItems";
import StepConfig from "./Counter/StepConfig";
import Counter2 from "./Counter2/Counter2";
import Counter4 from "./Counter4/Counter4";

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
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Counter</p>
                        <p>Enter number of steps you want to decrease or increase counter. Default step is 2.</p>
                        <div className="level-item counter-pdg1">
                            <LeftHand
                                count={count}
                                changeCount={clickHandler}
                                step={step}
                            />
                            <RightHand rightData={count} />
                        </div>
                        <div className="level-item counter-pdg2">
                            <StepConfig onStepChange={onStepChange}/>
                        </div>
                        <div id="error-msg"></div>
                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">Counter 2</p>
                        <Counter2 />
                    </article>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child box">
                    <p className="title">Counter4</p>
                    <Counter4 />
                </article>
                <article className="tile is-child box">
                        <div className="content">
                            <p className="title">Fetching data on btn click</p>
                            <button className="button" onClick={load}>fetch data</button>
                            <ul>
                                {users.map(el => <li key={el.id}>{el.name}</li>)}
                            </ul>
                        </div>
                </article>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    {/* TODO */}
                    {/* <article className="tile is-child box">
                        <p className="title">ToDo list</p>
                        <section className="box">
                            <TodoInput handleClick={handleChange}/>
                            <ListOfItems />
                        </section>
                    </article> */}
                </div>
            </div>
        </>
    );
}

export default MainContent;