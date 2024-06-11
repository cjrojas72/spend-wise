import * as React from 'react';
//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
///import Modal from '@mui/material/Modal';
import { Modal, Backdrop, Fade, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function MUIModal({ isOpen, onClose, title, content, buttonText, showToast, toastMsg}) {

  const notify = () => toast(toastMsg);

  const handleClick = () => {
    //console.log("click");
    const nearestButton = document.querySelector('.modal-button-click');
    if (nearestButton) {
      nearestButton.click();
      onClose();

      if(showToast){
        notify();
      }
      
    }
    else{
      console.log("Run a diff command");
    }
  };


  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby={title}
        aria-describedby="modal-modal-description"
      >
          <Card sx={style}>
            <CardHeader title={title} />
            <CardContent>
              {content}
            </CardContent>
            <CardActions className='justify-end'>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={handleClick} variant="contained" color="primary">{buttonText}</Button>
            </CardActions>
          </Card>
      </Modal>
      <ToastContainer />
    </>
  );
}
