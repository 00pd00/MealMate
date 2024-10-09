import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useResMenu from '../utils/useResMenu';
import ResCategory from './ResCategory';
import { useState , useContext } from 'react';
import MenuContext from '../utils/MenuContext';

const Menu = () => {

  //state for controlled component to show the accordian 
  const [showIndex, setShowindex] = useState(0) 

  // for the dynamic routing for specific restaurant
  const {resID} = useParams()

  // using a custom hook for fetching the data
  const ResName = useResMenu(resID)

  const {date} = useContext(MenuContext)


     
    // getting the categories of the items and mapping acc to them                                                         to write any anything which is not valid in the js
    const categories = ResName?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )

  return (ResName === null) ? <Shimmer/> : (
    
    <>
      <h1 className='text-center font-bold my-10 text-2xl '  >{ResName.cards[2].card.card.info.name}</h1>
      <div className='text-center font-bold text-lg '>
       <h3>{ResName.cards[2].card.card.info.costForTwoMessage} - {ResName.cards[2].card.card.info.sla.deliveryTime} Minutes </h3>
      </div>
      
        <h2 className='font-bold text-2xl text-center py-5 '>Menu</h2>
        {/* categories accordian */}
        {categories.map((category , index) =>
        // controlled component
         <ResCategory key={index}
         data={category?.card?.card} 
         // controlling the data of the data of accordian
         showItems={index === showIndex ? true : false }  /> )}
        
          
    </>
  )
}

export default Menu