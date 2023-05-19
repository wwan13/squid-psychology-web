import './Question.css'
import AnswerButton from './answerbutton/AnswerButton';
import { useParams } from 'react-router-dom';
import QueList from './QueList';
import { useState } from 'react';

function Question() {

    let que_id = useParams();
    let [que, setQue] = useState(QueList[que_id.que_id]);

    function answerButtonHandler(e) {
        let nextQueNum = parseInt(que_id.que_id) + 1
        
        let targetId = parseInt(e.target.id);
        let targetValue;

        if (targetId === 1) {
            targetValue = que.res1;
        } else if (targetId === 2) {
            targetValue = que.res2;
        }

        console.log(targetValue);
        let sessionValue = sessionStorage.getItem(targetValue);
        let addValue = parseInt(sessionValue) + 1;
        sessionStorage.setItem(targetValue, addValue);

        if (nextQueNum === 12) {
            window.location = "/result";
        } else {
            window.location = "/que/" + nextQueNum;
        }
    
    }

    return (
        <div className='bg-img-que'>
            <div className='que-wrap'>{que.que}</div>

            <div className='answer-wrap'>
                <AnswerButton onClick={answerButtonHandler} id="1" ans = {que.ans1}/>
                <AnswerButton onClick={answerButtonHandler} id="2" ans = {que.ans2} />
            </div>
        </div>
    )
}

export default Question;