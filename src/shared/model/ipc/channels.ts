export enum Channel {
    LoadRecipes = 'LoadRecipes',
}

const RESPONSE_SUFFIX = 'Response';

export const ChannelResponse = {
    LoadRecipes: Channel.LoadRecipes + RESPONSE_SUFFIX,
}
