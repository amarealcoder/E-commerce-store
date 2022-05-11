import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ProductDetailOverview from './pages/ProductDetailOverview';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import ProductsDetailSpecification from './pages/ProductsDetailSpecification';

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
