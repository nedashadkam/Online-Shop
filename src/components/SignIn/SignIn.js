import React, { useContext, useEffect, useState } from "react";
import './SignIn.css';
import Button from '../button/Button';
import Logo from '../Logo/Logo';
import captchaImage from '../../assets/images/captchaImage.png';
import { register, logIn } from "../../services/LoginService";
import { SignInContext } from "../../containers/Context/SignInContext";

const SignIn = () => {
    const [randomNumber1, setRandomNumber1] = useState(0);
    const [randomNumber2, setRandomNumber2] = useState(0);
    const [sumHolder, setSumHolder] = useState(0);
    const [captchaValue, setCaptchaValue] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [logInMessage, setLogInMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(SignInContext);
    console.log(user)


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
        if (userName === '') {
            setErrorMessage('نام کاربری خالی است')
            return false
        } else if (!userName.includes('.com') && !userName.includes('.ir') && !userName.includes('.io')) {
            setErrorMessage('نام کاربری معتبر نیست');
            return false
        } else if (!userName.includes('@')) {
            setErrorMessage('نام کاربری معتبر نیست');
            return false
        } else if (password === '') {
            setErrorMessage('رمز خالی است')
            return false
        } else if (password.length < 5) {
            setErrorMessage('رمز حداقل باید شامل ۵ کاراکتر باشد')
            return false
        }
        setErrorMessage('');
        return true;
    }
    const registerHandler = () => {
        if (sumHolder === captchaValue) {
            setErrorMessage('');
            const validateResult = validate();
            if (validateResult) {
                register(userName, password)
                    .then((res) => {
                        console.log(res);
                        document.getElementById('logInMessage').style.color = 'green';
                        setLogInMessage('ثبت نام با موفقیت انجام شد')
                        setUser({ logInUserName: res?.userName });

                    })
                    .catch((error) => {
                        alert('خطا در برقراری ارتباط')
                    })
            }
        } else {
            setErrorMessage('کد امنیتی معتبر نیست');
            return false;
        }
    }
    const logInHandler = () => {
        if (sumHolder === captchaValue) {
            setErrorMessage('');
            const validateResult = validate();
            if (validateResult) {
                logIn()
                    .then((res) => res.json())
                    .then((response) => {
                        let x = response.every((item) => {
                            return item.logInUserName == userName
                        })
                        if (x) {
                            document.getElementById('logInMessage').style.color = 'green';
                            setLogInMessage('خوش آمدید')
                            setUser({ userName: response?.logInUserName });
                        } else {
                            document.getElementById('logInMessage').style.color = 'red';
                            setLogInMessage('کاربر یافت نشد دوباره تلاش کنید')
                        }
                    })
                    .catch((error) => {
                        alert('خطا در برقراری ارتباط')
                    })
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
            <p style={{ color: 'red', fontSize: '17px' }}>{errorMessage}</p>
            <p style={{ fontSize: '17px' }} id="logInMessage">{logInMessage}</p>
            <Logo />
            <input type="text" placeholder="نام کاربری" name="username" value={userName} onChange={userNameHandler} />
            <input type="password" placeholder="رمز" name="password" value={password} onChange={passwordHandler} />
            <div className="captcha">
                <p> {randomNumber1} + {randomNumber2} = </p>
                <input type="text" name="number" onChange={captchaHandler} />
                <img src={captchaImage} onClick={generateCaptcha} />
            </div>
            <Button btnStyle='log-btn-style' clicked={logInHandler}>ورود</Button>
            <Button btnStyle='register-btn-style' clicked={registerHandler}>ثبت نام</Button>
        </div>
    )
}

export default SignIn;