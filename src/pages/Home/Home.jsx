import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [currentForm, setCurrentForm] = useState("login");
    useEffect(()=>{
        currentForm === "login"
        ? navigate("/login")
        : navigate("/register")
    }, []);

    return (
        <>
            <div className='w-full h-[100vh] flex items-center justify-center'>
            {
               // currentForm === "login"
                // ? navigate("/login")
                // : navigate("/register") 
            }
        
      </div>
        </>
    );
};

export default Home;