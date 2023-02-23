import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Tools from './Tools';
import Services from './Services';
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', email: 'johndoe@example.com' });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/tools">
            <Tools />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
