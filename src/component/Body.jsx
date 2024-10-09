import RestaurantCard, { Promoted }  from "./RestaurantCard";
import { useEffect, useState , useContext } from "react";
import Shimmer from "./Shimmer";
import { CARD_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const Body = () => {
    // state variable with no default value
    //default state variable for the original values
    const [filtered, setFiltered] = useState([])
    // dummy state for the operated values , to show on the front
    const [search, setSearch] = useState([])
    const [searchText, setSearchText] = useState('')    
    // Higher order component
    const FilteredPromoted = Promoted(RestaurantCard);

    //whenever the state variable updates , react runs a reconcillitation cycle and re-renders the component

    //loads after rendering the page
    //calling the api fxn here to get data after loading the page
    useEffect(()=>{
        fetchdata()
    },[]) 

    // fxn for fetching the data and calling it in the useffect
    const fetchdata = async () => {
        const data = await fetch(CARD_URL)
        const json = await data.json()  
        const resName = (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants).map((item) => item.info)
        const imgData = (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants).map((item) => item.info.cloudinaryImageId)
        
        //udpatingg both the variable
        setFiltered(resName)
        setSearch(resName)
    }

    // fxn to change state of app.js and context from usercontext
    const {setUSerInfo ,LoggedinUser } = useContext(UserContext)

   

    //shimmer ui for pre-loader  
    // returning the front-end
    return filtered.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex ">
                <div className=" search m-4 p-4 " >
                    <input type="text" className="border border-solid border-black"
                     onChange={(e)=> {
                        setSearchText(e.target.value)
                    }} value={searchText} name="" id="" />
                     <button className="px-4 bg-gray-200 m-4 rounded-md  " 
                        onClick={() => {
                            //searching from the main list , but showing the list from the updated list
                            const filterRest = filtered.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()))
                            setSearch(filterRest)                            
                        }}
                     >Search</button>
                     
                    <button className="px-4 py-2 bg-gray-200 rounded-md "
                 onClick={() => {
                    let filterlist = filtered.filter(
                        (res) => res.avgRating > 4.2
                    );
                    setSearch(filterlist)
                 }  }
                 >Top Rated Restaurants</button>
                 <button className=" ml-2 px-4 py-2 bg-gray-200 rounded-md " 
                 onClick={() => {
                    let filterlist = filtered.filter(
                        (res) => res.avgRating < 4.2
                    );
                    console.log(filterlist)
                    setSearch(filterlist)
                 }  }
                 >Low Rated Restaurants</button>

                 
                
                 
            </div>
            <div className="search m-4 p-4 flex items-center">
                    <label>Username: </label>
                    {/* settting the username of the user */}
                    <input type="text" value={LoggedinUser} onChange={(e) => {
                        // fxn to change the value from root directory as prop
                        setUSerInfo(e.target.value)
                    } } className="border border-black p-2" />
                 </div>
                </div>
            <div className="flex flex-wrap "> 
                {
                    //showing from the dummy state , search state
                    search.map((restaurant) => (
                        // key should always be on the parent component
                        //routing to the menu using resID
                        <Link className="link-style" to={"/menu/" + restaurant.id } key={restaurant.id}>                          
                      
                        {restaurant.avgRating > 4.4  ? (
                            <FilteredPromoted resData={restaurant} />
                         ) :
                         (
                             <RestaurantCard resData={restaurant}/>
                         )
                    }
                      </Link>
                      
                    )
                        

                    ) 
                    
                }                               
              
            </div>
        </div>
    )
}

export default Body;