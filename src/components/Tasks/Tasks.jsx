import Task from "../Task/Task";


const Tasks = ({projects, selectedProject, selectedProjectHandler}) => {
    return (
        <>
            <div className="flex flex-col gap-3">
                {
                    projects?.find(element => element?.project === selectedProject.project).tasks.map((element, index) =>{
                        return <Task key={index} task ={element} selectedProjectHandler={selectedProjectHandler} />
                        // console.log("element",element)
                    })
                }
            </div>
            
        </>
    );
};

export default Tasks;