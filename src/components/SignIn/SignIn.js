import React from "react";
import './SignIn.css';
import Button from '../button/Button';
import Logo from '../Logo/Logo';
import captchaImage from '../../assets/images/captchaImage.png';

const SignIn = () => {
    return (
        <div className="signin-container">
            <form>
                <Logo/>
                <input type="email" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <div className="captcha">
                    <span>2</span> + <span>3</span>
                    <input type="text" name="number" />
                    <img src={captchaImage} />
                </div>
                <Button btnStyle='log-btn-style'>ورود</Button>
            </form>
        </div>
    )
}

export default SignIn;