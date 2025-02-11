import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/global/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import ApiFetch from './pages/ApiFetch';
// import Admin from './pages/Admin'
// import Dashboard from './pages/Dashboard'

const App = () => {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    )
  }

  const Dashboard = () => {
    return (
      <>
        <Topbar />
        <Sidebar />
        <Outlet />
      </>
    )
  }

  const routerPath = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/about',
            element: <About />
          },
          {
            path: '/service',
            element: <Service />
          },
        ]
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/apifetch',
        element: <ApiFetch />,
      },
    ]
  )







  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   try {
  //     // api 
  //     navigate('/login')
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  return (
    <>
      <RouterProvider router={routerPath} />
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
    </>

  )
}

export default App
