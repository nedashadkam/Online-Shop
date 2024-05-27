import React from "react";

const SignIn = () => {
    return (
        <div className="signin-container">
            <input type="email" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
        </div>
    )
}

export default SignIn;