import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
// import Admin from './pages/Admin'
// import Dashboard from './pages/Dashboard'

function App() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      // api 
      navigate('/login')
    } catch (e) {
      console.log(e);
    }
  }

  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>


    </>

  )
}

export default App
