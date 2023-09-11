import React from 'react'

// function TerniaryOperator() {
//     const users=[
//         {name:'Testing'},
//         {name:'Demo'},
//         {name:'Text'},
//         {name:'render'}
//     ]
//     const showList=false
//   return (
//     <div>
//       {showList?(
//         <ul>
//             {users.map(user=>
//                 <li>{users.name}</li>)}
//         </ul>
//       ):(
//         <p>NO user available</p>
//       )}
//     </div>
//   )
// }

// export default TerniaryOperator

function TerniaryOperator(){
    let y=10;
    return(
        <div>
            {
                y>11?<h1>condition is true</h1>:<h5>ccondition is false</h5>
            }
        </div>
    )
}

export default TerniaryOperator

