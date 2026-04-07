// // Example 1

// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(100);

//   useEffect(function(){
//     console.log("Use Effect is running....");
//   },[num])

//   return (
//     <div>
//       <h1>num: {num}</h1>
//       <h2>num2: {num2}</h2>
//       <button onMouseEnter={()=>{
//         setNum(num+1);
//       }}
//       onMouseLeave={()=>{
//         setNum2(num2+10);
//       }}>Hover</button>
//     </div>
//   )
// }

// export default App



// Example 2

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(0);
  const[b, setB] = useState(0);

  function aChanging(){
    console.log("A is changing.....");
  }

  function bChanging(){
    console.log("B is changing.....");
  }

  useEffect(function(){
    aChanging();
    // console.log("UseEffect is running ...");
  },[a])

  useEffect(function(){
    bChanging();
    // console.log("UseEffect is running ...");
  },[b])

  return (
    <div>
      <button onClick={()=>{
        setA(a+1);
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1);
      }}>Change B</button>
    </div>
  )
}

export default App
