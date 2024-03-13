import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {

  return (
    <>

      <h1>React core concepts</h1>
      <Todo task="learn react" isDone='false'></Todo>
      <Todo task="Try core concepts" isDone='true'></Todo>
      <Todo task="Explore jsx" isDone='false'></Todo>
      {/* <Device name="laptop" price="25500tk"></Device>
      <Device name="mobile" price="16000tk"></Device>
      <Device name="lens" price="1300tk"></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Developer></Developer> */}


    </>
  )
}

function Device(props){
  return <h3>Device name: {props.name} and price: {props.price}</h3>
}

function Person(){
  const age = 23;
  const person = {name : 'Tasib'};
  return <h3 className='student'>I am a {person.name} with age: {age}</h3>
}

function Developer(){
  const developerStyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid steelblue',
    borderRadius:'10px'
  }

  return(
    <div style={developerStyle}>
      <h4> Hello developers!!</h4>
      <p>Coding</p>
    </div>
  )
}

export default App
