
// import { useState } from 'react'

// import { createBrowserHistory } from 'history';
// import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import './App.css'
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import Boards from './components/Boards/Boards';
import Home from './pages/Home/Home';

function App() {

  // const [currentForm, setCurrentForm] = useState("login");

  // const toggleForm = (formName) => setCurrentForm(formName);

  return (
    <>
      {/* <div className='w-full h-[100vh] flex items-center justify-center'>
        {
          currentForm === "login"
          // ? <Login toggleForm = {toggleForm} />
          // :<Register toggleForm = {toggleForm} />
          ? <Navigate to="/login" />
          :<Navigate to="/register" />
        }
        
      </div> */}

      {/* <Router history={myHistory}> */}
      {/* <Router > */}
        <Routes>
          
          <Route path='/' element = {<Home />} />
          
          <Route path='/login' element = {<Login />} />

          <Route path='/register' element = {<Register />} />
          
          <Route path='/boards' element = {<Boards />} />
        </Routes>
      {/* </Router> */}
    </>
  )
}

export default App
