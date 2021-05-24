import { RecipeDTO } from '../../model/dto/recipeDTO';
import { createAction } from '../../store/store.common';

export const CREATE_RECIPE = 'CREATE_RECIPE';
export type CreateRecipeAction = ReturnType<typeof createRecipe>;
export const createRecipe = (recipe: RecipeDTO) => createAction(CREATE_RECIPE, { recipe });

export const CREATE_RECIPE_COMPLETED = 'CREATE_RECIPE_COMPLETED';
export type CreateRecipeCompletedAction = ReturnType<typeof createRecipeCompleted>;
export const createRecipeCompleted = () => createAction(CREATE_RECIPE_COMPLETED);

export const CREATE_RECIPE_ERROR = 'CREATE_RECIPE_ERROR';
export type CreateRecipeErrorAction = ReturnType<typeof createRecipeError>;
export const createRecipeError = (error: any) => createAction(CREATE_RECIPE_ERROR, { error });
