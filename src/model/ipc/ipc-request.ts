import { RecipeDTO } from '../dto/recipeDTO';

export interface IpcRequest {
    responseChannel: string;
}

export interface IpcCreateRecipeRequest extends IpcRequest {
    recipe: RecipeDTO;
}
