import * as React from 'react';
import { useState } from 'react'
import upbtn from '../media/upload.svg';
// import IconButton from '@material-ui/core/IconButton';
import IconButton from '@mui/material/Icon';


function UploadBtn() {
  const [agreed, setAgreed] = useState(false)
    return (

<div style={{"background": "rgba(0,0,0,0"}}>

	<input
		type="file"
		accept="image/*"
		style={{ display: 'none' }}
		id="contained-button-file"
	/>
	
	<input accept="image/*" id="icon-button-file"
		type="file" style={{ display: 'none' }} />
	<label htmlFor="icon-button-file" style={{"background": "rgba(0,0,0,0"}}>
		<IconButton color='none' aria-label="Upload File"
		component="span" style={{"background": "rgba(0,0,0,0"}}>
		{/* <PhotoCamera /> */}
    <img src={upbtn} />
		</IconButton>
	</label>


  </div>
  )
}

export default UploadBtn;