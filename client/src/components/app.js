import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './landing';

const App = () => (
    <div>
        <Switch>
            <Route path="/" component={Landing}/>
        </Switch>
    </div>
);

export default App;
