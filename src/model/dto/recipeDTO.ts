import { LabelDTO } from './labelDTO';

export interface RecipeDTO {
    id: string;
    title: string;
    ingredients: string[];
    steps: string[];
    portions: number;
    prepTime: number;
    cookTime: number;
    labels?: LabelDTO[];
}
