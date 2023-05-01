import * as React from 'react';

import proimg from '../media/proimg.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProductCard() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
  <div>
    <div class="container">
        <div class="grid basis-4/12">

            <img src={proimg} />
            <h2 className='text-left'>Pigeon</h2>
            <p className='text-sm'>0</p>        
            <p className='rounded text-xs'>0</p>
            <h2 className='text-left'>creator_name</h2>
            <p className='text-sm'>$200</p>  
            
                
    </div>
    </div>
</div>
        


     
);
}
export default ProductCard;
