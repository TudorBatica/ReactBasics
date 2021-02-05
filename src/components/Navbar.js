import { Link } from 'react-router-dom';

const Navbar = () => {

    const styles = {
        color: "white",
        backgroundColor: "#4B0082",
        borderRadius: '8px'
    };

    return (
        <nav className="navbar">
            <h1> Todo List </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={styles}>New Task</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;