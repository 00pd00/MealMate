import React from 'react'
import { ITEM_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const ItemList = ({items}) => {

    // dispatch hook is needed to make changes in the store
    const dispatch = useDispatch()
    // using the dispatch in a function
    const handleAddItems = (item) => {
      // using the action from the reducer function
      // whatever is passed inside the additem is (action.payload)
      dispatch(addItem(item))
    }
    



  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className='p-2 m-2 border-gray-200 text-left flex justify-between'>
          <div className='w-9/12' >
            <div className='py-2' >
              <span>{item.card.info.name}</span>
              <span> - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100 }</span>
            </div>
            <p className='text-xs' > {item.card.info.description} </p>
          </div>
          <div className='w-2/12 p-4' >
            <div className='absolute' >
              <button className='p-2 bg-white shadow-lg  m-auto rounded-md' onClick={() => handleAddItems(item)} >Add+</button>
            </div>
            <img className='rounded-md' src={ITEM_URL + item.card.info.imageId} alt="" />
            
          </div>

        </div>
      ) )}
    </div>
  )
}

export default ItemList