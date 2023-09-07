import PropTypes, { element } from 'prop-types';
import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import { useNavigate } from 'react-router-dom';


const Login = ({toggleForm}) => {
    const navigate = useNavigate();

    const [loginValues, setLoginValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const loginErrors = {};

    const handleErrors = (type) =>{
        type === "credentialError" && (loginErrors.credentialError = "wrong credential");
        type === "registerError" && (loginErrors.registerError = "to log in register first");
        type === "logInError" && !loginValues.email.trim() && (loginErrors.email = "email field is required");
        type === "logInError" && !loginValues.password.trim() && (loginErrors.password = "password field is required");
        setErrors(loginErrors);
    }

    const handleInput = (e) =>{
        setLoginValues(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(loginValues)
        const dbAccounts = JSON.parse(localStorage.getItem("accounts"));
        if(!dbAccounts){handleErrors("registerError"); return;}

        const isRegistered = dbAccounts.some(element => element.email === loginValues.email && element.password === loginValues.password);
        console.log("isRegistered", isRegistered)
        isRegistered ? navigate("/boards") : handleErrors("credentialError");
    }

    return (
        <>
            <div className='w-full h-[100vh] flex items-center justify-center'>
                <div className="flex flex-col p-10  border-solid border-2 border-black">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">

                        <InputGroup 
                            inputFor = "email"  
                            type ='email' 
                            labelVal = "Email" 
                            val = {loginValues.email} 
                            handleInput = {handleInput} 
                        />
                        {
                            errors.email && <span className=' text-red-500'>{errors.email}</span>
                        }
                        <InputGroup 
                            inputFor = "password"  
                            type ='password' 
                            labelVal = "Password" 
                            val = {loginValues.password} 
                            handleInput = {handleInput}
                        />
                        {
                            errors.password && <span className=' text-red-500'>{errors.password}</span>
                        }


                        <button>Login</button>
                        {
                            errors.credentialError && <span className=' text-red-500'>{errors.credentialError}</span>
                        }
                        {
                            errors.registerError && <span className=' text-red-500'>{errors.registerError}</span>
                        }
                    </form>
                    {/* <button onClick={()=> toggleForm("register")}>Don&apos;t have an account? Register here</button> */}
                    {/* <button onClick={()=> <Navigate to="/register" />}>Don&apos;t have an account? Register here</button> */}
                    <button onClick={()=> navigate("/register")}>Don&apos;t have an account? Register here</button>
                </div>
            </div>
            
        </>
    );
};

Login.propTypes = {
    toggleForm: PropTypes.func 
}

export default Login;