import { AnyAction } from 'redux';
import { LoadRecipesCompletedAction, LOAD_RECIPES, LOAD_RECIPES_COMPLETED } from '../../../actions/recipes/recipes.action';
import { RecipesStore } from '../../../model/store/recipes-store.model';

const INITIAL_STATE: RecipesStore = {
    recipes: [],
    isLoading: false,
};

export const recipes = function (state = INITIAL_STATE, action: AnyAction): RecipesStore {
    switch (action.type) {
        case LOAD_RECIPES: {
            return {
                recipes: [],
                isLoading: true,
            }
        }
        case LOAD_RECIPES_COMPLETED: {
            const typedAction = action as LoadRecipesCompletedAction;

            return {
                recipes: typedAction.recipes,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}
