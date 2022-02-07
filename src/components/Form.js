import React from 'react'

const FormComponent = (props) => {


    const handleChange = (event, id) => {
        props.changeData(id, event) 

    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let score = 0
        console.log(props.data)

        for (let i=0; i<props.data.length; i++) {
                console.log(props.data[i].userAnswer, props.data[i].correctAnswer)
                if (props.data[i].userAnswer === props.data[i].correctAnswer) {
                score = score +  1
            }
        }
        console.log("Score: ", score)

    }


    
    const formInputs = props.data.map((item) => {
        return (
        <fieldset>

            <legend>{item.question}</legend>
            <input 
                type="radio"
                id="option0"
                name={"option" + item.id}
                value={item.options[0]}
                onChange={(event) => handleChange(event, item.id)}
                checked={item.userAnswer === item.options[0]}
            />
            <label htmlFor="option0">{item.options[0]}</label>
            <br />
            
            <input 
                type="radio"
                id="option1"
                name={"option" + item.id}
                value={item.options[1]}
                onChange={(event) => handleChange(event, item.id)}
                checked={item.userAnswer === item.options[1]}
            />
            <label htmlFor="option1">{item.options[1]}</label>
            <br />
            
            <input 
                type="radio"
                id="option2"
                name={"option" + item.id}
                value={item.options[2]}
                onChange={(event) => handleChange(event, item.id)}
                checked={item.userAnswer === item.options[2]}
            />
            <label htmlFor="option2">{item.options[2]}</label>
            <br />

            <input 
                type="radio"
                id="option3"
                name={"option" + item.id}
                value={item.options[3]}
                onChange={(event) => handleChange(event, item.id)}
                checked={item.userAnswer === item.options[3]}
            />
            <label htmlFor="option3">{item.options[3]}</label>
            <br />
            
        </fieldset>
        )

    })
    

    return (
        <form onSubmit={handleSubmit}>
            {formInputs}
            <button type='submit'> Submit</button>
        </form>
    )

}

export default FormComponent;