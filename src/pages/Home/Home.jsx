import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [currentForm, setCurrentForm] = useState("login");

    return (
        <>
            <div className='w-full h-[100vh] flex items-center justify-center'>
            {
                currentForm === "login"
                // ? <Navigate to="/login" />
                // :<Navigate to="/register" />
                ? navigate("/login")
                : navigate("/register")
            }
        
      </div>
        </>
    );
};

export default Home;