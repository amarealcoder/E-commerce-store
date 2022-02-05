// import logo from './logo.svg';
// import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Authentication from './pages/Auth';
import Home from './pages/Home';

function App() {
  // const classes = useStyles();

  return (
    <Switch>
      <Route path='/authentication'>
        <Authentication />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
