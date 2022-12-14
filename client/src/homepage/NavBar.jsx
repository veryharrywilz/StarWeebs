import { NavLink } from "react-router-dom";

function NavBar({handleLogout, user}) {
    return (
      <div>
        <button>
        <NavLink
          to="/"


        //   activeStyle={{
        //     background: "orange",
        //   }}
        >
          Home
        </NavLink>
        </button>
        <button>
        <NavLink
          to="/login"


        //   activeStyle={{
        //     background: "orange",
        //   }}
        >
          Login 
        </NavLink>
        </button>
        <button>
        <NavLink
          to="/episodes"


        //   activeStyle={{
        //     background: "orange",
        //   }}
        >
          Episodes 
        </NavLink>
        </button>
        {
          user !== null ?
        <button>
        <NavLink
          to="/profile"


        //   activeStyle={{
        //     background: "orange",
        //   }}
        >
          Profile 
        </NavLink>
        </button>
        : null
}
        <button onClick={e => handleLogout()}>Logout</button>
       
      </div>
    );
  }

  export default NavBar;