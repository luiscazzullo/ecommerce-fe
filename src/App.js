import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import AuthState from "./context/authState";
import header from "./components/headerWithOutUser/headerWhitOutUser";

function App() {
  return (
    <Router>
      <AuthState>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/header" exact component={header} />
        </Switch>
      </AuthState>
    </Router>
  );
}

export default App;
