import User from "./User"
import React from "react"
import UserClass from "./UserClass"
import UserContext from "../utils/userContext"

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    // used to make the api calls & called after rendering the component
    componentDidMount() {
        console.log("Parent component did mount")
    }

    //will be called when the state is changed
    componentDidUpdate() {
        console.log("component did updated")
    }

    // wiil be called when we unmount or leave the page
     componentWillUnmount() {
        // console.log("component will unmount")
     }

    render() {
        return (
            <div className="mx-4" >
                <h1>About Page</h1>
                <div>
                    using the context in the class based component
                    <UserContext.Consumer>
                        {({ LoggedinUser }) => <h1> User:  {LoggedinUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <h2>This is an about page</h2>
                <User name={"PD from fxn component"} />
                {/* <UserClass name={"PD from class component"} location={"Pune"} /> */}
            </div>
        )
    }


}


export default About