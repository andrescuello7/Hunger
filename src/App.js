import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//Componentes
import HomePage from "../src/PagesForm/HomeForm"
import AgregarPage from "../src/PagesForm/AgregarPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/subir">
            <AgregarPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
