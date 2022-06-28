import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainPage from './pages/MainPage';
import ImageUpload from './pages/ImageUpload';

const App = () => {
  return (
    <div className="App">
      <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/upload" exact>
            <ImageUpload />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;
