import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import MessageComponent from '../message-comp/message-comp';
import MUIModal from '../mui-modal/mui-modal';

const MUIDataTable = ({ data, headers, columns }) => {

    
  const [selected, setSelected] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
    
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  console.log('MUI table data: ', data);

  return (
    <>
      <div className='p-4 h-16'>
        {selectAllChecked && (
          <div className='flex justify-end p-4'>
            <Button variant="outlined" color="error" onClick={() => handleOpenModal(
                    <MessageComponent message="Are you sure you want to delete this expense?" />
                )}>
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
                  <IconButton 
                    onClick={() => handleOpenModal(
                      <MessageComponent message="Are you sure you want to delete this Expense?" />)} 
                    disabled={isItemSelected} aria-label="delete">
                    <DeleteIcon color='error' />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <MUIModal 
        isOpen= {isModalOpen}
        onClose= {handleCloseModal}
        title= "Delete Expense"
        content= {modalContent}
        showToast= {true}
        toastMsg= "Expense succesfully deleted"
        btnText='Yes'
        btnColor= 'error'
        btnVariant= 'contained'
        btnCommand= {handleDeleteSelected}
      />
    </>

    
  );
};

export default MUIDataTable;
