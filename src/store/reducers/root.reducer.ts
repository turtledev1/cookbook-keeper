import { combineReducers } from 'redux';
import { StoreModel } from '../../model/store/store.model';
import { recipes } from './recipes/recipes.reducer';

export const rootReducer = combineReducers<StoreModel>({
    recipes,
});
