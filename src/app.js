import React, { lazy, Suspense, useContext, useEffect , useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import Menu from "./component/Menu";
import { Provider } from "react-redux";
import UserContext from "./utils/userContext";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";

const Applayout = () => {

    const [userInfo, setUSerInfo] = useState();

    // authentication
        useEffect(() => {
            //Make an api call to fetch the username and password
            const data = {
                Username:"PD",
                Password:"1234"
            }
            // updating the user context from the root file
            setUSerInfo(data.Username)
        },[] )

    return (

        // containing app in redux container and specifying the store
        <Provider store={appStore} >

            {/* sending the updated context to all the components */}
                    {/* values changes the usercontext */}
                    <UserContext.Provider value={{LoggedinUser:userInfo ,setUSerInfo }} >
                        <div className="app">
                        {/* whichever component is placed inside provider block will be using the updated context */}
                            {/* <UserContext.Provider value={{LoggedinUser:"PD"}} > */}
                                <Header/>
                            {/* </UserContext.Provider> */}
                        
                        {/* outlet for the children component */}
                        <Outlet/>
                    </div> 
                    </UserContext.Provider>

        </Provider>
       
        
    )
}

// use lazy keyword for lazy loading  
// it takes the callback fxn import and the path for import
const Grocery = lazy(() => import("./component/Grocery") )
const About = lazy(() => import("./component/About") )

// creating a router for routing between pages 
const appRouter = createBrowserRouter ([
    {
        path:"/",
        element:<Applayout/>,
        //to handle the error when there is no page specified for the input
        errorElement:<Error/>,
        // children component will take the replace in main component as an outlet
        children: [
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>Loading</h1>} ><About/></Suspense>
            },
            {
                path:'/grocery',
                // adding suspense so that it will wait for the component to import
                // fallback is same as placeholder for suspense
                element:<Suspense fallback={<h1>Loading</h1>} ><Grocery/></Suspense>
            },
            {
                path:'/cart',
                // adding suspense so that it will wait for the component to import
                // fallback is same as placeholder for suspense
                element:<Suspense fallback={<h1>Loading</h1>} ><Cart/></Suspense>
            },
            {
                path:'/contact',
                element:<ContactUs/> 
            }
            ,
            // dynamic router 
            {
                path:'/Menu/:resID',
                element:<Menu/>
            }
    ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))

// providing the router for the component
root.render(<RouterProvider router={appRouter}/>)