import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Route} from "react-router-dom";
import Routes from 'routes'
import TopBar from 'components/navbar'
import {CurrentUserProvider} from 'context/currentUser'

const App = () => {
    return (
        <CurrentUserProvider>
            <Route>
                <TopBar/>
                <Routes/>
            </Route>
        </CurrentUserProvider>
    )
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
