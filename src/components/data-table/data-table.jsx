import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const MUIDataTable = ({ data }) => {
  const [selected, setSelected] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);


  const handleSelectAllClick = (event) => {
    setSelectAllChecked(event.target.checked);
    if (event.target.checked) {
      const newSelected = data.map((row) => row.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const handleDelete = () => {
    // Implement delete functionality for selected items here
    console.log('Delete selected items:', selected);
    setSelected([]);
  };

  const handleDeleteSelected = () => {
    // Implement delete functionality for selected items here
    console.log('Delete selected items:', selected);
    setSelected([]);
    setSelectAllChecked(false);
  };

  return (
    <>
    <div className='p-4 h-16'>
        {selectAllChecked && (
            <div className='flex justify-end p-4'>
                <Button variant="contained" onClick={handleDeleteSelected}>
                    Delete All
                </Button>
        </div>
        
    )}
    </div>
    
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={selected.length > 0 && selected.length < data.length}
              checked={selected.length === data.length}
              onChange={handleSelectAllClick}
            />
          </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => {
          const isItemSelected = isSelected(row.id);
          return (
            <TableRow
              key={index}
              hover
             // onClick={(event) => handleSelect(event, row.id)}
              role="checkbox"
              aria-checked={isItemSelected}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox checked={isItemSelected} onChange={(event) => handleSelect(event, row.id)}/>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                <IconButton onClick={handleDelete} disabled={isItemSelected} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    
    </>
  );
};

export default MUIDataTable;
