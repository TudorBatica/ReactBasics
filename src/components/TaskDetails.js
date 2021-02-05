import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, error, isLoading } = useFetch(`http://localhost:8000/tasks/${id}`);

    return (  
        <div className="task-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { task && (
                <article>
                    <h2>{task.title}</h2>
                    <p>{task.body}</p>
                </article>
            )}
        </div>
    );
}
 
export default TaskDetails;