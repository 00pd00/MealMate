import React from "react"

// class based component 
// react.component - class from the react package
class UserClass extends React.Component {

    // compulsory syntax to be used for props fetching 
    constructor(props) {
        super(props);
        // syntax for creating a state variable in class component
        this.state = {
            userInfo:{
                name:"pd",
                location:"wardha",
                avatar_url:"https"
            }
            
        }
        
    }

    async componentDidMount() {

        //will print the message for 1000 time
        //use this. to refer to specific setInterval
        // this.timer = setInterval(() => {
        //     console.log("setInterval")
        // }, 1000);

        const data = await fetch("https://api.github.com/users/00pd00")
        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo:json
        })
        }

        //this will unmount the fxn which is no longer needed after the component in unmounted
        componentWillUnmount() {
            clearInterval(this.timer)
        }

    render () { 
        // destructuring the props 
        const {location1} = this.props

        const { name , location , avatar_url} = this.state.userInfo
        // used to debug the page in browser
        // debugger;
        

        return (
        <div className='user-card' >
            {/* syntax for the props fetching in class based component */}
            <h2>{name}</h2>
            <h3>location: {location}</h3>
            <img src={avatar_url} alt="" />
            {/* syntax for the state fetching in class based component */}
           
        </div>

        )
    }
}

export default UserClass