import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const MUIDataTable = ({ data, headers, columns }) => {

    
  const [selected, setSelected] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleSelectAllClick = (event) => {
    setSelectAllChecked(event.target.checked);
    if (event.target.checked) {
      const newSelected = data.map((row) => row.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
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
            <Button variant="outlined" color="error" onClick={handleDeleteSelected}>
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
            {headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
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
                role="checkbox"
                aria-checked={isItemSelected}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={isItemSelected} onChange={(event) => handleSelect(event, row.id)} />
                </TableCell>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>{row[column]}</TableCell>
                ))}
                <TableCell>
                  <IconButton onClick={handleDelete} disabled={isItemSelected} aria-label="delete">
                    <DeleteIcon color='error' />
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
