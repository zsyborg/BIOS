import React, { useState } from 'react';
import axios from 'axios';
import { Routes, useNavigate  } from 'react-router-dom';


import logo from '../media/BIOS_line_white.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Router } from 'react-router-dom';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
export interface State extends SnackbarOrigin {
  open: boolean;
}


function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  


  // Alert
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  
  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
    
  };
  
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  
  
  const signInWithEmailAndPasswordHandler = (event, email, password, newState: SnackbarOrigin) => {
    event.preventDefault();

    axios.post('https://development.biosapplication.com/api/v1/auth/login', { email, password })
    .then(response => {
      setState({ open: true, ...newState });
      console.log(response.data);
      <Snackbar open="true" autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Login Successfull !!
      </Alert>
    </Snackbar>
     
      
    })
    .catch(error => {
      setError('Error signing in with password and email!');
      console.error('Error signing in with password and email', error);
    });
};

const onChangeHandler = (event) => {
  const { name, value } = event.currentTarget;

  if (name === 'userEmail') {
    setEmail(value);
  } else if (name === 'userPassword') {
    setPassword(value);
  }
};


  return (
    <div>
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-900 rounded-md p-3">
          
          <div>
            <h2>SignIn</h2>

          </div>
          {/* handleClick({
                  vertical: 'top',
                  horizontal: 'right',
                }))  */}
          <form onSubmit={(event) => { signInWithEmailAndPasswordHandler(event, email, password)}} className="mt-8 space-y-6" action="#" method="POST">
            
            <div>
          
            <div>
      <TextField id="email" variant="outlined" label="Your email" className='w-full' name="userEmail"
          value={email}
          onChange={onChangeHandler}/>
      </div>
            <div>
      <TextField id="password" variant="outlined" label="Password" className='w-full' name="userPassword"
          value={password}
          onChange={onChangeHandler} />
      </div>
          
      <div className="flex items-center justify-between my-8">
              <div className="flex items-center">
               
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                <p className='text-yellow-50'>Forgot Password?</p>
                </label>
              </div>
              </div>
            
           

              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-black bg-white hover:bg-gray-200
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                onClick={handleClick({
                  vertical: 'top',
                  horizontal: 'right',
                })}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <Routes>

                {
                
                navigate("/session-timed-out")}
                </Routes> */}
                </span>
                Login
              </button>
            </div>
          </form>
          
          {error && <p>{error}</p>}

          <div className='container grid-cols-3 items-center justify-center text-center'>
<svg width="396" height="2" viewBox="0 0 396 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1L99 0.999991L148.5 0.999987L173.25 0.999985M396 0.999965L297 0.999974L247.5 0.999978L222.75 0.999981" stroke="#CCD2E3"/>
</svg>
<p className='mr-4'>or</p>

<img src={OrchidSignup}/ >
<img src={Institute}/ >
</div>
        </div>
    
    </div>
    </div>
  );
}
export default SignIn;
