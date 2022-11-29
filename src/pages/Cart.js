import React from 'react'
import { Context } from '../Context'

import CartItem from '../components/CartItem'

function Cart() {
    const orderButtom = React.useRef()
    const { cartItems, removeFromCart } = React.useContext(Context)

    let totalCost = cartItems.length * 5.99
    totalCost = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    const cartElements = cartItems.map((item, index) => (
        <CartItem
            key={item.id}
            item={item} />
    ))

    function placeOrder() {
        orderButtom.current.innerText = "Ordering..."
        setTimeout(() => {
            removeFromCart("eraseCart")
        }, 3000)
    }

    return (
        <main className='cart'>
            <h1>Check out cart</h1>
            <div className='cart-container'>
                {cartElements}
            </div>
            <p>Total: {totalCost}</p>

            {
                cartItems.length > 0
                    ? <button
                        ref={orderButtom}
                        onClick={() => placeOrder()}>
                        Place Order
                    </button>
                    : "You have 0 item in your cart"
            }

        </main>
    )
}

export default Cart;
