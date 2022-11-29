import React, { useEffect } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, SetAllPhotos] = React.useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])

    let StorageCartItems = JSON.parse(localStorage.getItem('StorageCartItems')) || [];
    const [cartItems, setCartItems] = React.useState(StorageCartItems)
    localStorage.setItem("StorageCartItems", JSON.stringify(cartItems));

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => SetAllPhotos(data))
    }, [])

    // const breakingbadAPI = "https://www.breakingbadapi.com/api/"
    // useEffect(() => {
    //     fetch(breakingbadAPI)
    //         .then(resp => resp.json())
    //         .then(data => SetAllPhotos(data))
    // }, [])


    //toggle image favorite 
    function toggleFavorite(id) {
        const newArray = []
        for (let i = 0; i < allPhotos.length; i++) {
            const curr = allPhotos[i]
            if (curr.id === id) {
                newArray.push({
                    ...curr,
                    isFavorite: !curr.isFavorite
                })
            } else {
                newArray.push(curr)
            }
        }
        SetAllPhotos(newArray)
    }

    //add new item to user CART
    function addToCart(newItem) {
        StorageCartItems.push(newItem)
        setCartItems(prevCartItems => [...prevCartItems, newItem])
    }

    //remove item from user CART
    function removeFromCart(id) {
        const updatedArr = []
        for (let i = 0; i < cartItems.length; i++) {
            const curr = cartItems[i]
            if (curr.id == id || id === "eraseCart") continue
            else updatedArr.push(curr)
        }
        setCartItems(updatedArr)
    }

    return (
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            cartItems,
            addToCart,
            removeFromCart
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }