import React, { FC } from 'react';
import { RecipeDTO } from '../../model/dto/recipeDTO';
import styles from './recipe.module.css';

export interface RecipeProps {
    recipe: RecipeDTO,
}

export const Recipe: FC<RecipeProps> = ({
    recipe
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{recipe.title}</div>
            <div>
                {'Ingrédients'}
                <ul>
                    {
                        recipe.ingredients.map(ingredient => {
                            return (
                                <li>{ingredient}</li>
                            );
                        })
                    }
                </ul>
            </div>
            <div>
                {'Étapes'}
                <ul>
                    {
                        recipe.steps.map(steps => {
                            return (
                                <li>{steps}</li>
                            );
                        })
                    }
                </ul>
            </div>
            <div>{`Temps de préparation: ${recipe.prepTime}`}</div>
            <div>{`Temps de cuisson: ${recipe.cookTime}`}</div>
        </div>
    );
}
