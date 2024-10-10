import { LOGO_URL } from "../utils/constants";
import { useState ,useContext } from "react";
import { Link } from "react-router-dom";
import OnlineStatus from "../utils/OnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {
    let [btnName, setbtnName] = useState(["Login"])
    const status = OnlineStatus() 

    const {LoggedinUser} = useContext(UserContext)

    // subscribing to the store using selector hook
    const cart = useSelector((store) => store.cart.items )


    return (
    <>
        <div className="flex justify-between bg-gray-200 shadow-lg m-2 rounded-lg  ">
            <div className="logo-container">
                <img className="w-28" src={LOGO_URL}></img>
            </div>        
            <div className="flex items-center" >
                {/* tailwind css */}
                <ul className="flex p-4 m-4 ali " >
                     <li >
                        <Link className="px-4" to="/grocery" >
                            Grocery
                        </Link>
                    </li>
                    <li >
                        
                        {/* checking the status of network  */}
                        <Link className="px-4"  to="/" >
                            Online Status { status ? "🟢" :"🔴" }
                        </Link>
                    </li>
                    <li >
                        <Link className="px-4" to="/" >
                            Home
                        </Link>
                    </li>
                    <li > 
                        <Link className="px-4" to="./about" >
                            About Us
                        </Link>
                    </li> 
                    <li >
                        <Link className="px-4" to="./contact" >
                            Contact us
                        </Link>
                    </li>
                    <li >
                        <Link className="px-4 font-bold text-md" to={"./cart"} >
                            Cart ({cart.length})
                        </Link>
                    </li>
                    <li className="px-4 font-bold ">{LoggedinUser}</li>
                    <button className="login" 
                    onClick={() => {
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login") 
                    }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Header;