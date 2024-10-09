import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    // error info as an object
    const errorname = useRouteError()
    console.log(errorname)
  return (
        <>
        <h1>Oops...</h1>
        <h2>Something went wrong...</h2>
        <h3>{errorname.status}:{errorname.statusText}</h3>
        </>
  )
}

export default Error