import { RecipeDTO } from '../../model/dto/recipeDTO';
import { createAction } from '../../store/store.common';

export const CREATE_RECIPE = 'CREATE_RECIPE';
export type CreateRecipeAction = ReturnType<typeof createRecipe>;
export const createRecipe = (recipe: RecipeDTO) => createAction(CREATE_RECIPE, { recipe });
