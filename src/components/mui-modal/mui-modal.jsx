import * as React from 'react';
//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
///import Modal from '@mui/material/Modal';
import { Modal, Backdrop, Fade, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material';

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

export default function MUIModal({ isOpen, onClose, title, buttonTextPrime, content, buttonLogic }) {

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
              <Button onClick={buttonLogic} variant="contained" color="primary">{buttonTextPrime}</Button>
            </CardActions>
          </Card>
      </Modal>
    </>
  );
}
