import React, {useState} from "react";
import '../App.css'
import LeftHand from "./Counter/LeftHand";
import RightHand from "./Counter/RightHand";
import TodoInput from "./ToDo/TodoInput";
import ListOfItems from "./ToDo/ListOfItems";

function MainContent() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(2);

    const clickHandler = (newCount) => {
        setCount(newCount);
    }
    
    const handleChange = (e) => {
        let userInput = e.target.value;
        return <p>{userInput}</p>
    }

    return (
        <div className="tile is-ancestor tile-margin-top">
            <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child box">
                    <h2 className="title">Lorem ipsum</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                        demonstrate the visual form of a document or a typeface without relying on meaningful
                        content.</p>
                </div>
                <div className="tile is-child box">
                    <h2 className="title">Counter</h2>
                    <LeftHand 
                        count={count} 
                        changeCount={clickHandler}
                        step={step}
                    />
                    <RightHand rightData={count} />
                    <p>The discovery of the text's origin is attributed to Richard McClintock, a Latin scholar at
                        Hampden–Sydney College. McClintock connected Lorem ipsum to Cicero's writing sometime
                        before 1982 while searching for instances of the Latin word consectetur, which was rarely
                        used in classical literature.[4] McClintock first published his discovery in a 1994 letter
                        to the editor of Before & After magazine, contesting the editor's earlier claim that Lorem
                        ipsum had no meaning.[5]</p>
                    <img src="https://via.placeholder.com/850x500" alt="placeholder"/>
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