import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import SecondPage from "./components/SecondPage/SecondPage/SecondPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/second-page">
          <SecondPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
