import React, { useEffect, useState } from "react";
import './SignIn.css';
import Button from '../button/Button';
import Logo from '../Logo/Logo';
import captchaImage from '../../assets/images/captchaImage.png';

const SignIn = () => {
    const [randomNumber1, setRandomNumber1] = useState(0);
    const [randomNumber2, setRandomNumber2] = useState(0);
    const [sumHolder, setSumHolder] = useState(0);
    const [captchaValue, setCaptchaValue] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        generateCaptcha();
    }, [])

    const generateCaptcha = () => {
        let number1 = Math.floor(Math.random() * 10) + 1;
        let number2 = Math.floor(Math.random() * 10) + 1;
        setRandomNumber1(number1);
        setRandomNumber2(number2);
        let sum = number1 + number2;
        setSumHolder(sum)
    }
    const captchaHandler = (event) => {
        setCaptchaValue(Number(event.target.value))
    }
    const validate = () => {
        if(userName === '') {
            setErrorMessage('نام کاربری خالی است')
            return false
        }else if(!userName.includes('.')) {
            setErrorMessage('نام کاربری معتبر نیست');
            return false
        }else if(!userName.includes('@')) {
            setErrorMessage('نام کاربری معتبر نیست');
            return false
        }else if(password === '') {
            setErrorMessage('رمز خالی است')
            return false
        }else if(password.length < 5) {
            setErrorMessage('رمز حداقل باید 5 رقم باشد')
            return false
        }
        setErrorMessage('');
        return true;
    }
    const logInHandler = () => {
        if (sumHolder === captchaValue) {
            setErrorMessage('');
            const validateResult = validate();
            if(validateResult) {
                fetch('https://66374a35288fedf6937ff19b.mockapi.io/person', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: userName,
                        password : password
                    })
                }).then((response)=>response.json())
                .then((responseJson)=>console.log(responseJson))
            }
        } else {
            setErrorMessage('کد امنیتی معتبر نیست');
            return false;
        }
    }
    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="signin-container">
            <p style={{color: 'red', fontSize: '17px'}}>{errorMessage}</p>
            <Logo />
            <input type="text" placeholder="username" name="username" value={userName} onChange={userNameHandler}/>
            <input type="password" placeholder="password" name="password" value={password} onChange={passwordHandler}/>
            <div className="captcha">
                <p> {randomNumber1} + {randomNumber2} = </p>
                <input type="text" name="number" onChange={captchaHandler} />
                <img src={captchaImage} onClick={generateCaptcha} />
            </div>
            <Button btnStyle='log-btn-style' clicked={logInHandler}>ورود</Button>
        </div>
    )
}

export default SignIn;