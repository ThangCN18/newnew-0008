import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayoutComponent from './components/LayoutComponent'
import { Route, Routes } from 'react-router-dom'
import NotificationComponent from './components/NotificationComponent'
import { useSelector } from 'react-redux'
import { RootType } from './store/types'

function App() {
  const [count, setCount] = useState(0)
  const notify = useSelector((state : RootType)=> state.notify)

  return (
    <>
      
        <Routes>
          
          <Route path='/' element={<LayoutComponent></LayoutComponent>} />
          
          <Route path='/*' element={<>ádsadsads</>} />

        </Routes>
        
        {/* <NotificationComponent /> */}
    </>
  )
}

export default App
