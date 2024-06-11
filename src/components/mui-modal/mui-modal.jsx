import * as React from 'react';
//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
///import Modal from '@mui/material/Modal';
import { Modal, Backdrop, Fade, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import { toast } from 'react-toastify';

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

export default function MUIModal({ isOpen, onClose, title, content, showToast, toastMsg, btnText, btnVariant, btnColor, btnCommand }) {



  const handleClick = () => {
    //console.log("click");
    let buttonCommand = btnCommand;

    buttonCommand();

    if(showToast){
      toast(toastMsg);
    }

    onClose();

   

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
              <Button onClick={handleClick} variant={btnVariant} color={btnColor}>{btnText}</Button>
            </CardActions>
          </Card>
      </Modal>
    </>
  );
}
