import React, {useState} from "react";
 
export const SignInContext = React.createContext();

const SignInContextProvider = (props) => {

    const [user, setUser] = useState(null);

    return (
        <SignInContext.Provider value={{user, setUser}}>
            {props.children}
        </SignInContext.Provider>
    )
}

export default SignInContextProvider;