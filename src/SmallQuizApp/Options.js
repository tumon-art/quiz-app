import React from 'react'

export const Options = (props) => {
    const {e,optionBtnClick} = props
    return (
        <>
            <div onClick={optionBtnClick}> {e.answerText} </div>
            
        </>
    )
}
