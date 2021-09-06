
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import ProductDescript from './Components/ProductsDescript/ProductDescript';
import CardProduct from './Components/Card/Card';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/products" exact>
        <CardProduct/>
      </Route>
      <Route path="/product/:id" exact>
        <ProductDescript/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
