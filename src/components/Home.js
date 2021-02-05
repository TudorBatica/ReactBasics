import { useState } from 'react';

const Home = () => {
    
    const [name, setName] = useState('Playuh');

    const handleClick = () => {
        name == 'Playuh' ? setName('Big Dog') : setName('Playuh');
    }

    return (
        <div className="home">
            <h2>List</h2>
            <p>{name}</p>
            <button onClick = {handleClick}>Click Me!</button>
        </div>
    );
}
 
export default Home;