import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import TaskDetails from './components/TaskDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path = "/tasks/:id">
              <TaskDetails></TaskDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
