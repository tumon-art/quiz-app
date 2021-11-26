
import { Options } from "./Options"
import "../SmallQuizApp/Main.css"
import Data from "./Data"
import { QuestionSec } from "./QuestionSec"
import { useState } from "react"

export const Main = () => {

    // Current Question State
    const [currentQuestion, setcurrentQuestion] = useState(0)

    //Shwo Score at last
    const [showScore, setshowScore] = useState(false)

    // Total Score Count
    const [Score, setScore] = useState(0)


    // onClick on Options 
    const optionBtnClick = (isCorrect) => {
        if (isCorrect === true) setScore(Score+1)

        const nextQuestion = currentQuestion +1;
        // nextQueston updates for getting new qus.
        
        if (nextQuestion < Data.length) {
            setcurrentQuestion(nextQuestion)
        } 
        
        else setshowScore(true)
    
    }


    return (
        <div className='main'>
        <div className='container'>
            
            {showScore ?
                <div className='score_section'> You Scored {Score} out of {Data.length} </div>
                 : <>
                <QuestionSec Data={Data} currentQuestion={currentQuestion} />
            <div className='answer_section'> 
            {Data[currentQuestion].answerOptions.map((e,i) => {
                return <Options key={i} optionBtnClick={()=>optionBtnClick(e.isCorrect)} e={e}  />
            })}
            </div>
            </>
            }

            
        </div>
        </div>
    )
}
