import * as React from 'react';

import logo from '../media/BIOS_line_white.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';
import { NavLink } from "react-router-dom";
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import LinkedIn from '@mui/icons-material/LinkedIn';


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Footer() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
  
    <div className="container-fluid m-auto bg-blue-950 p-2 mt-8">
        <div className="grid grid-flow-col justify-around my-12">

            <div className='basis-1/3 justify-center items-center'>
                <img src={logo} className='w-28' />
                <div className='grid grid-flow-col mt-5'>
                    <div className='basis-1/3 justify-center items-center'>
                            <LinkedIn />
                        </div>
                    <div className='basis-1/3 justify-center items-center'>
                            <Twitter />
                        </div>
                    <div className='basis-1/3 justify-center items-center'>
                            <Facebook />
                    </div>
                </div>
            </div>
            <div className='basis-1/3'>
                </div>
            <div className='basis-1/3 text-left'>
                <h3>Contacts</h3>
                <ul>
                    <li>Partnerships</li>
                    <li>Media</li>
                    <li>Inquiries</li>
                </ul>
            </div>  
            <div className='basis-1/3 text-left'>
                <h3>Address</h3>
                <ul>
                    <li>Biological Information</li>
                    <li>OS Inc.</li>
                    <li>Palm Harbor</li>
                    <li>USA</li>
                </ul>
            </div>
         </div>
        <div className="grid grid-flow-col text-left justify-around my-2">
            <div className='grid grid-flow-col grid-cols-1 text-left justify-around'>
                <p className='sml text-left'>© 2021 Biological Information OS Inc. All Rights Reserved</p>
            </div>
            <div className='grid grid-flow-col grid-cols-3 text-right justify-around'>
                
                <p className='sml text-right'>Terms and Conditions</p>
                <p className='sml text-right'>Privacy Statement</p>
                <p className='sml text-right'>Contact us at inquiry</p>
            </div>
        </div>

    </div>
  );
}
export default Footer;
