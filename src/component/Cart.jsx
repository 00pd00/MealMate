import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {

    const cart = useSelector((store) => store.cart.items)
    console.log(cart)

    // dispatch hook for mutating state
    const dispatch = useDispatch()
    const HandleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='text-center m-5 ' >
        <h1 className='text-lg font-bold'>Cart</h1>
        <div className='w-6/12 m-auto border border-white' >
            <button className='bg-black text-white m-3 p-3 rounded-lg ' onClick={() => HandleClearCart()} >Clear Cart</button>
            {cart.length == 0 && <h1>No Items In the Cart</h1>  }
           <ItemList items={cart} />
        </div> 
    </div>
  )
}

export default Cart