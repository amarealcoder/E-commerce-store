// import logo from './logo.svg';
// import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Authentication from './pages/Auth';
import Home from './pages/Home';
import Search from './pages/Search';
import SearchResults from './pages/SearchResults';

function App() {
  // const classes = useStyles();

  return (
    <Switch>
      <Route path='/signIn'>
        <Authentication />
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
    </Switch>
  );
}

export default App;
