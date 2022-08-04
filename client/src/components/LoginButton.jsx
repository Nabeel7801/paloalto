import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function LoginButton() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    const user = localStorage.getItem('user');
    if (!(typeof user == 'undefined' || user == null) && !isLoggedIn) {
        setIsLoggedIn(true);
    }

    const handleClick = () => {
        if (isLoggedIn) {
            localStorage.removeItem("user");
            setIsLoggedIn(false);
            history.push("/");

        }else {
            history.push("/login");
        }
    }

    return (
        <span className="loginBtn" onClick={handleClick}>
            {isLoggedIn ? "Log out" : "Log in"}
        </span>
    )
}

export default LoginButton