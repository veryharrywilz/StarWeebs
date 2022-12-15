import React, { useEffect, useState } from "react"
import './App.css';
import HomePage from './homepage/HomePage';
import Login from './profile/Login';
import NavBar from './homepage/NavBar';
import ProfilePage from "./profile/ProfilePage";
import Episodes from "./homepage/Episodes";
import About from "./homepage/About";
import ContactUs from "./homepage/ContactUs";

import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [user, loginUser] = useState(null)


  useEffect(() => {
    fetch('/me')
      .then(r => {
          if (r.ok) {
            r.json().then(data => {
              console.log(data)
              loginUser(data)
            })
          }
        })
      
  }, [])

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE',

    })
    .then(resp => resp.json())
    .then(loginUser(null))
  }

  return (

    <div className="App">
      <NavBar handleLogout={handleLogout} user={user}/>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage user={user} loginUser={loginUser} />}></Route>
          <Route exact path="/login" element={<Login loginUser={loginUser} user={user} />}></Route>
          <Route exact path="/profile" element={<ProfilePage user={user}/>}></Route>
          <Route exact path="/episodes" element={<Episodes />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
