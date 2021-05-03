import React, { FC, useState } from 'react';
import { api } from '../../api/api.service';
import { RecipeDTO } from '../../shared/model/dto/recipeDTO';

export const Dashboard: FC = () => {
    const [recipes, setValue] = useState([] as RecipeDTO[]);

    const onClick = async () => {
        const response = await api.loadRecipes();
        setValue(response.recipes);
    };

    return (
        <>
            <div>Dashboard</div>
            <button onClick={onClick}>Test</button>
            {
                recipes.map(recipe => {
                    return (
                        <>
                            {recipe.title}
                            {recipe.ingredients}
                            {recipe.steps}
                            {recipe.prepTime}
                            {recipe.cookTime}
                        </>
                    );
                })
            }
        </>
    );
}
