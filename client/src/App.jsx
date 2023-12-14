import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <>
      {/* BrowserRouter: Provides the context for the router to manage navigation */}
      <BrowserRouter>
        {/* Routes: Container for defining different routes in the application */}
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<Home />} />
          
          {/* Route for the contact page */}
          <Route path='/contact' element={<Contact />} />
          
          {/* Route for the about page */}
          <Route path='/about' element={<About />} />
          
          {/* Route for the login page */}
          <Route path='/login' element={<Login />} />
          
          {/* Route for the register page */}
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
