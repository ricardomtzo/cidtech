import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function RadioInput() {
  return (
    <FormControl margin='normal'>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Resposta A" />
        <FormControlLabel value="male" control={<Radio />} label="Resposta B" />
      </RadioGroup>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Resposta C" />
        <FormControlLabel value="male" control={<Radio />} label="Resposta D" />
      </RadioGroup>
    </FormControl>
  );
}