export enum Channel {
    LoadRecipes = 'LoadRecipes',
    CreateRecipe = 'CreateRecipe',
}

const RESPONSE_SUFFIX = 'Response';

export const ChannelResponse = {
    LoadRecipes: Channel.LoadRecipes + RESPONSE_SUFFIX,
    CreateRecipe: Channel.CreateRecipe + RESPONSE_SUFFIX,
}
