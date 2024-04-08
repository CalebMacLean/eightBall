// Imports & Configurations
import React, { useState } from 'react';
import './EightBall.css';

/** Eight Ball Component
 * 
 * State: Tracks the current message and color
 * - Initial: { msg: "Think of a Question", color: "black" } 
 * 
 * Properties:
 * - answers: array of { msg, color } objects
 * 
 * Renders:
 * - div containing a message and has a click event listener
 */
const EightBall = ({ answers }) => {
    // create state vars for msg and color
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    // function to change msg and color
    const changeStates = () => {
        console.log("clicked");
        const randomIdx = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIdx];
        setMsg(answer.msg);
        setColor(answer.color);
    };

    // function to reset msg and color
    const resetState = () => {
        setMsg("Think of a Question");
        setColor("black");
    };

    // render the div with the message and color
    return (
        <>
        <div className={"EightBall " + color} onClick={() => changeStates()}>
            <p className="EightBall-msg">
                <b>{msg}</b>
            </p>

        </div>
        <button 
        className="EightBall-btn" 
        onClick={() => resetState()}>
            Reset!
        </button>
        </>
    )

};

// answers array of { msg, color } objects
const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

export default EightBall;
export { answers };