import { LabelDTO } from './labelDTO';

export interface RecipeDTO {
    title: string;
    ingredients: string[];
    steps: string[];
    portions: number;
    prepTime: number;
    cookTime: number;
    labels?: LabelDTO[];
}
