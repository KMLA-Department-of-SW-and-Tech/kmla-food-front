import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from './pages/MainPage';

const App = () => {
  return (
    <div className="App">
      <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
