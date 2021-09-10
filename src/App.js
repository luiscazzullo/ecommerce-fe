//import './App.css';
import Footer from './Components/Footer/Footer';
import HomeBenefits from './Components/HomeBenefits/HomeBenefits';
import HeaderWhitOutUser from './Components/headerWithOutUser/headerWhitOutUser';
import Card from './Components/Card/Card';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <HeaderWhitOutUser />
        </Switch>
      </Router>
          <HomeBenefits/>
          <Card/>
          <Footer/>
    </>
    );
}

export default App;
