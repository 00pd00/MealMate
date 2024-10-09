import React, { useState } from 'react'
import ItemList from './ItemList'

const ResCategory = ({data}) => {

  const [showItems , setShowItems] = useState()

  const handleclick = () => {
    setShowItems(!showItems)
  }
 
  return (
    <div className='text-center' >
      <div className='text-center font-medium w-8/12  mx-auto my-6  bg-gray-100 shadow-lg p-4  rounded-lg' >
        <div className='flex justify-between cursor-pointer ' onClick={handleclick} >
        <span className='font-bold text-lg' >{data.title} ({data.itemCards.length}) </span>
        <span>⬇</span>
        </div>
         {/* Accordian body */}
         {/* if the showItems is true then only show the content */}
        { showItems && <ItemList items={data.itemCards} />}
      </div>
     
      
    </div>

  )
}

export default ResCategory