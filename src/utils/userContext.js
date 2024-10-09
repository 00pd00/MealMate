import { createContext } from "react";

// creating the context to be used in all the component as a global variable
const UserContext = createContext({
    LoggedinUser:"PD"
})

export default UserContext;