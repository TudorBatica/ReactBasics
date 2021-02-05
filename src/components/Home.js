import { useState, useEffect } from 'react';
import TasksList from './TasksList';

const Home = () => {
    
    const [tasks, setTasks] = useState([
        {title: 'Learn React', body: 'This will take a while...', id: 1},
        {title: 'Be a Playuh', body: 'Comes naturally', id: 2}
    ]);

    const handleDelete = (id) => {
        setTasks(tasks.filter(tasks => tasks.id !== id));
    }

    useEffect(() => {
        console.log("Rendered Home");
    }, []);

    return (
        <div className="home">
            <TasksList tasks = {tasks} handleDelete = {handleDelete}/>
        </div>
    );
}
 
export default Home;