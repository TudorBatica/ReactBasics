const Home = () => {
    
    const handleClick = (name, e) => {
        console.log(`clique, ${name}; ${e.target}`);
    }

    return (
        <div className="home">
            <h2>List</h2>
            <button onClick = {(e) => handleClick('playuh', e)}>Click Me!</button>
        </div>
    );
}
 
export default Home;