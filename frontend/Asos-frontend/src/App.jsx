import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import ManPage from './components/ManPage'
import WomanPage from './components/WomanPage'

function App() {
  return (
    <div>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/man" element={<ManPage/>} />
        <Route path="/woman" element={<WomanPage/>} />
        
      </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App
