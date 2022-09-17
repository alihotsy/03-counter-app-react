import React, {useState,useEffect} from 'react'
// import PropTypes from 'prop-types'

const Timing = ({counter, initialize}) =>{
    if(initialize){
        return <h1>{counter}</h1>
    } else{
        return null;
    }
}

const CounterApp = () => {
 const [counter, setCounter] = useState(0);
 const [initialize, setInitialize] = useState(false)

  useEffect(() =>{
      let timer;
      if(initialize){
          timer = setInterval(() => {
              setCounter((c) => c+1);
          }, 1000);
      } 
      return () =>{
          clearInterval(timer)
          console.log("Noooooo")
      }
  }, [initialize])  
    return (
        <div>
            <h1>Counter!</h1>
             <Timing counter = {counter} initialize = {initialize}/>
            <button onClick = {() => setInitialize(true)}>Run</button>
            <button onClick = {() => setInitialize(false)}>Stop</button>
        </div>
    )
}

// CounterApp.propTypes = {
//    value: PropTypes.number.isRequired
// }

export default CounterApp

