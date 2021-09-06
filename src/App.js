//import './App.css';
import Footer from './Components/Footer/Footer';
import HomeBenefits from './Components/HomeBenefits/HomeBenefits';
import HeaderWhitOutUser from './Components/headerWithOutUser/headerWhitOutUser';
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
          <Footer/>
    </>
    );
}

export default App;
