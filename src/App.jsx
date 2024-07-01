import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import { stringify, v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';


function App() {
  const router = createBrowserRouter([
    {
      path: "/TaskMaster",
      element: <><Navbar /><Home/><Footer /></>
    },
    {
      path: "/",
      element: <><Navbar /><Home/><Footer /></>
    },
    {
      path:"/about",
      element:<><Navbar /><About/><Footer /></>
    },
  ])


  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
