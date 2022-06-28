import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import ProductDetailOverview from './pages/ProductDetailOverview';
import Profile from './components/profile/Profile';
import FilterResults from './pages/FilterResults';


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
        <FilterResults />
      </Route>
      <Route path='/:productId'>
        <ProductDetailOverview />
      </Route>
    </Switch>
  );
}

export default App;
