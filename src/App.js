import { Switch, Route, Redirect } from 'react-router-dom';
// import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Search from './pages/Search';
// import SearchResults from './pages/SearchResults';
// import FilterModal from './pages/FilterModal';
import ProductDetailOverview from './pages/ProductDetailOverview';
// import ProductsDetailSpecification from './pages/ProductsDetailSpecification';
// import ShoppingCart from './components/ShoppingCart';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import ProductsDetailSpecification from './pages/ProductsDetailSpecification';
// import ProductsSpecification from './components/products/ProductsSpecification';
// import ChangePassword from './components/profile/profileDetails/ChangePassword';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/search'>
        <Search />
      </Route>
      <Route path='/search-results'>
        <SearchResults />
      </Route>
      <Route path='/:productId/specification'>
        <ProductsDetailSpecification />
      </Route>
      <Route path='/:productId'>
        <ProductDetailOverview />
      </Route>
      
    </Switch>
  );
}

export default App;
