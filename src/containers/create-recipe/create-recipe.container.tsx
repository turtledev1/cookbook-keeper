import React, { FC, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createRecipe } from '../../actions/recipe/recipe.action';
import { CreateFromScratch } from '../../components/create-recipe/from-scratch/create-from-scratch.component';
import { CreateStrategy, CreateStrategyChooser } from '../../components/create-recipe/strategy-chooser/create-strategy-chooser.component';
import { StoreModel } from '../../model/store/store.model';

export const Container: FC<ConnectedProps<typeof connector>> = ({
    createRecipe,
}) => {
    const [strategy, setStrategy] = useState(CreateStrategy.NotSelected);

    switch (strategy) {
        case CreateStrategy.NotSelected: {
            return (
                <CreateStrategyChooser setStrategy={setStrategy}/>
            );
        }
        case CreateStrategy.FromScratch: {
            return (
                <CreateFromScratch createRecipe={createRecipe} />
            );
        }
    }
    

    return (
        <div>hihi</div>
    );
}

export const mapStateToProps = (state: StoreModel) => {
    return {
    }
}

export const mapDispatchToProps = {
    createRecipe: createRecipe,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export const CreateRecipeContainer = connector(Container);
