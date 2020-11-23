import './App.css';
import { Switch , Route } from "react-router-dom";
import Home from 'pages/homePage/home/home';
import PurchaseComplete from 'pages/purchaseCompletePage/purchaseComplete/purchaseComplete';
import DetailItem from 'pages/detailItemPage/detailItem/detailItem';
import Login from 'pages/loginPage/login/login';
import Membership from 'pages/membershipPage/membership/membership';
import StoreInformation from 'pages/storeInformationPage/storeInformation/storeInformation';
import Basket from 'pages/basketPage/basket/basket';
import RaiseProduct from 'pages/managerPage/raiseProduct/raiseProduct';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/raiseProduct' component={RaiseProduct} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/:search" component={Home} />
        <Route path="/detailItem/:id" component={DetailItem} />
        <Route exact path="/" component={Login} />
        <Route path="/membership" component={Membership} />
        <Route path="/purchaseComplete" component={PurchaseComplete} />
        <Route path="/storeInformation" component={StoreInformation} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </div>
  );
}

export default App;
