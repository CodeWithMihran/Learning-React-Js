// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num ,setnum] = useState(10);
// const [username ,setUsername] = useState("Mihran");
// const [users, setUsers] = useState([10,20,30]);

// function changeNum(){
//   setnum(20);
//   setUsername("Sohail");
//   setUsers([40,50,60]);
// }

//   return (
//     <div>
//       <h1>Value of num is {num} <br /> {users} <br /> value of user is {username}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// export default App


// Increase num project by using UseState

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0);

//   function increase(){
//     setNum(num+1);
//   }

//   function decrease(){
//     setNum(num-1);
//   }

//   function addFive(){
//     setNum(num+5);
//   }

//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={addFive}>Jump by 5</button>
//     </div>
//   )
// }

// export default App



        // UseState Advanced Level

        // In Object

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState({user:'Mihran', age:18})

//   const btnClicked = ()=>{
//     // const newNum = {...num};
//     // newNum.user = 'Sohail';
//     // newNum.age = 17;
//     // setNum(newNum);
//     setNum(prev=>({...prev, age:17})) // 2nd way to update

//   }

//   return (
//     <div>
//       <h1>{num.user}, {num.age}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App


         // In Array

// import React from 'react'
// import { useState } from 'react'

// const App = () => {


//   const [num, setNum] = useState([10,20,30,40]);

//   const btnClicked =()=>{
//     const newNum = [...num];
//     newNum[0] = 50;
//     newNum[1] = 60;
//     newNum[2] = 70;
//     newNum[3] = 80;
//     setNum(newNum);
//   }


//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App


//        Concept of Batch Update

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  function increase(){
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  )
}
export default App
