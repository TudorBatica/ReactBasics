const TasksList = ({ tasks, handleDelete }) => {
    return (
        <div className="blog-list">
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.body}</p>
                    <button onClick={() => handleDelete(task.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default TasksList;