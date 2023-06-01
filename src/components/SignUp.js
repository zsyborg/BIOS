import * as React from 'react';

import logo from '../media/BIOS_line_white.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const axios = require('axios');
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
export interface State extends SnackbarOrigin {
  open: boolean;
}


function Signup() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);



  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
  
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };
  

  const signUp = (event, name, email, password, repassword, newState: SnackbarOrigin) => {
    let data = JSON.stringify({
      "first_name": name,
      "last_name": name,
      "company": "",
      "position": "",
      "email": email,
      "password": password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://development.biosapplication.com/api/v1/auth/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  }


  return (
    <div>
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-500 rounded-md p-3">
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="BIOS Logo"
            />
          <div>
            <h3>Sign Up</h3>
      <p>Fill in the info to create an account</p>
  
      {/* <Button variant="contained">Hello World</Button> */}

          </div>
          <form onSubmit={(event) => { signUp(event, email, password)}} className="mt-8 space-y-6" action="#" method="POST">
            <div>
            <div>
      <TextField id="email" name="email" className='white w-full' id="email" variant="outlined" label="Enter your email" />
      </div>
            <div>
      <TextField id="name" name="name" variant="outlined" className='white w-full' label="Enter your name" />
      </div>
            <div>
      <TextField id="username" name="username" variant="outlined" className='white w-full' label="Enter username" />
      </div>
            <div>
      <TextField id="password" name='password' variant="outlined" className='white w-full' label="Enter password" />
      </div>
            <div>
      <TextField id="repassword" name='repassword' variant="outlined" className='white w-full' label="Repeat password" />
      </div>
      <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded w-full"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                <p className='text-yellow-50'>I agree to the terms & conditions of BIOS Inc.</p>
                </label>
              </div>
              </div>
            
           

              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                </span>
                Sign Up
              </button>
            </div>
          </form>
<div className='container mx-auto grid-cols-3 items-center'>
<svg width="396" height="2" viewBox="0 0 396 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1L99 0.999991L148.5 0.999987L173.25 0.999985M396 0.999965L297 0.999974L247.5 0.999978L222.75 0.999981" stroke="#CCD2E3"/>
</svg>
<p>or</p>

<img src={OrchidSignup}/ >
<img src={Institute}/ >
</div>

        </div>
    
    </div>
    </div>
  );
}
export default Signup;
