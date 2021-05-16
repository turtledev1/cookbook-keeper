import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { loadRecipesCompleted, loadRecipesError, LOAD_RECIPES } from '../../../actions/recipes/recipes.action';
import { api } from '../../../api/api.service';

export const loadRecipesMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    /* before reducer */

    next(action);

    /* after reducer */

    if (action.type === LOAD_RECIPES) {
        api
            .loadRecipes()
            .then(response => {
                store.dispatch(loadRecipesCompleted(response.recipes));
            })
            .catch((error) => {
                store.dispatch(loadRecipesError(error));
            });
    }
};
