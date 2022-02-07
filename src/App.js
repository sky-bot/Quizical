import './App.css';
import React from 'react'
import Front from './components/front'
import FormComponent from './components/Form'
import {nanoid} from "nanoid"



function App() {
    const [game, setGame] = React.useState(true)
    const [data, setData] = React.useState([])

    console.log(game)

    function toggleGame() {
      console.log("Game is toggled")
      setGame(prevState => !prevState)

    }

    function changeData (id, event) {
      console.log("Chnage data: ",id, event.target.value)
      setData(prevState => prevState.map((item) => item.id===id ? ({...item, userAnswer:event.target.value}): item ))
    }
    console.log("Form is Renderd")

    React.useEffect(() => {
      console.log("UseEffect")
      fetch("https://opentdb.com/api.php?amount=6&category=22&difficulty=easy&type=multiple&encode=base64")
        .then(res => res.json())
        .then(data => {
            console.log("Actual Data", data.results)
            let userData = []
            for(let i=0;i<data.results.length;i++) {
                userData.push({
                  id:nanoid(),
                  question: atob(data.results[i].question),
                  options: [...data.results[i].incorrect_answers.map((item) => atob(item)), atob(data.results[i].correct_answer)],
                  userAnswer: "",
                  correctAnswer: atob(data.results[i].correct_answer)
                })
            }
            setData(userData)

            console.log(data.results)
        })

    }, [game]) 
    
    return (
      <main className='main-component'>
        {game ? <Front toggleGame={toggleGame}/> : <FormComponent key={nanoid()} data={data} changeData={changeData} toggleGame={toggleGame}/>}
      </main>
    );
}

export default App;
