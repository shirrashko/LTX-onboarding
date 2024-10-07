import { useState } from 'react'
import './App.css'
import UserList from './pages/UserList/UserList'
import Toggle from './components/Toggle/Toggle.tsx'
import Search from './components/search/Search.tsx'

function App() {

  return (
    <>
    <Toggle />
    <Search />
    <UserList />
    </>
  )
}

export default App
