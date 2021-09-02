import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
