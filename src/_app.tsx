import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Dashboard } from './components/dashboard/dashboard.component';
import { Recipes } from './components/recipes/recipes.component';

export const App: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/recipes" component={Recipes} />
            <Route data-test-id="redirect-route" path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}
