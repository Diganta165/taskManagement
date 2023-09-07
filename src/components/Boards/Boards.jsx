import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ProjectTask from "../ProjectTask/ProjectTask";


const Boards = () => {

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState({
        project: "",
        tasks:[]
    });

    const handleProjectsData = (newData) =>{
        setProjects(prev =>[
            ...prev,
            newData
        ])
    }

    const selectedProjectHandler = (projectName) =>{
        const projectData = projects.find(element => element?.project === projectName );
        setSelectedProject(prev =>({
            ...prev,
            project : projectData.project,
            tasks: [...projectData.tasks]
        }))
    };

    const updateProjectTasks = (projectName, taskData) =>{
        console.log("projectName", projectName)
        const newProject = projects.map(element =>{
            if(element.project === projectName) return {...element, tasks:[...element.tasks,taskData]}
            return element;
        })
        setProjects(prev => [...prev, newProject[0]]);
    };

    // useEffect(()=>{

    // }, [projects])


    return (
        <>
            <Header projects = {projects} handleProjectsData = {handleProjectsData} selectedProjectHandler ={selectedProjectHandler} />
            {
                // console.log("selectedProject", selectedProject)
                projects?.length > 0 && selectedProject?.project?.length > 0 && <ProjectTask selectedProject = {selectedProject}  updateProjectTasks = {updateProjectTasks} />
            }
            {
                console.log("projects", projects)
            }
        </>
    );
};

export default Boards;