import * as React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import logo from '../media/BIOS_line_white.png';
import OrchidSignup from '../media/OrchidSignup.png';
import Institute from '../media/Institute.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function SelectType(props) {
  const [age, setAge] = React.useState('');
  const [label, setLabel] = React.useState('');
  const [inlabel, setInputLabel] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

const TheLabel = () => {
    setLabel(props);
}
const InTheLabel = () => {
    setInputLabel(props);
}

  return (
    <Box sx={{ minWidth: 120 }}>
      
    <FormControl size='small' className='bg-slate-700' fullWidth>
      <InputLabel id="demo-simple-select-label" className='sml'>{props.name}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label={props.name}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>
  );
}
export default SelectType;
