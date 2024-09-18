import React from 'react'

function QuestionResult(props) {
    return (
        <><div className='show-score'>
            your Score:{props.score}<br />

            Total Score:{props.totalScore}

        </div>
            <button id="next-button" onClick={props.tryAgain}>Try Again</button></>
    )
}

export default QuestionResult