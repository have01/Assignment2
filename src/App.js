import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [value, setvalue] = useState([])
   
  const submit =()=> {
    if (firstname == "" || lastname == ""){
      alert("text field should be field");
    }else{
      setvalue((olditems) => {
        return [...olditems, firstname + " " + lastname]
      })
    }
    
  }

 return (
    <div className='card'>
     <h1>Enter First & last name </h1>
      <input type="text"  onChange={(e)=>setfirstname(e.target.value)} placeholder='FirstName'/>
      <input type="text" onChange={(e) => setlastname(e.target.value)} placeholder='Lastname' /> <br />


      
      <button onClick={submit}>Submit</button>
   
     
  {
    value.map((val)=>
    {return <h1>  {val}</h1>} )
  }
    </div>
  )
 }

export default App