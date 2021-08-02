import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part, index)=>{
        return(

         <div> 
           <h2> Name: {part.name}</h2>
           <h2> Exercises: {part.exercises}</h2>
          </div>
        )
        
      })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))