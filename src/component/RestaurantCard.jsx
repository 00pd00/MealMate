import { CDN_URL } from "../utils/constants"


const RestaurantCard = (props) => {
    const {resData} = props
    
     // destructuring the props
    const {name,cloudinaryImageId,cuisines,avgRatingString,locality,costForTwo,id} = resData
    

    return (
        <div className="m-4 p-4 w-[250px] h-[500px] bg-gray-200 rounded-md hover:bg-gray-300 ">
            <img className="rounded-md" 
            src={CDN_URL+ cloudinaryImageId}></img>
            <h3 className="font-bold p-1 " >{name}</h3>
            <h3>{cuisines.join(" , ")}</h3>
            <h3>{avgRatingString} stars</h3>
            <h3>{locality}</h3>                        
            <h3>{costForTwo}</h3>                         
        </div> 
    )
}

//Higher order component
  
 export const Promoted = (RestaurantCard) => {
    // props from the component definition will come here
    return (props) => {
        return (
            <>
            <label className="absolute bg-black  text-white m-2 p-2 rounded-md "  >Highly rated</label>
            {/* passing all the props in the HOC */}
            <RestaurantCard {...props} />
            </>
            
        )
    }
}


export default RestaurantCard