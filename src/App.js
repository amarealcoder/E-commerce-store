// import logo from './logo.svg';
// import './App.css';
import { useContext} from 'react';
import AuthContext from './store/AuthContext';

import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';
import FilterModal from './pages/FilterModal';
import ProductsDetailOverview from './pages/ProductsDetailOverview';
import ProductsDetailSpecification from './pages/ProductsDetailSpecification';
import ShoppingCart from './components/ShoppingCart';
import Profile from './pages/Profile';
import ChangePassword from './components/profileDetails/ChangePassword';

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Switch>
      {!isLoggedIn && (
        <Route path='/sign-in'>
          <SignIn />
        </Route>
      )}
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/search-results'>
        <SearchResults />
      </Route>
      <Route path='/modal'>
        <FilterModal />
      </Route>
      <Route path='/product-overview'>
        <ProductsDetailOverview />
      </Route>
      <Route path='/product-specification'>
        <ProductsDetailSpecification />
      </Route>
      <Route path='/cart'>
        <ShoppingCart />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/password-change'>
        <ChangePassword />
      </Route>
    </Switch>
  );
}

export default App;
