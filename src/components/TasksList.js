const TasksList = (props) => {

    const tasks = props.tasks;

    return (
        <div className="blog-list">
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.body}</p>
                </div>
            ))}
        </div>
    );
}

export default TasksList;