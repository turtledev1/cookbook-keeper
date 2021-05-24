import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styles from './app.module.css';
import { Navigation } from './components/navigation/navigation.component';
import { CreateRecipeContainer } from './containers/create-recipe/create-recipe.container';
import { DashboardContainer } from './containers/dashboard/dashboard.container';

export const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Navigation></Navigation>
            <div className={styles.content}>
                <Switch>
                    <Route path="/new" component={CreateRecipeContainer} />
                    <Route path="/" component={DashboardContainer} />
                    <Route data-test-id="redirect-route" path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
