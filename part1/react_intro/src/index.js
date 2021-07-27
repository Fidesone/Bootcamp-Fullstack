import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const Header_course= 'Ejercicio 1.1 & 1.2'
  const Content = (props) => {
    return (
      <div>
        <p>{props.name}</p>
        <p>{props.name}</p>
        <p>{props.name}</p>
        
      </div>
    )
  }
  const Total = 10
  
  return (
    <div>
     <h1>{Header_course} </h1> 
      <Content name= 'Parte 1'/>
      <p>{Total} </p>
      

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))