import './AnswerButton.css'

function AnswerButton(props) {
    return (
        <button onClick={props.onClick} className='answerButton' id={props.id}>{props.ans}</button>
    )
}


export default AnswerButton;