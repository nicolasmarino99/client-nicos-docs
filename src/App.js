/* eslint-disable no-underscore-dangle */
import { useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import AuthParser from './algorithms/auth';
import './App.scss';
import { TokenContext } from './contexts/TokenProvider';
import Login from './pages/Auth/Login/Login';
import SignIn from './pages/Auth/SignIn/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/Landing/Landing';

const App = () => {
  const [token] = useContext(TokenContext);
  // if (token) setToken(AuthParser(token).parseJwt()._id);
  console.log(token);
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
  const RenderIfLogged = () => (
    document.cookie && token
      ? <Redirect to={`/dashboard/${AuthParser(token).parseJwt()._id}`} />
      : <LandingPage />
  );
  return (
    <div className="App">
      <Router>
        <Switch>
          { /* protected routes */ }
          <Route exact path="/">
            <RenderIfLogged />
          </Route>
          <Route exact path="/login" component={Login}>
            <RenderIfLogged />
          </Route>
          <Route exact path="/signin" component={SignIn}>
            <RenderIfLogged />
          </Route>
          {routes.map(({ path, key, component }) => (
            <Route exact path={path} key={key} component={component} >
              <RenderIfLogged />
            </Route>
          ))}
          {routes.map(({ path, key, component }) => (
            <Route exact path={path} key={key} component={component} />
          ))}

        </Switch>
      </Router>
    </div>
  );
};

export default App;
