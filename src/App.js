import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Componentes
import HomePage from "../src/PagesForm/HomeForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
