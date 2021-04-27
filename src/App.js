/* eslint-disable no-underscore-dangle */
import { useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import parseJwt from './algorithms/auth';
import './App.scss';
import { TokenContext } from './contexts/TokenProvider';
import Login from './pages/Auth/Login/Login';
import SignIn from './pages/Auth/SignIn/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/Landing/Landing';

const App = () => {
  const [token, setToken] = useContext(TokenContext);


  const routes = [
    { path: '/dashboard/:id', key: 'Dashboard', component: Dashboard },
    { path: '/login', key: 'About', component: Login },
    { path: '/signin', key: 'Moves', component: SignIn },
    // { path: '/generations', key: 'Generations', component: Generations },
    // { path: '/items', key: 'Items', component: Items },
    // { path: '/locations', key: 'Locations', component: Locations },
    // { path: '/machines', key: 'Machines', component: Machines },
    // { path: '/pokemons/:name', key: 'pokemons', component: Pokemon },
    { path: '/*', key: 'notFound', component: () => '404 NOT FOUND' },
  ];

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {token ? <Redirect to={`/dashboard/${parseJwt(token)._id}`} /> : <LandingPage />}
          </Route>
          {routes.map(({ path, key, component }) => (
            <Route exact path={path} key={key} component={component} />
          ))}

        </Switch>
      </Router>
    </div>
  );
};

export default App;
