import React, { FC } from 'react';
import { Button } from '../../button/button.component';
import styles from './create-strategy-chooser.module.css';

export enum CreateStrategy {
    NotSelected,
    FromScratch,
    CopyFromExisting,
    ImportFromWeb,
}

export interface CreateStrategyChooserProps {
    setStrategy: (strategy: CreateStrategy) => void;
}

export const CreateStrategyChooser: FC<CreateStrategyChooserProps > = ({
    setStrategy,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <Button onClick={() => setStrategy(CreateStrategy.FromScratch)}>
                    {'À partir de rien'}
                </Button>
            </div>
            <div className={styles.button}>
                <Button onClick={() => setStrategy(CreateStrategy.CopyFromExisting)} disabled={true}>
                    {`À partir d'une recette existante`}
                </Button>
            </div>
            <div className={styles.button}>
                <Button onClick={() => setStrategy(CreateStrategy.ImportFromWeb)} disabled={true}>
                    {'Importer à partir du web'}
                </Button>
            </div>
        </div>
    );
}
