import { NavLink } from "react-router-dom";

function HomePageNavBar() {
    return (
        <>
        <br/>
        <br/>
            
                <NavLink to="/episodes">
                <button className="homePageButton">Episodes </button>
                </NavLink>
           
            
                <NavLink to="/about">
                <button className="homePageButton">About</button>
                </NavLink>
            
            
                <NavLink to="/contactus">
                    <button className="homePageButton">
                    Contact Us
                    </button>
                </NavLink>
            
            
                <NavLink to="/news">
                <button className="homePageButton">News </button>
                    </NavLink>

          
        </>
    )
}

export default HomePageNavBar;