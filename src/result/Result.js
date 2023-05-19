import './Result.css'
import ResultList from './ResultList';
import { useState } from 'react';

function Result() {

    function getResult() {

        console.log(sessionStorage);

        let EI;
        let NS;
        let FT;
        let PJ;

        let E = sessionStorage.getItem("E");
        let I = sessionStorage.getItem("I");
        if (parseInt(E) > parseInt(I)) {
            EI = "E";
        } else {
            EI = "I";
        }

        let N = sessionStorage.getItem("N");
        let S = sessionStorage.getItem("S");
        if (parseInt(N) > parseInt(S)) {
            NS = "N";
        } else {
            NS = "S";
        }
        
        let F = sessionStorage.getItem("F");
        let T = sessionStorage.getItem("T");
        if (parseInt(F) > parseInt(T)) {
            FT = "F";
        } else {
            FT = "T";
        }

        let P = sessionStorage.getItem("P");
        let J = sessionStorage.getItem("J");
        if (parseInt(P) > parseInt(J)) {
            PJ = "P";
        } else {
            PJ = "J";
        }

        let MBTI_ = EI + NS + FT + PJ;
        console.log(MBTI_)

        let MBTI = "ENTP";

        for (let i=0; i < ResultList.length; i++) {
            if (ResultList[i].value === MBTI) {
                return ResultList[i]
            }
        }

    }

    let [result, setResult] = useState(getResult());
    console.log(result)

    return (

        <div className='bg-img-result'>
            <img src={result.img} className='result-image'></img>
            <div className='result-text'>{result.text}</div>
        </div>

    )
}

export default Result;