//import './App.css';
import Footer from './Components/Footer/Footer';
import HomeBenefits from './Components/HomeBenefits/HomeBenefits';
import HeaderWhitOutUser from './Components/headerWithOutUser/headerWhitOutUser';
import Card from './Components/Card/Card'
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <HeaderWhitOutUser />
        </Switch>
      </Router>
          <Card />
          <HomeBenefits/>
          <Footer/>
    </>
    );
}

export default App;
