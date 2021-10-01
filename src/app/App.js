import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { increment as incrementCount, httpGet } from '../stores/example';

import routes from '../routes';
import logo from '../logo.svg';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { clickCount, userAgent } = useSelector(state => ({
    clickCount: state.example.clicks,
    userAgent: state.example.getRequest.userAgent,
  }));

  useEffect(() => {
    dispatch(httpGet());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{clickCount} click{clickCount === 1 ? '' : 's'}</p>
        <a
          className="App-link"
          href="#/"
          rel="noopener noreferrer"
          onClick={() => dispatch(incrementCount())}
        >
          Click
        </a>
        <p>User Agent: {userAgent}</p>
        <Switch>
          <Route path={routes.r1} component={() => (<span>R1 route</span>)} />
          <Route path={routes.r2} component={() => (<span>R2 route</span>)} />
        </Switch>
      </header>
    </div>
  );
};

export default App;
