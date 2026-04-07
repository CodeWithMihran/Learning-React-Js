import React from 'react'

const App = () => {

  // localStorage.setItem('user','Mihran');
  // localStorage.setItem('age','18');

  // const user = localStorage.getItem('user');
  // const age = localStorage.getItem('age');

  // console.log(user, age);

  // localStorage.removeItem('age');
  // localStorage.removeItem('user');

  // const user = {
  //   username : "Mihran",
  //   age : 18,
  //   city : "Patna"
  // }
  // localStorage.setItem('user', JSON.stringify(user));

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  localStorage.clear();

  return (
    <div>
      App
    </div>
  )
}

export default App
