import { LabelDTO } from './labelDTO';

export interface RecipeDTO {
    title: string;
    ingredients: string[];
    steps: string[];
    prepTime: number;
    cookTime: number;
    labels?: LabelDTO[];
}
