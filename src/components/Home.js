import { useState } from 'react';
import TasksList from './TasksList';

const Home = () => {
    
    const [tasks, setTasks] = useState([
        {title: 'Learn React', body: 'This will take a while...', id: 1},
        {title: 'Be a Playuh', body: 'Comes naturally', id: 2}
    ]);


    

    return (
        <div className="home">
            <TasksList tasks = {tasks} />
        </div>
    );
}
 
export default Home;