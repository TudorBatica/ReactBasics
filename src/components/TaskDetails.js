import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const TaskDetails = () => {
    const { id } = useParams();
    const { data: task, error, isLoading } = useFetch(`http://localhost:8000/tasks/${id}`);
    const history = useHistory();
    
    const handleClick = () => {
        fetch(`http://localhost:8000/tasks/${id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }

    return (  
        <div className="task-details">
            { isLoading && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { task && (
                <article>
                    <h2>{task.title}</h2>
                    <p>{task.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default TaskDetails;