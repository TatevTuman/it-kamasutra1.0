import {NavLink} from "react-router-dom";
import React from "react";


const Companion = (props) => {

    let companionJSX = props.state.map((companion) =>
        <div key={companion.id}>
            <NavLink to={"/dialog/" + companion.id}>{companion.name}</NavLink>
        </div>
    )

    return (
        <div>
            {companionJSX}
        </div>
    )
}

export default Companion;