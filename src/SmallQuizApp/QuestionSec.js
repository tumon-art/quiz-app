export const QuestionSec = (props) => {
    const {Data,currentQuestion} = props
    return (
        <>
            <div className='question_section'> 
            <div className='question_count'>
            <span> Questions {currentQuestion+1} </span>
            <span> /{Data.length} </span>
            </div> 
            <div className='question_text'>
            {Data[currentQuestion].questionText}
            </div>
            </div>
        </>
    )
}
