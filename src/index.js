import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Route} from "react-router-dom";
import Routes from 'routes'
import TopBar from 'components/navbar'
const App = () => {
    return (
        <div>
            <Route>
                <TopBar/>
                <Routes/>
            </Route>

        </div>
    )
}



ReactDOM.render(
    <App />,
  document.getElementById('root')
);
