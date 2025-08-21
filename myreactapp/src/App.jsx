import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className='heading'>Header</div>
      <div classname = 'content'>
        <Sidebar />
        <Routes>
          < Route path="/" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        </div>
    </Router>
    <div className='container'>
      <div className='heading'>Header</div>
      <div className='content'>Main section</div>
      <div className='footer'>Footer</div>
    </div>
    </>
  )
}

export default App
