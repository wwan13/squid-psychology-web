import './AnswerButton.css'

function AnswerButton(props) {
    return (
        <button className='answerButton'>{props.ans}</button>
    )
}


export default AnswerButton;