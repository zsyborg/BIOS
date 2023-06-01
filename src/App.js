import logo from './media/BIOS_symbol 1.svg';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Nav from './components/Nav';
import About from './pages/about';
import Account from './pages/newaccount';
import Signup from './components/SignUp';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import Footer from './components/footer';
// import Form3d from './components/upload-3dfile';
// import ScienticForm from './components/form-scientic-info';
import ProductCard from './components/ProductCard';
import selectType from './components/selectType';
import Shopy from './pages/shop';
import Prof from './pages/profile';
import Home from './pages/home';
import Model from './pages/model';
function App() {
  

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className="App" style={{'backgroundColor':'#1B1C30'}}>
    <header className="App-header">
      <Nav/>
      </header>
     
      <div className="">
        <SignIn/>
        <div className='w-full h-1 border-2 my-16 border-blue-500'>

        </div>
        {/* <About /> */}

        <Signup />
        {/* <SignIn /> */}
        <ForgotPassword />
  
      </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
