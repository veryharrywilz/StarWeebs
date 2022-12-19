import { NavLink } from "react-router-dom";

function NavBar({ handleLogout, user }) {
  return (
    <div>
      <button>
        <NavLink to="/">Home</NavLink>
      </button>

      
      {
        user === null ?

          <button>
            <NavLink to="/login">Login</NavLink>
          </button>

          : null
      }


      {
        user !== null ?
          <button>
            <NavLink to="/profile">Profile</NavLink>
          </button>
          : null
      }
      {user !== null ?
        <button onClick={e => handleLogout()}>Logout</button>
        : null
      }
    </div >
  );
}

export default NavBar;