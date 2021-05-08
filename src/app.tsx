import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import styles from './app.module.css';
import { CreateRecipe } from './components/create-recipe/create-recipe.component';
import { Dashboard } from './components/dashboard/dashboard.component';
import { Navigation } from './components/navigation/navigation.component';
import { Recipes } from './components/recipes/recipes.component';

export const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Navigation></Navigation>
            <div className={styles.content}>
                <Switch>
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/new" component={CreateRecipe} />
                    <Route path="/" component={Dashboard} />
                    <Route data-test-id="redirect-route" path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}
