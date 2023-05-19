import './Main.css';
import { Link } from 'react-router-dom';

function Main() {

    function initSessionStorage() {

        sessionStorage.clear()

        sessionStorage.setItem("E", 0);
        sessionStorage.setItem("I", 0);

        sessionStorage.setItem("S", 0);
        sessionStorage.setItem("N", 0);

        sessionStorage.setItem("T", 0);
        sessionStorage.setItem("F", 0);

        sessionStorage.setItem("P", 0);
        sessionStorage.setItem("J", 0);

    }

    initSessionStorage()

    return(
        <div className='bg-img-main'>
            <div className='title-wrap'>
                <p className='title'>오징어</p>
                <p className='title psyco'>심리학</p>
            </div>
            <Link to="/que/0" className='start-btn'>tㅣ작</Link>
        </div>
    )

}

export default Main;