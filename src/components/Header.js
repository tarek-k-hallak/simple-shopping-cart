import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Header() {
    const { cartItems } = React.useContext(Context)

    function cartIcon() {
        if (cartItems.length) {
            return (
                <i className='ri-shopping-cart-fill ri-fw ri-2x'></i>
            )
        }
        return (
            <i className='ri-shopping-cart-line ri-fw ri-2x'></i>
        )
    }

    return (
        <header>
            <Link to={"/"}>
                <h2>Logo here</h2>
            </Link>
            <Link to={"/cart"}>
                {cartIcon()}
            </Link>
        </header>
    );
}

export default Header;
