import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Courses from './Pages/Courses';
import Footer from './Components/Footer';
import Pricing from './Pages/Pricing';
import Login from './Pages/LoginSignup/Login';
import Signup from './Pages/LoginSignup/Signup';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Info from './Pages/Info';
import Profile from "./Pages/Profile";
import WhatsappIcon from "./Assests/WhatsApp-logo.png"
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/course/:id' element={<Pricing />}></Route>
          <Route path='/course' element={<Courses />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/userprofile' element={<Profile />}></Route>
        </Routes>
        <Footer />
        <img src={WhatsappIcon} alt='WhatsappIcon' className="cursor-pointer hover:scale-110" style={{width:"5rem", height:"3rem", position:'fixed', bottom:60, right:10}}/>
      </BrowserRouter>
    </>
  );
}

export default App;
