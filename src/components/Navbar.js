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
                <a href = "/">Home</a>
                <a href = "/create" style = {styles}>New Task</a>
            </div>
        </nav>
    );
}
 
export default Navbar;