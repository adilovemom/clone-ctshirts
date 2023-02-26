import { useState } from 'react'
import './App.css'
import { AllRoutes } from './components/AllRoutes'
import { Footer } from './components/Footer/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  )
}

export default App
