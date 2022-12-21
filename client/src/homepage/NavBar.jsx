import { NavLink } from "react-router-dom";
import logoutIcon from "../images/LogoutIcon.png"
import profileIcon from "../images/ProfileIcon.png"
import homeIcon from "../images/HomeIcon.png"
import loginIcon from "../images/LoginIcon.png"

function NavBar({ handleLogout, user }) {



  return (
    <div className="navBar">
      
        <NavLink to="/">
          <img src={homeIcon}/>
        </NavLink>
      

      
      {
        user === null ?

          
            <NavLink to="/login">
              <img src={loginIcon}/>
            </NavLink>
          

          : null
      }


      {
        user !== null ?
          <NavLink to="/profile"> <img src={profileIcon}/></NavLink>
          : null
      }
      {user !== null ?
        <img src={logoutIcon} onClick={e => handleLogout()} />
        : null
      }
    </div >
  );
}

export default NavBar;