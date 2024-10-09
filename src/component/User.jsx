import React, { useEffect, useState } from 'react'

//use curly braces while destructuring the props 
export const User = ({name}) => {

    const [count] = useState(0)
    const [count2] = useState(2)

  // setting the intervall call of every one sec will print this in the console
   useEffect(() => {
      const timer = setInterval(() => {
        console.log("set interval from fxn ")
      }, 1000);

    // this will unmount the fxn in useEffect
    return () => {
      clearInterval(timer)
    }

   } )

  return (
    <>
        <div className='user-card' >
        <h2>{name}</h2>
        <h3>location:Pune</h3>
        <h4>contact:9879849984</h4>
        <h5>{count}</h5>
        <h5>{count2}</h5>
        </div>
    </>

)
}

export default User