import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import MainPage from "./views/MainPage";
import Repositories from "./views/Repositories";
import ReposDT from "./views/ReposDT";

const App = () => {
    return (
        <Router>
          <Route exact path='/'><MainPage /></Route>
          <Route exact path='/:id'><Repositories /></Route>
          <Route  path='/:id/:project'><ReposDT /></Route>
        </Router>
    );
};

export default App;