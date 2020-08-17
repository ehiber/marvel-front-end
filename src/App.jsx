import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/App.scss';
import AppContextProvider from "./js/store/appContext";
import { NavbarMarvel } from "./js/component/navbarMarvel";
import { Home } from "./js/views/home";


const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <AppContextProvider>
            <NavbarMarvel />
                <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/register" component={Register} />
                <Route path="/login" component={LogIn} />
                <Route path="/juegos/:filter?" component={Juegos} />
                <Route exact path="/juego/:game" component={OneGame} />
                <Route path="/torneos" component={Torneos} />
                <Route path="/create-tournament" component={CreateTournamentForm} /> */}
                <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </AppContextProvider> 
		</BrowserRouter>
    </div>
  );
};

export default App;
