import { useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import Button from "../Button/Button";
import Tasks from "../Tasks/Tasks";


const ProjectTask = ({projects, selectedProject, updateProjectTasks, selectedProjectHandler}) => {

    const [taskData, setTaskData] = useState({
        title:"",
        description: "",
        dueDate: "",
        priorityLevel: "low",
        stage: "inProgress"
    });

    const taskDataHandler  = (e) =>{
        setTaskData(prev=>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    const createTask = (e) =>{
        e.preventDefault();
        console.log("selectedProject11", selectedProject)
        updateProjectTasks(selectedProject.project, taskData);
    }

    

    return (
        <>
            <div className="flex flex-col items-center h-[100vh] w-full p-24">
                <form className="pt-4" onSubmit={createTask}>
                    <InputGroup
                        inputFor = "title"  
                        type ='text' 
                        labelVal = "Title" 
                        val = {taskData.title}
                        handleInput = {taskDataHandler}
                    />
                    <InputGroup
                        inputFor = "description"  
                        type ='text' 
                        labelVal = "Description" 
                        val = {taskData.description}
                        handleInput = {taskDataHandler}
                    />
                    <InputGroup
                        inputFor = "dueDate"  
                        type ='text' 
                        labelVal = "Due Date" 
                        val = {taskData.dueDate}
                        handleInput = {taskDataHandler}
                    />
                    {/* <InputGroup
                        inputFor = "priorityLevel"  
                        type ='text' 
                        labelVal = "Priority Level" 
                        val = {taskData.priorityLevel}
                        handleInput = {taskDataHandler}
                        high, medium , low
                    /> */}
                    <label>
                        Set Priority
                        <select name="priorityLevel" id="priorityLevel" value={taskData.priorityLevel} onChange={taskDataHandler} className="min-w-[220px] border-solid border-2 border-black">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </label>

                    {/* <InputGroup
                        inputFor = "stage"  
                        type ='text' 
                        labelVal = "Stage" 
                        val = {taskData.stage}
                        handleInput = {taskDataHandler}
                    /> */}

                    <label>
                        Stage
                        <select name="stage" id="stage" value={taskData.stage} onChange={taskDataHandler} className="min-w-[220px] border-solid border-2 border-black">
                            <option value="inProgress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </label>
                    {/* <Button type ="submit" content = "submit" /> */}
                    <button type ="submit">Submit</button>
                </form>

                
                {
                    // projects &&
                    // projects?.find(element => element?.project === selectedProject.project).tasks.map(element => <)
                }

            <Tasks projects={projects} selectedProject = {selectedProject} selectedProjectHandler={selectedProjectHandler} />
            </div>
        </>
    );
};

export default ProjectTask;