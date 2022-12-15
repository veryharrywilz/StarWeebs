import { NavLink } from "react-router-dom";

function HomePageNavBar() {
    return (
        <>
            <button className="homePageButton">
                <NavLink to="/episodes">
                    Episodes
                </NavLink>
            </button>
            <button className="homePageButton">
                <NavLink to="/about">
                    About
                </NavLink>
            </button>
            <button className="homePageButton">
                <NavLink to="/contactus">
                    Contact Us
                </NavLink>
            </button>
        </>
    )
}

export default HomePageNavBar;