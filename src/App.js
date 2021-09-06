<<<<<<< HEAD

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
=======
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Footer/>
    </div>
>>>>>>> 563506355d4cd272e8f2e7aa758393d46bd19db6
  );
}

export default App;
