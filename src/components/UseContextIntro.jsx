import React, { createContext, useContext, useState } from 'react'

const userContext=createContext()

function UseContextIntro() {
    const [user,setUser]=useState('Test')
  return (
    <userContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Component1/>
    </userContext.Provider>
  )
}

 function Component1(){
    return(
        <>
        <h1>Component 1</h1>
        <Component2/>
        </>
    )
 }

 function Component2(){
    return(
        <>
        <h1>Component 2</h1>
        <Component3/>
        </>
    )
 }

 function Component3(){
    return(
        <>
        <h1>Component 3</h1>
        <Component4/>
        </>
    )
 }

 function Component4(){
    return(
        <>
        <h1>Component 4</h1>
        <Component5/>
        </>
    )
 }

 function Component5(){
    const user=useContext(userContext)
    return(
        <>
        <h1>{`Hello Welcome ${user} again !`}</h1>
        <h1>Component 5</h1>
        </>
    )
 }

export {Component1,Component2,Component3,Component4,Component5}
export default UseContextIntro
