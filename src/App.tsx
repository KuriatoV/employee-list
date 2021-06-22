import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Employees from './pages/employees'
import { App } from 'types';


const Application: React.FC = () => {

    return (
    <div id='app'>
        <BrowserRouter>
        <Switch>            
     
        <Route
            exact={true}
            path={App.Route.EMPLOYEES_LIST}
            component={Employees}
            />
                    
        <Redirect to={App.Route.EMPLOYEES_LIST} />
                    
        </Switch>
        </BrowserRouter>
    </div>
    );
}

export default Application;

