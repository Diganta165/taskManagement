import PropTypes from 'prop-types';
import InputGroup from '../InputGroup/InputGroup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({toggleForm}) => {
    const navigate = useNavigate();

    const [registerValues, setRegisterValues] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const validationErrors = {};

    const handleInput = (e) =>{
        const {name, value} = e.target;
        setRegisterValues(prev =>({
            ...prev, [name]: value
        }))
        formErrorValidation(validationErrors);
    };

    const formErrorValidation = (validationErrors) =>{
        !registerValues.userName.trim() && ( validationErrors.userName = "User Name is required");
        !registerValues.email.trim() && (validationErrors.email = "Email is required");
        !registerValues.password.trim() && (validationErrors.password = "Password is required");
        !registerValues.confirmPassword.trim() && (validationErrors.confirmPassword = "Confirm Password is required");
        registerValues.password != registerValues.confirmPassword &&  (validationErrors.confirmPassword = "Passwords don't match");
        setErrors(validationErrors);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("registerValues", registerValues)
        formErrorValidation(validationErrors);
        console.log("validationErrors", validationErrors)
        if(Object.keys(validationErrors).length === 0){
            const dbAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
            
            // const newAccount = JSON.stringify();
            localStorage.setItem("accounts", JSON.stringify([...dbAccounts, registerValues]));
            toggleForm("login");
        }
    }

    return (
        <>
            <div className='w-full h-[100vh] flex items-center justify-center'>
                <div className="flex flex-col p-10  border-solid border-2 border-black">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">

                        <InputGroup 
                            inputFor = "userName"  
                            type ='text' 
                            labelVal = "Full Name" 
                            val = {setRegisterValues.userName} 
                            handleInput = {handleInput} 
                        />
                        {
                            errors.userName && <span className=' text-red-500'>{errors.userName}</span>
                        }
                        
                        <InputGroup 
                            inputFor = "email"  
                            type ='email' 
                            labelVal = "Email" 
                            val = {setRegisterValues.email} 
                            handleInput = {handleInput} 
                        />
                        {
                            errors.email && <span className=' text-red-500'>{errors.email}</span>
                        }
                        <InputGroup 
                            inputFor = "password"  
                            type ='password' 
                            labelVal = "Password" 
                            val = {setRegisterValues.password} 
                            handleInput = {handleInput}
                        />
                        {
                            errors.password && <span className=' text-red-500'>{errors.password}</span>
                        }
                        
                        <InputGroup 
                            inputFor = "confirmPassword"  
                            type ='password' 
                            labelVal = "Confirm Password" 
                            val = {setRegisterValues.confirmPassword} 
                            handleInput = {handleInput}
                        />
                        {
                            errors.confirmPassword && <span className=' text-red-500'>{errors.confirmPassword}</span>
                        }


                        <button>Register</button>
                    </form>
                    {/* <button onClick={()=> toggleForm("login")}>Already have an account? Login here</button> */}
                    <button onClick={()=> navigate("/login")}>Already have an account? Login here</button>
                </div>
            </div>
            
        </>
    );
};

Register.propTypes = {
    toggleForm: PropTypes.func 
}

export default Register;