import React, { FC } from 'react';
import { RecipeDTO } from '../../model/dto/recipeDTO';

export interface RecipeProps {
    recipe: RecipeDTO,
}

export const Recipe: FC<RecipeProps> = ({
    recipe
}) => {
    return (
        <>
            <div>{recipe.title}</div>
            <div>{recipe.ingredients}</div>
            <div>{recipe.steps}</div>
            <div>{recipe.prepTime}</div>
            <div>{recipe.cookTime}</div>
        </>
    );
}
