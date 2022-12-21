import { useState, useEffect } from "react"
import AvatarContainer from "./AvatarContainer"
import { useNavigate } from "react-router-dom"

function Login({ user, loginUser }) {

    const [userName, setUserName] = useState("")
    const [userEmail, setEmail] = useState("")
    const [userPassword, setPassword] = useState("")
    // const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [newsletterStatus, setNewsletterStatus] = useState(false)
    const [notificationStatus, setNotifications] = useState(false)
    const [userAvatar, setUserAvatar] = useState("")
    const [loginUserName, setLoginUserName] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [loginState, setLoginState] = useState(true)
    let history = useNavigate()





    const userObj = {
        username: userName,
        email: userEmail,
        password: userPassword,
        // password_confirmation: passwordConfirmation,
        isAdmin: false,
        hasVoted: false,
        avatar: userAvatar,
        newsletter: newsletterStatus,
        notifications: notificationStatus
    }



    function handleLogin(e) {
        e.preventDefault()
        fetch("/login", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                username: loginUserName,
                password: loginPassword
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                loginUser(data)
            })
        e.target.reset()
        history("/")
    }

    function handleCreateAccount(e) {
        e.preventDefault()
        loginUser(userObj)
        // console.log(userObj)
        fetch('/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                userObj
            )
        })
            .then(resp => resp.json())
            .then(data => {
                console.log("submitted")
            })

        history("/")
    }

    function handleNewsClick() {
        setNewsletterStatus(newsletterStatus => !newsletterStatus)
    }

    function handleNotificationClick() {
        setNotifications(notificationStatus => !notificationStatus)
    }

    return (
        <div> {loginState ?
            <form onSubmit={handleLogin}>
                <h1 className="pageHeader">Have an account? Login!</h1>
                <p>Username</p>
                <input type="text" name="loginUsername" onChange={e => setLoginUserName(e.target.value)}></input>
                <p>Password</p>
                <input type="text" name="loginPassword" onChange={e => setLoginPassword(e.target.value)}></input>
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
            : <>
                <br />
                <br />
                <button onClick={e => setLoginState(loginState => !loginState)}>Back to Login</button>
            </>
        }
            <br />
            <br />
            <br />
            

            {
                loginState ?
                    <>
                    <p>Need to create an account? Click here!</p>
                    <button onClick={e => setLoginState(loginState => !loginState)}>Create Account!</button></> :
                    <form onSubmit={handleCreateAccount}>
                        <h1 className="pageHeader">Create an Account!</h1>
                        <p>Username</p>
                        <input type="text" name="username" onChange={e => setUserName(e.target.value)} />
                        <p>Email address</p>
                        <input type="text" name="email" onChange={e => setEmail(e.target.value)} />
                        <p>Create a password</p>
                        <input type="text" name="password" onChange={e => setPassword(e.target.value)}></input>
                        {/* <p>Confirm your password</p>
                        <input type="text" name="passwordConfirmation" onChange={e => setPasswordConfirmation(e.target.value)}></input> */}
                        <p>Would you like to subscribe to our Newsletter?</p>
                        Yes<input type="checkbox" name="newsLetterYes" onClick={e => handleNewsClick()}></input>
                        <p>Would you like to be notified when new Star Weebs episodes go live?</p>
                        Yes<input type="checkbox" name="notificationYes" onClick={e => handleNotificationClick()}></input>
                        <AvatarContainer setUserAvatar={setUserAvatar}/>
                        <br />
                        <br />
                        <button>Create Account!</button>
                        
                    </form>
            }
        </div>
    )
}

export default Login;