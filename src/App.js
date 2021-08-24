import HeaderWhitOutUser from "./components/headerWithOutUser/headerWhitOutUser";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <HeaderWhitOutUser />
      </Switch>
    </Router>
  );
}

export default App;
