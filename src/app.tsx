import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styles from './app.module.css';
import { CreateRecipe } from './components/create-recipe/create-recipe.component';
import { Navigation } from './components/navigation/navigation.component';
import { DashboardContainer } from './containers/dashboard/dashboard.container';

export const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Navigation></Navigation>
            <div className={styles.content}>
                <Switch>
                    <Route path="/new" component={CreateRecipe} />
                    <Route path="/" component={DashboardContainer} />
                    <Route data-test-id="redirect-route" path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
