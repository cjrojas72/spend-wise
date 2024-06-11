import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const DynamicFormMui = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
      <Grid container spacing={2}>
        {fields.map(field => (
          <Grid item xs={12} key={field.name}>
            <Typography variant="subtitle1" gutterBottom>
              {field.label}
            </Typography>
            <TextField
              fullWidth
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              variant="outlined"
            />
          </Grid>
        ))}
        {/* <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid> */}
      </Grid>
    </form>
  );
};

export default DynamicFormMui;
