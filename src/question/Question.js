import './Question.css'
import AnswerButton from './answerbutton/AnswerButton';
import { useParams } from 'react-router-dom';
import QueList from './QueList';
import { useState } from 'react';

function Question() {

    let que_id = useParams();
    let [que, setQue] = useState(QueList[que_id.que_id]);

    // console.log(typeof que_id)
    // console.log(que)

    return (
        <div className='bg-img-que'>
            <div className='que-wrap'>asd</div>

            <div className='answer-wrap'>
                <AnswerButton ans = "asd"/>
                <AnswerButton ans = "qwe" />
            </div>
        </div>
    )
}

export default Question;