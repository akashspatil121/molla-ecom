import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Components/Product/Product";
import Cartpage from "./Components/Cart/Cartpage";
import Category from "./Components/Category/Category"
import Help from "./Components/Help/help";
import Header from "./Components/Home/Header";
import Footer from "./Components/Home/Footer";
import ContactUs from "./Components/Contact/ContactUs";
import TermAndPolicy from "./Components/Term_and_Policy/TermAndPolicy";
import UserProfile from "./Components/UserProfile/UserProfile";
import OrderPage from "./Components/Order/OrderPage";
// import TestCard from "./Components/TestCard/Cards"

// import PrimarySearchAppBar from './Components/Category/Appbar';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/molla-ecom" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/cart" component={Cartpage} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/navbar" component={Header} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/term" component={TermAndPolicy} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/order" component={OrderPage} />
          {/* <Route exact path="/testCard" component={TestCard} /> */}
          {/* <Route exact path="/navbar"  component={PrimarySearchAppBar} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
