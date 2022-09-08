import React from 'react';
import FoodCard from '../FoodCard';


const data = [
    {
        name: "Hamburger",
        price: "200",
        image: "burger.jpeg"
    },
    {
        name: "Fries",
        price: "100",
        image: "fries.jpeg"
    },
    {
        name: "Coke",
        price: "50",
        image: "coke.jpeg"
    },
    {
        name: "Pepsi",
        price: "50",
        image: "pepsi.jpeg"
    }
]



const Menu = ({ onchange, basket }) => {
    const onQuantityChangeHandler = (item, type) => {
        onchange(item, type)

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px 30px' }}>{
            data.map(item => (
                <FoodCard item={item} onQuantityChange={onQuantityChangeHandler} />
            ))
        }
        </div>
    )
}

export default Menu