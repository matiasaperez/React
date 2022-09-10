import React from 'react'
import { useEffect, useState } from 'react';

const Counter = (props) => {
    const [counter, setCounter] = useState(0)

    useEffect( () => {
      setTimeout( ()=>{
        console.log('Efecto al montaje');
      }, 10000)
    }, [])
  
    useEffect( () => {
      console.log('Efecto al montaje y cambio en counter');
    }, [counter])
  
    useEffect( () => {
      console.log('Efecto en cada render');
    })
  
    const handleClick = () => {
      console.log('hiciste click');
      setCounter( counter + 1 )
    }
  
    return (
      <div className='container'>
        <div className='my-5'>
          <strong>Contador: {counter}</strong>
        </div>
        <button onClick={handleClick} className='btn my-5'>Click</button>
        
        </div>)
}

export default Counter