import React from 'react'

const FrontComponent = (props) => {
    return (
        <div className='front-component' >
            <h1>Quizical</h1>
            <p>How much you know!!!...</p>
            <button onClick={props.toggleGame}>StartGame</button>
        </div>
    )
}

export default FrontComponent;