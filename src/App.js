// import { ProductsProvider } from './store/ProductsContext';

import { Switch, Route, Redirect } from 'react-router-dom';
// import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Search from './pages/Search';
// import SearchResults from './pages/SearchResults';
// import FilterModal from './pages/FilterModal';
// import ProductsDetailOverview from './pages/ProductsDetailOverview';
// import ProductsDetailSpecification from './pages/ProductsDetailSpecification';
// import ShoppingCart from './components/ShoppingCart';
import Profile from './pages/Profile';
// import ChangePassword from './components/profile/profileDetails/ChangePassword';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/profile'>
        <Profile />
      </Route>
      {/* <Route path='/password-change'>
       <ChangePassword />
      </Route> */}
      {/* <Route >
        <ChangePassword />
</Route> */}
    </Switch>
    // <Switch>
    //    <Route path='sign-in'>
    //       <SignIn />
    //  </Route>

    //
    //     <Route path='/' exact>
    //       <Home />
    //     </Route>
    //     <Route path='/search'>
    //       <Search />
    //     </Route>
    //     <Route path='/search-results'>
    //       <SearchResults />
    //     </Route>
    //     <Route path='/modal'>
    //       <FilterModal />
    //     </Route>
    //     <Route path='/product-overview'>
    //       <ProductsDetailOverview />
    //     </Route>
    //     <Route path='/product-specification'>
    //       <ProductsDetailSpecification />
    //     </Route>
    //     <Route path='/cart'>
    //       <ShoppingCart />
    //     </Route>
    //     <Route path='/profile'>
    //       <Profile />
    //     </Route>
    // </Switch>
  );
}

export default App;
