import { RecipeDTO } from '../dto/recipeDTO';

export interface RecipesStore {
    recipes: RecipeDTO[];
    isLoading: boolean;
}
