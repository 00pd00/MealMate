import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

// Custom hook
// resID is coming from the menu.jsx
 const useResMenu =  (resID) => {

    // takes the if of the res and give the menu using resID
    const [resName, setResinfo] = useState(null)

    
    useEffect(() => {
        fetchdata();
    },[] )

    const fetchdata = async() => {
        const data = await fetch(MENU_URL + resID)
        const json = await data.json()
        setResinfo(json.data)

    }


    return resName;
}

export default useResMenu;