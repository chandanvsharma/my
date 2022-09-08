import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useBasket } from '../../context/BasketContext';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  increaseCartData,
  decreaseCartItem
} from '../../data/actions'

const FoodCard = ({ item, onQuantityChange }) => {
  // const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0);

  // const { updateBasket } = useBasket()
  const increaseButtonHandler = () => {
    if (quantity >= 1) {
      // dispatch(increaseCartData(item))
      onQuantityChange({ name: item.name, price: parseInt(item.price, 10) }, "addExisting")
    } else {
      // dispatch(addItemToCart(item))
      onQuantityChange({ name: item.name, price: parseInt(item.price, 10) }, "addnew")
    }
    setQuantity(quantity + 1)

  }
  const deceaseButtonHandler = () => {
    if (quantity === 1) {
      onQuantityChange({ name: item.name, price: parseInt(item.price, 10) }, "removeFromCart")
      // dispatch(removeItemFromCart(item))
    } else {
      onQuantityChange({ name: item.name, price: parseInt(item.price, 10) }, "removeQuantity")

      // dispatch(decreaseCartItem(item))
    }
    setQuantity(quantity - 1)
  }
  return (
    <Card sx={{ width: '30%', minHeight: '500px', margin: '0 0 25px 25px' }} >
      <CardMedia
        component="img"
        alt={item.name}
        height="240"
        image={require(`../../assets/${item.image}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {item.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Price {item.price}
        </Typography>
        {(quantity > 0) &&
          <Typography variant="h6" color="text.secondary">
            Total: {quantity}
          </Typography>
        }
        {(quantity > 0) &&
          <Typography variant="h6" color="text.secondary">
            Cost(INR) {item.price * quantity}
          </Typography>
        }
      </CardContent>
      <CardActions>
        <Button size="medium" variant="contained" onClick={increaseButtonHandler}>+</Button>
        <Button size="small" variant="contained" color="error" disabled={quantity > 0 ? false : true} onClick={deceaseButtonHandler} >-</Button>
      </CardActions>
    </Card>
  )
}

export default FoodCard