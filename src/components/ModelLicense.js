import * as React from 'react';

import proimg from '../media/proimg.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormGroup, Checkbox, FormControlLabel } from '@mui/material';
const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      fontSize:12,
      margin: 0
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

function ModelLicense() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
 {/* 
                          
                                
                          
                                t */}
                              
  return (
    <div className='formPanel' style={{maxHeight: 100, overflow: 'auto'}}>
    <FormGroup InputProps={{
      classes: {
        input: styles.Checkbox,
      },
    }}
    className={styles.textField}>
      <FormControlLabel control={<Checkbox size='small' 
      InputProps={{
        classes: {
          input: styles.Checkbox,
        },
      }}
      className={styles.textField}
      />} label="Personal" />

      <FormControlLabel control={<Checkbox size='small'
      InputProps={{
        classes: {
          input: styles.Checkbox,
        },
      }}
      className={styles.Checkbox}
         />} label="Academic" />

      <FormControlLabel control={<Checkbox size='small' 
      InputProps={{
        classes: {
          input: styles.Checkbox,
        },
      }}
      className={styles.Checkbox}
      />} label="Commercial" />

<FormControlLabel control={<Checkbox size='small' 
      InputProps={{
        classes: {
          input: styles.Checkbox,
        },
      }}
      className={styles.Checkbox}
      />} label="Small Business" />

<FormControlLabel control={<Checkbox size='small' 
      InputProps={{
        classes: {
          input: styles.Checkbox,
        },
      }}
      className={styles.Checkbox}
      />} label="Non-Profit" />

    </FormGroup>
    </div>
        


     
);
}
export default ModelLicense;
