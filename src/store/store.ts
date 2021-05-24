import { applyMiddleware, compose, createStore } from 'redux';
import { createRecipeMiddleware } from './middlewares/recipe/create-recipe.middleware';
import { loadRecipesMiddleware } from './middlewares/recipes/load-recipes.middleware';
import { rootReducer } from './reducers/root.reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = applyMiddleware(
    loadRecipesMiddleware,
    createRecipeMiddleware,
);

export const store = createStore(rootReducer, {}, composeEnhancers(enhancers));
