import { RecipeDTO } from '../../model/dto/recipeDTO';
import { createAction } from '../../store/store.common';

export const LOAD_RECIPES = 'LOAD_RECIPES';
export type LoadRecipesAction = ReturnType<typeof loadRecipes>;
export const loadRecipes = () => createAction(LOAD_RECIPES);

export const LOAD_RECIPES_COMPLETED = 'LOAD_RECIPES_COMPLETED';
export type LoadRecipesCompletedAction = ReturnType<typeof loadRecipesCompleted>;
export const loadRecipesCompleted = (recipes: RecipeDTO[]) => createAction(LOAD_RECIPES_COMPLETED, { recipes });

export const LOAD_RECIPES_ERROR = 'LOAD_RECIPES_ERROR';
export type LoadRecipesErrorAction = ReturnType<typeof loadRecipesError>;
export const loadRecipesError = (error: any) => createAction(LOAD_RECIPES_ERROR, { error });
