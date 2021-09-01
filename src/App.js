import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "../src/pages/login/login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={login} />
      </Switch>
    </Router>
  );
}

export default App;
