import React, { FC } from 'react';
import { Button } from '../button/button.component';
import styles from './create-recipe.module.css';

export const CreateRecipe: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{'CRÉER UNE RECETTE'}</div>
            <div className={styles.content}>
                <Button>
                    {'Ajouter les ingrédients ->'}
                </Button>
            </div>
        </div>
    );
}
