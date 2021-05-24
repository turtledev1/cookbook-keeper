import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { createRecipe } from '../../actions/recipe/recipe.action';
import { StoreModel } from '../../model/store/store.model';

export const Container: FC<ConnectedProps<typeof connector>> = ({
    createRecipe,
}) => {
    return (
        <>
            
        </>
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
