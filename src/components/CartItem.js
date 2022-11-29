import React from 'react'
import { Context } from '../Context'
import PropTypes from 'prop-types'

function CartItem({ item }) {
    const { removeFromCart } = React.useContext(Context)
    const [isHoverd, setIsHoverd] = React.useState(false)
    // const [isHoverd, ref] = useHover()

    const deleteIconClass = isHoverd ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className='cart-item' >
            <img src={item.url} />
            <i
                className={deleteIconClass + ' delete-Icon'}
                onClick={() => removeFromCart(item.id)}
                onMouseLeave={() => setIsHoverd(false)}
                onMouseEnter={() => setIsHoverd(true)} />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem;
