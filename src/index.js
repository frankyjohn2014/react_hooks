import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Route} from "react-router-dom";
import Routes from 'routes'
import TopBar from 'components/navbar'
import {CurrentUserProvider} from 'context/currentUser'
import CurrentUserChecker from 'components/currentUserChecker'
const App = () => {
    return (
        <CurrentUserProvider>
            <CurrentUserChecker>
                <Route>
                    <TopBar/>
                    <Routes/>
                </Route>
            </CurrentUserChecker>
        </CurrentUserProvider>
    )
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
