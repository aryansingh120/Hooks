import React, { useState } from 'react'

const Quiz = () => {
    let questions = [
        {
            Q1: "Javascript is a ....??",
            A: "JavaScript",
            B: "Java",
            C: 'Python',
            D: "CSS",
            ans: "JavaScript"
    
        },
    
        {
            Q1: "Which type of JavaScript language is ___",
            A: "Object-Oriented",
            B: "Object-Based",
            C: "Assembly-language",
            D: "High-level",
            ans: "Object-Based"
    
        },
    
        {
            Q1: "Which one of the following also known as Conditional Expression:",
            A: "Alternative to if-else",
            B: "Switch statement",
            C: "If-then-else statement",
            D: "immediate if",
            ans: "immediate if"
    
        },
        {
            Q1: "When interpreter encounters an empty statements, what it will do:",
            A: "Shows a warning",
            B: "Prompts to complete the statement",
            C: "Throws an error",
            D: "Ignores the statements",
            ans: "Ignores the statements"
    
        },
        {
            Q1: "The function and  variables are known as:",
            A: "Keywords",
            B: "Data types",
            C: "Declaration statements",
            D: "Prototypes",
            ans: "Declaration statements"
    
        },
        {
            Q1: "Which one of the following is the correct way for calling the JavaScript code?",
            A: "Preprocessor",
            B: "Triggering Event",
            C: "RMI",
            D: "Function/Method",
            ans: "Function/Method"
    
        },
        {
            Q1: "Which of the following type of a variable is volatile?",
            A: "Mutable variable",
            B: "Dynamic variable",
            C: "Volatile variable",
            D: "Immutable variable",
            ans: "Mutable variable"
    
        },
        {
            Q1: "In the JavaScript, which one of the following is not considered as an error:",
            A: "Syntax error",
            B: "Missing of semicolons",
            C: "Division by zero",
            D: "Missing of Bracket",
            ans: "Division by zero"
    
        },
        {
            Q1: "Which of the following number object function returns the value of the number?",
            A: "toString()",
            B: "valueOf()",
            C: "toLocaleString()",
            D: "toPrecision()",
            ans: "valueOf()"
    
        },
        {
            Q1: "JavaScript ignores extra spaces ??",
            A: "True",
            B: "False",
            C: "Sometimes",
            D: "Everytimes",
            ans: "Everytimes"
    
        }
    ]
    
let [index,setIndex]=useState(0);
let [flag,setFlag]=useState(false);
let [count,setCount]=useState(false);
let [right,setRight]=useState(0)
let [css,setCss]=useState("bg-[white] text-[black]")
let [p,setP]=useState(0);
let change=()=>{
    setIndex(++index);
    setCount(false)
    setCss("bg-[white] text-[black]")
    
    if(index>9)
    {
        setP(1);
        setIndex(9);
    }
        // setFlag(true)

}

let check=(e)=>{
    let x=e.target.textContent;
    if(x==questions[index].ans)
    {
        setRight(++right);
        setCount(true);
        
    }
    setCss("bg-[#8b8b8b] text-[#646464]")
        
        
    
}
  return (
    <div className='bg-[orange] h-[100vh] pt-[1px]'>
    <div className={` text-[white] font-bold flex flex-col items-center ${(p==1)?"hidden":"block"}`}>
    <p className='text-center text-[2rem] font-bold mb-[2rem]'>Quiz Dashboard</p>
    
    <p className='bg-white min-h-[5rem] text-black w-[70%] mt-[2rem]'>Q {index+1} {questions[index].Q1}</p>
    <button className={`${css} min-h-[3rem] w-[70%] mt-[2rem] rounded-md`} disabled={count} onClick={check}>{questions[index].A}</button>
    <button className={`${css} min-h-[3rem] w-[70%] mt-[2rem] rounded-md`} disabled={count} onClick={check}>{questions[index].B}</button>
    <button className={`${css} min-h-[3rem] w-[70%] mt-[2rem] rounded-md`} disabled={count} onClick={check}>{questions[index].C}</button>
    <button className={`${css} min-h-[3rem] w-[70%] mt-[2rem] rounded-md`} disabled={count} onClick={check}>{questions[index].D}</button>


<button className='bg-[blue] py-[.5rem] px-[3rem] rounded-md mt-[2rem]' disabled={flag}  onClick={change}>next</button>
  


      
    </div>
    <p className={`text-center font-bold text-white mt-[20rem] text-[2rem] ${(p==1)?"block":"hidden"}`}>Total Right Ans is = {right}</p>
    </div>
  )
}

export default Quiz

