import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './services/firebaseAuth';
import { onAuthStateChanged } from 'firebase/auth';

import Home from './pages/Home';
import Search from './pages/Search';
import ProductDetailOverview from './pages/ProductDetailOverview';
import Profile from './components/profile/Profile';
import FilterResults from './pages/FilterResults';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import ChangePassword from './components/profile/ChangePassword';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    //firebase function to check the current user status
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Switch>
      <Route exact path='/'>
        <SignUpForm />
      </Route>
      <Route path='/sign-in'>
        <SignInForm />
      </Route>
      <Route path='/change-password'>
        <ChangePassword user={user} />
      </Route>
      <Route path='/home'>
        <Home user={user} />
      </Route>
      <Route path='/profile'>
        <Profile user={user} />
      </Route>

      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/search-results'>
        <FilterResults />
      </Route>
      <Route path='/home/:productId'>
        <ProductDetailOverview />
      </Route>
    </Switch>
  );
}

export default App;
