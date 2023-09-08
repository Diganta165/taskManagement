

const Task = ({task, selectedProjectHandler}) => {
    const {title, description, dueDate, priorityLevle, stage} = task;
    return (
        <>
            <div className="flex flex-col gap-3 p-4 border-solid border-2 border-black">
                <p>Title: {title}</p>
                <p>Description: {description}</p>
                <p>Due Date: {dueDate}</p>
                <p>Priority Level: {priorityLevle}</p>
                <p>Stage: {stage}</p>
                
            </div>
        </>
    );
};

export default Task;