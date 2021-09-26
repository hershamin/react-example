import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import logo from '../logo.svg';

import { ExampleStore } from '../stores/example';

import './App.css';

const App = () => {
  const clickCount = ExampleStore.useState(s => s.clickCount);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{clickCount} click{clickCount > 1 ? 's' : ''}</p>
        <a
          className="App-link"
          href="#"
          target="_self"
          rel="noopener noreferrer"
          onClick={() => ExampleStore.update(s => {
            s.clickCount = clickCount + 1
          })}
        >
          Click
        </a>
        <Switch>
          <Route path={routes.r1} component={() => (<span>R1 route</span>)} />
          <Route path={routes.r2} component={() => (<span>R2 route</span>)} />
        </Switch>
      </header>
    </div>
  );
};

export default App;
