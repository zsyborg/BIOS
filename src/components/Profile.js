import * as React from 'react';

import logo from '../media/BIOS_line_white.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    fontSize:12,
    margin: 8,
    height:12
  },
  Checkbox: {
    fontSize:12,
    margin:0,
    padding:0
  },
  //style for font size
  resize:{
    fontSize:12,
    height: 14
  },
}



function Profile() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <div>
       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-900 rounded-md p-3">
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="BIOS Logo"
            />
          <div>
            <h2>Profile Information</h2>
      <p>Build your profile</p>
  
      {/* <Button variant="contained">Hello World</Button> */}

          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div>
            <div>
            <TextField className='mb-5 w-full'
                id="pfp"
                label="Multiline Placeholder"
                placeholder="Input your Bio"
                className='w-full'
                multiline
                rows={3}
                />
      </div>
            <div>
      <TextField className='mb-5 w-full my-3' id="orcid" variant="outlined" label="Your OrcID"  />
      </div>
            <div>
      <TextField className='mb-5 w-full' id="personal-site" variant="outlined" label="Personal Site"  />
      </div>
            <div>
      <TextField className='mb-5 w-full' id="email-univ" variant="outlined" label="University Email"  />
      </div>
            <div>
      <TextField className='mb-5 w-full' id="fieldsofstudy" variant="outlined" label="Input Field of Study(s) (must have LinkedIn, University email, or DOI to a publication where you are a contributor.)*"  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="doi" variant="outlined" label="DOI "  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="profession" variant="outlined" label="Profession"  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="linkedin" variant="outlined" label="LinkedIn URL"  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="twitter" variant="outlined" label="Twitter URL"  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="mastodon" variant="outlined" label="Mastodon URL"  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="github" variant="outlined" label="Github URL"  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="gitlab" variant="outlined" label="Gitlab URL"  />
      </div>
        <div>
        <TextField className='mb-5 w-full' id="instagram" variant="outlined" label="Enter instagram handle"  />
      </div>
      <div className="flex items-center justify-between">
              <div className="flex items-center justify-between my-4">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded w-full"
                />
                <label htmlFor="remember-me" className="block text-sm text-gray-900">
                <p className='text-yellow-50'>I would like to sign up to sell on the BIOS Platform</p>
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
                Continue To Profile
              </button>
            </div>
          </form>

        </div>
    
    </div>
    </div>
  );
}
export default Profile;
