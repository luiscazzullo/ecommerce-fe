import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import AuthState from "./context/authState";

function App() {
  return (
    <Router>
      <AuthState>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </AuthState>
    </Router>
  );
}

export default App;
