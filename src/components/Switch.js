import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




function Switcher() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    return (
      <FormControl component="fieldset">
      
      <FormGroup aria-label="position" row>

        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="Visible to public"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>


    );
}
export default Switcher;
