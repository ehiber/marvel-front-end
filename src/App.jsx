import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/App.scss';
import AppContextProvider from "./js/store/appContext";
import NavbarMarvel from "./js/component/NavbarMarvel/NavbarMarvel.js";
import Home  from "./js/views/Home/Home.js";
import Comics from "./js/views/Comics/Comics.js"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContextProvider>
          <NavbarMarvel />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/comics" component={Comics} />
            <Route render={() => <h1>Not found!</h1>} />
            </Switch>
        </AppContextProvider> 
      </BrowserRouter>
    </div>
  );
};

export default App;
