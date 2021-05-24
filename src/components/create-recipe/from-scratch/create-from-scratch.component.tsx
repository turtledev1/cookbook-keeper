import React, { FC } from 'react';
import { v4 } from 'uuid';
import { RecipeDTO } from '../../../model/dto/recipeDTO';
import { Button } from '../../button/button.component';
import { Input } from '../../input/input.component';
import { SectionTitle } from '../../section-title/section-title.component';
import styles from './create-from-scratch.module.css';

export interface CreateFromScratchProps {
    createRecipe: (recipe: RecipeDTO) => void;
}

export const CreateFromScratch: FC<CreateFromScratchProps> = ({
    createRecipe,
}) => {
    const RECIPE: RecipeDTO = {
        id: v4(),
        title: 'Test de mon bouton!',
        ingredients: [`Plein d'ingrédients`],
        steps: ['Plein de shits à faire'],
        portions: 4,
        prepTime: 0.75,
        cookTime: 1.25,
        labels: [{ color: '#444444', text: 'Végé' }],
    };

    return (
        <div className={styles.container}>
            <SectionTitle title={'CRÉER UNE RECETTE'} />
            <div className={styles.content}>
                <div className={styles.topSection}>
                    <Input label={'Nom de la recette'} />
                </div>
                <div className={styles.middleSection}>
                    <Input label={'Nom de la recette'} />
                </div>
                <div className={styles.bottomSection}>
                    <Input label={'Nom de la recette'} />

                    <Button onClick={() => createRecipe(RECIPE)}>
                        {'Prévisualiser'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
