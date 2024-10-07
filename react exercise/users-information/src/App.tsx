import { useState } from 'react'
import './App.css'
import UserList from './pages/UserList/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList />
    </>
  )
}

export default App
