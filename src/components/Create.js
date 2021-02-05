import useFetch from "../hooks/useFetch"

const Create = () => {
    return (
        <div className="create">
            <h2> Add new task </h2>
            <form>
                <label>Title:</label>
                <input 
                    type="text"
                    required
                />
                <label>Description:</label>
                <textarea
                    required
                />
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default Create;