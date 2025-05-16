import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [cart, setCart] = useState([{ id: 1, name: 'laptop', price: 50000 }, { id: 2, name: 'phone', price: 10000 }, { id: 3, name: 'iphone', price: 45000 }]);

    const [discount, setDiscount] = useState(0);

    

    const totalPrice = useMemo(()=>{
        console.log('calculating total price');
        return cart.reduce((total, item) => {
         total + item.price;
    }, 0)
    },[cart]);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.map((item) => <p key={item.id}>{item.name} : {item.price}</p>)}

            <h1>Total Price : {totalPrice}</h1>
            <button onClick={()=> {
                console.log('dicount button clicked');
                 setDiscount(discount+10)}}>Increase Discount</button>

        </div>
    )
}

export default UseMemo
