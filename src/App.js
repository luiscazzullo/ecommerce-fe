//Libs /Dependencies /Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route path="/" exact>
          <h1>Hola mundo</h1>
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
