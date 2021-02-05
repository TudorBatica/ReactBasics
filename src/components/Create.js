import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setDescription] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent page refresh
        const task = { title, body } 
        console.log(task);
        
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log("new task added");
            history.go(-1);
        });
    }

    return (
        <div className="create">
            <h2> Add new task </h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Description:</label>
                <textarea
                    required
                    value={body}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default Create;