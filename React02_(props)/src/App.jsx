import React from 'react'
import Card from './assets/components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={20} img='https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg'/>
      <Card user='Mihran' age={18} img='https://img.freepik.com/premium-photo/3d-illustration-cartoon-business-man-character-avatar-profile_1183071-397.jpg?w=360'/>
    </div>
  )
}

export default App
