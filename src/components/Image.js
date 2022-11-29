import React from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'

function Image({ img, className }) {
    const { toggleFavorite, cartItems, addToCart, removeFromCart } = React.useContext(Context)
    const [isHovered, setIsHovered] = React.useState(false)

    function heartIcon() {
        if (img.isFavorite) {
            return (
                <i
                    onClick={() => toggleFavorite(img.id)}
                    className={'ri-heart-fill favorite-icon'}>
                </i>
            )

        } else if (isHovered) {
            return (
                <i onClick={() => toggleFavorite(img.id)}
                    className={'ri-heart-line favorite-icon'}>
                </i>
            )
        }
    }

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === img.id)

        if (isInCart) {
            return (
                <i
                    className='ri-shopping-cart-fill cart-icon'
                    onClick={() => removeFromCart(img.id)}>
                </i >
            )
        } else if (isHovered) {
            return (
                <i
                    className='ri-add-circle-line cart-icon'
                    onClick={() => addToCart(img)}>
                </i >
            )
        }
    }

    return (
        <div
            className={className + " image-container"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {heartIcon()}
            {cartIcon()}
            <img src={img.url} className="image-grid" alt={className} />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image