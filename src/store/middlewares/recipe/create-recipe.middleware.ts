import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { CreateRecipeAction, createRecipeCompleted, createRecipeError, CREATE_RECIPE } from '../../../actions/recipe/recipe.action';
import { api } from '../../../api/api.service';

export const createRecipeMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch) => (action: AnyAction) => {
    /* before reducer */

    next(action);

    /* after reducer */

    if (isCreateRecipeAction(action)) {
        api
            .createRecipe(action.recipe)
            .then(() => {
                store.dispatch(createRecipeCompleted());
            })
            .catch((error) => {
                store.dispatch(createRecipeError(error));
            });
    }
};

function isCreateRecipeAction(action: AnyAction): action is CreateRecipeAction {
    return action.type === CREATE_RECIPE;
}
