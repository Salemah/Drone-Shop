import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import UseAuth from '../../../Hook/UseAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const OrderUpdateModal = ({ products, productopen, handleproductClose }) => {
  const { user } = UseAuth();
  const { name, price, img, description } = products;
  const initialInfo = { name: name, price: price, description: description }
  const [orderInfo, setOrderInfo] = React.useState("");

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...orderInfo };
    newData[field] = value;
    setOrderInfo(newData);
  };
  const handleBookingSubmit = e => {
      e.preventDefault();


  }

  return (


    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={productopen}
      onClose={handleproductClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={productopen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleBookingSubmit} >
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              defaultValue={name}
              size="small"
              name="name"
              variant="standard"
              onBlur={handleOnChange}
            />
            <TextField
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name="email"
              defaultValue={price}
              size="small"
              variant="standard"
              onBlur={handleOnChange}
            />
            <TextField
              required
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              name="phone"
              variant="standard"
              placeholder="Phone Number"
              size="small"
              onBlur={handleOnChange}
            />
            <TextField
              disabled
              sx={{ width: '90%', m: 1 }}
              id="outlined-size-small"
              variant="standard"
              defaultValue={price}
              size="small"
            />
            <Button type="submit" variant="contained">Order</Button>
          </form>
        </Box>
      </Fade>
    </Modal>

  );
};
export default OrderUpdateModal;