import React, { useEffect, useState } from 'react'

function useCutsomeHook(intializer,componentName) {
    const [counter,setCounter]=useState(intializer)

    function resetCounter(){
        setCounter(counter+1)
    }

    useEffect(()=>{
        console.log("The button of the "+ componentName+" is clicked. "+counter+" times. ")
    },[counter,componentName])
return resetCounter;
}

export default useCutsomeHook
