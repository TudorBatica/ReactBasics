import useFetch from '../hooks/useFetch';
import TasksList from './TasksList';

const Home = () => {
    const {data: tasks, isLoading, error} = useFetch('http://localhost:8000/tasks');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading Tasks...</div>}
            <TasksList tasks = {tasks}/>
        </div>
    );
} 
 
export default Home;