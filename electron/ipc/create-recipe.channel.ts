import { IpcMainEvent } from 'electron';
import { Channel } from '../../src/model/ipc/channels';
import { IpcChannel } from '../../src/model/ipc/ipc-channel';
import { IpcCreateRecipeRequest } from '../../src/model/ipc/ipc-request';
import { saveRecipe } from '../repository/recipe.repository';

export class CreateRecipeChannel implements IpcChannel {
    getName(): Channel {
        return Channel.CreateRecipe;
    }

    handle(event: IpcMainEvent, request: IpcCreateRecipeRequest): void {
        saveRecipe(request.recipe);
        event.sender.send(request.responseChannel);
    }
}