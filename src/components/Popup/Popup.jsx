import PropTypes from 'prop-types';
import InputGroup from '../InputGroup/InputGroup';
import { useState } from 'react';
import Button from '../Button/Button';

const Popup = ({popupHandler, setProjects}) => {
    const [projectVal, setProjectVal] = useState({
        project:"",
    });
    const projectHandler = (e) =>{
        e.preventDefault();
        setProjectVal(prev =>({
            ...prev,
            [e.target.name]: e.target.value 
        }))

        // setProjects(prev=>([
        //     ...prev,
        //     {[e.target.name]: e.target.value}
        //     // ...projectVal,
        // ]))

        console.log("projectVal", projectVal)
        console.log("projectVal1", [e.target.name] )
        console.log("projectVal2",  e.target.value )
    
    };

    const closePopup = () =>{
        projectHandler();
        setProjects(prev=>([
            ...prev,
            projectVal
            // {[e.target.name]: e.target.value}
            // ...projectVal,
        ]))
        popupHandler();
    }
    return (
        <>
            <div className='w-full h-[100vh] bg-slate-700 flex items-center justify-center'>
                <form className="flex flex-col gap-3">
                    <InputGroup 
                        inputFor = "project"  
                        type ='text' 
                        labelVal = "Project Name" 
                        val = {projectVal.project}
                        handleInput = {projectHandler}
                    />
                    <div className='flex justify-between'>
                        <Button type ="submit" content = "submit" clickHandler = {closePopup}/>
                        <Button type ="cancel" content = "cancel" clickHandler = {popupHandler}/>
                        
                    </div>
                </form>
            </div>
        </>
    );
};

Popup.propTypes = {
    // inputFor: PropTypes.string,
};

export default Popup;