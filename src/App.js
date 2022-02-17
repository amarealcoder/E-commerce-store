// import logo from './logo.svg';
// import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';
import FilterModal from './pages/FilterModal';
import ProductsDetailOverview from './pages/ProductsDetailOverview';
import ProductsDetailSpecification from './pages/ProductsDetailSpecification';

function App() {
  // const classes = useStyles();

  return (
    <Switch>
      <Route path='/sign-in'>
        <SignIn />
      </Route>
      <Route path='/home'>
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
    </Switch>
  );
}

export default App;
