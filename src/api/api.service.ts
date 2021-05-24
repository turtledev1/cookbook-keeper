import { RecipeDTO } from '../model/dto/recipeDTO';
import { Channel, ChannelResponse } from '../model/ipc/channels';
import { IpcCreateRecipeRequest, IpcRequest } from '../model/ipc/ipc-request';

const { ipcRenderer } = window.require("electron");

class ApiService {
    public loadRecipes(): Promise<{ recipes: RecipeDTO[] }> {
        const request: IpcRequest = {
            responseChannel: ChannelResponse[Channel.LoadRecipes],
        };
        return api.send<{ recipes: RecipeDTO[] }>(Channel.LoadRecipes, request);
    }

    public createRecipe(recipe: RecipeDTO): Promise<void> {
        const request: IpcCreateRecipeRequest = {
            responseChannel: ChannelResponse[Channel.CreateRecipe],
            recipe,
        };
        return api.send<void>(Channel.CreateRecipe, request);
    }

    private send<T>(channel: Channel, request: IpcRequest): Promise<T> {
        // If the ipcRenderer is not available try to initialize it
        if (!ipcRenderer) {
            throw new Error(`Unable to require renderer process`);
        }
        ipcRenderer.send(channel, request);

        return new Promise(resolve => {
            ipcRenderer.once(request.responseChannel, (event, response) => resolve(response));
        });
    }
}

export const api = new ApiService();
