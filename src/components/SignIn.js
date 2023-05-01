import * as React from 'react';

import logo from '../media/BIOS_line_white.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function SignIn() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <div>
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-900 rounded-md p-3">
          
          <div>
            <h2>SignIn</h2>

          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            
            <div>
          
            <div>
      <TextField id="ema" variant="outlined" label="Your email" className='w-full' />
      </div>
            <div>
      <TextField id="password" variant="outlined" label="Password" className='w-full' />
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
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  
                </span>
                Login
              </button>
            </div>
          </form>
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
