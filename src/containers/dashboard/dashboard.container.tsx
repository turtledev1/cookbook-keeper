import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadRecipes } from '../../actions/recipes/recipes.action';
import { Recipe } from '../../components/recipe/recipe.component';
import { StoreModel } from '../../model/store/store.model';
import { getRecipes, isRecipesLoading } from '../../store/selectors/recipes/recipes.selector';

export const Container: FC<ConnectedProps<typeof connector>> = ({
    isLoading,
    recipes,
    loadRecipes,
}) => {
    useEffect(() => {
        loadRecipes();
    }, [loadRecipes]);

    return (
        <>
            {
                isLoading &&
                <div>Loading...</div>
            }
            {
                !isLoading &&
                recipes.map(recipe => {
                    return (
                        <Recipe recipe={recipe} />
                    );
                })
            }
        </>
    );
}

export const mapStateToProps = (state: StoreModel) => {
    return {
        isLoading: isRecipesLoading(state),
        recipes: getRecipes(state),
    }
}

export const mapDispatchToProps = {
    loadRecipes: loadRecipes,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
export const DashboardContainer = connector(Container);
