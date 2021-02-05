import { Link } from "react-router-dom"

const TasksList = ({ tasks }) => {
    return (
        <div className="task-list">
            {tasks?.map((task) => (
                <div className="task-preview" key={task.id}>
                    <Link to={`/tasks/${task.id}`}>
                        <h2>{task.title}</h2>
                        <p>{task.body}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default TasksList;