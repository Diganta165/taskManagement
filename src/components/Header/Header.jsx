import { useState } from "react";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";
import InputGroup from "../InputGroup/InputGroup";
import { element } from "prop-types";


const Header = ({projects, handleProjectsData, selectedProjectHandler}) => {

    // const [projects, setProjects] = useState([]);

    const [isPopup, setIsPopup] = useState(false);
    // ######
    const [projectVal, setProjectVal] = useState({
        project:"",
        tasks:[]
    });

    const projectHandler = (e) =>{
        e.preventDefault();
        setProjectVal(prev =>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // ####
    const closePopup = () => {
        setIsPopup(prev => prev= !prev)
        setProjectVal(prev =>({
            ...prev,
            project : ""
        }))
    };

    const popupHandler = (e) =>{
        console.log("open popup", isPopup)
        console.log("[e.target.name]", [e.target.name])
        setIsPopup(prev => prev= !prev);
        if(!projectVal.project?.length) return;
        // setProjects(prev =>[
        //     ...prev,
        //     projectVal
        // ])
        handleProjectsData(projectVal);
        setProjectVal(prev =>({
            ...prev,
            project : ""
        }))
    }

    return (
        <>
            <div className="flex flex-col gap-8 z-10">
                <nav className="flex justify-between fixed w-full p-8 border-solid border-2 border-b-black ">
                    <ul className="flex justify-between w-full ">
                        <li className=" text-lg font-bold">Task Manager</li>
                        <li className="text-lg font-bold">Account</li>
                    </ul>
                </nav>
                <nav className="flex flex-col h-full max-w-fit fixed p-8 border-solid border-2 border-r-black pt-24 ">
                    {/* <button>Add a project</button> */}
                    <Button type = "sideBar" content = "Add a project" clickHandler = {popupHandler} />
                    <ul className="flex flex-col h-full gap-4">
                        {
                            projects && projects?.length > 0 && projects.map((element, index) =>{
                                return(
                                    <li key={index} className="text-center p-2 rounded border-solid border-2 border-black" onClick ={()=> selectedProjectHandler(element.project)}>{element.project}</li>
                                )
                            }) 
                        }
                    </ul>
                </nav>
            </div>
            {
                
                // isPopup && <Popup popupHandler ={popupHandler}  setProjects = {setProjects}/>
                isPopup && <div className='w-full h-[100vh] bg-slate-700 flex items-center justify-center'>
                                <form className="flex flex-col gap-3">
                                    <InputGroup 
                                        inputFor = "project"  
                                        type ='text' 
                                        labelVal = "Project Name" 
                                        val = {projectVal.project}
                                        handleInput = {projectHandler}
                                    />
                                    <div className='flex justify-between'>
                                        <Button type ="submit" content = "submit" clickHandler = {popupHandler}/>
                                        <Button type ="cancel" content = "cancel" clickHandler = {closePopup}/>
                                        
                                    </div>
                                </form>
                            </div>
            }
            {
                console.log("projects", projects)
            }
        </>
    );
};

export default Header;