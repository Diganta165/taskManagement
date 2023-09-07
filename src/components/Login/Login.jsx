import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";


const Login = () => {
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    });

    const handleInput = (e) =>{
        setLoginValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(loginValues)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-10 border-solid border-2 border-black">

                <InputGroup 
                    inputFor = "email"  
                    type ='email' 
                    labelVal = "Email" 
                    val = {loginValues.email} 
                    handleInput = {handleInput} 
                />
                <InputGroup 
                    inputFor = "password"  
                    type ='password' 
                    labelVal = "Password" 
                    val = {loginValues.pass} 
                    handleInput = {handleInput}
                />


                <button>Login</button>
            </form>
        </>
    );
};

export default Login;