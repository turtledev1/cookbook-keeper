import { createSelector } from 'reselect';
import { StoreModel } from '../../../model/store/store.model';

const recipes = (state: Pick<StoreModel, 'recipes'>) => state.recipes;

export const isRecipesLoading = createSelector(
    recipes,
    (recipesStore) => {
        return recipesStore.isLoading;
    }
);

export const getRecipes = createSelector(
    recipes,
    (recipesStore) => {
        return recipesStore.recipes;
    }
);
