import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { addExpense } from '../../../dbOperations/expensesOps';

const categories = [
  'Food',
  'Transportation',
  'Shopping',
  'Utilities',
  'Entertainment',
  'Others',
];

const AddExpenseForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let description = formData.description;
    let amount = formData.amount;
    let category = formData.category;
    //console.log(description, amount, category);
    if(description && amount && category){
      addExpense(description, amount, category);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
      <label htmlFor="description">Description</label>
      <TextField
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        margin="normal"
        required
      />
      <label htmlFor="amount">Amount</label>
      <TextField
        id="amount"
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        margin="normal"
        required
      />
      <label htmlFor="category">Category</label>
      <TextField
        id="category"
        select
        name="category"
        value={formData.category}
        onChange={handleChange}
        margin="normal"
        required
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" className='modal-button-click' style={{ display: 'none' }}>
        Submit
      </Button>
    </form>
  );
};

export default AddExpenseForm;
