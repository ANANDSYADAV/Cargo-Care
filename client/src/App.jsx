import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import DriverProfile from './pages/DriverProfile'
import VehicleProfile from './pages/VehicleProfile'
import Dashboard from './pages/Dashboard'
import Journey from './pages/Journey'
import Signin from './pages/Signin'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/driver-profile' element={<DriverProfile />} />
        <Route path='/vehicle-profile' element={<VehicleProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/signin' element={<Signin/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App