import React from 'react'
import './Cart.sass'
import logo from '../../img/blue_logo.png'
import ItemOnCart from '../../Components/ItemOnCart/ItemOnCart'
const Cart = () => {
    return (
        <div className='Cart container'>
            <div className='header'>
                <img src={logo} alt="" className="logo"/>
                <h1>Your Shopping Cart</h1>
                <div className="items-container">
                    <ItemOnCart/>
                </div>
            </div>
        </div>
    )
}

export default Cart
