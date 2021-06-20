import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (<div>

        <div><NavLink to="/profile">Profile</NavLink></div>
        <div><NavLink to="/dialogs">Message</NavLink></div>
        <div><NavLink to="/music">Music</NavLink></div>
        <div><NavLink to="/news">News</NavLink></div>


    </div>)
}

export default NavBar;


