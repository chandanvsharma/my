import React from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useNavigate } from 'react-router-dom'


const DialogBox = (props) => {
    const { basket, open, onClose, onQuantityChange } = props;
    const navigate = useNavigate()
    const handleClose = () => {
        onClose();
    };
    const increaseButtonHandler = (item) => {
        console.log(item);
        if (item.quantity >= 1) {
            // dispatch(increaseCartData(item))
            onQuantityChange({ name: item.name, price: item.price }, "addExisting")
        } else {
            // dispatch(addItemToCart(item))
            onQuantityChange({ name: item.name, price: item.price }, "addnew")
        }
        console.log(item.price);
    }
    const deceaseButtonHandler = (item) => {
        if (item.quantity === 1) {
            onQuantityChange({ name: item.name, price: item.price }, "removeFromCart")
            // dispatch(removeItemFromCart(item))
        } else {
            onQuantityChange({ name: item.name, price: item.price }, "removeQuantity")

            // dispatch(decreaseCartItem(item))
        }

    }

    const handleCheckOut = () => {
        onQuantityChange({ name: "", price: 0 }, "clearBasket")
        navigate('/checkout')
        onClose()

    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true}>
            <DialogTitle>Order Summary</DialogTitle>
            <DialogContent>
                <>
                    {
                        basket.cartItems.map((basketItem) => (
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>{basketItem.name}</span>
                                <span>{basketItem.quantity}</span>
                                <span>
                                    <Button size="medium" variant="contained" onClick={() => increaseButtonHandler(basketItem)}>+</Button>
                                    <Button size="small" variant="contained" color="error" disabled={basketItem.quantity > 0 ? false : true} onClick={() => deceaseButtonHandler(basketItem)} >-</Button>
                                </span>
                            </div>
                        ))
                    }
                </>
                <h5>Total : {basket.totalPrice}</h5>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleCheckOut}>Save and CheckOut</Button>
                <Button onClick={handleClose} autoFocus>
                    cancel
                </Button>
            </DialogActions>

        </Dialog>
    )
}

export default DialogBox