import React, { useRef, useState } from 'react'
import './App.css'
import { data } from './assets/data'

const Quiz = () => {
    let [index, SetIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [result,SetResult]=useState(false);
    let [score,SetScore]=useState(0);

    //useRef() only returns one item. It returns an Object called current.
    //When we initialize useRef we set the initial value: useRef(0).
    const option1 = useRef(0);
    const option2 = useRef(0);
    const option3 = useRef(0);
    const option4 = useRef(0);

    const option_array = [option1, option2, option3, option4];


    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans == ans) {
                e.target.classList.add("correct");
                setLock(true);
                // SetScore(count=>count+1);
                SetScore(score+1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
                //ans-1 in index we take it from 0 but in oru ans we take it from 1 so we want to put -1
            }
        }

    }
    const next=()=>{
        if(lock==true){
            if(index === data.length -1){
                SetResult(true);
                return 0;
            }
            SetIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }
    const reset=()=>{
        SetIndex(0);
        setQuestion(data[0]);
        SetScore(0);
        setLock(false);
        SetResult(false);
    }
    return (
        <div  className='Container'>
            <h1 className='m-4'>Quiz App</h1>
            <hr />
            {result?<></>:<><h2 className='m-4'>{index + 1}.{question.question}</h2>
            <ul>
                <li ref={option1} onClick={(e) => { checkAns(e, 1) }} id='li' className='d-flex p-1 '>{question.option1}</li><br />
                <li ref={option2} onClick={(e) => { checkAns(e, 2) }} id='li' className='d-flex p-1 '>{question.option2}</li><br />
                <li ref={option3} onClick={(e) => { checkAns(e, 3) }} id='li' className='d-flex p-1   '>{question.option3}</li><br />
                <li ref={option4} onClick={(e) => { checkAns(e, 4) }} id='li' className='d-flex p-1  '>{question.option4}</li><br />
            </ul> <center>
            <button  onClick={next} className='btn btn-secondary  w-50'id='btn' type='button'>Next</button></center>
            <div className='index'> <center>{index+1} of {data.length} questions</center></div></>}
            {result?<> <h2 className='p-3'>Your Scored {score} out of {data.length}</h2>
            <center><button onClick={reset}  className='btn btn-secondary w-50' id='btn' type='button'>Reset</button></center></>:<></>}
            
        </div>
    )
}

export default Quiz