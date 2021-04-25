import { IpcMainEvent } from 'electron';
import { Channel } from '../../src/shared/model/ipc/channels';
import { IpcChannel } from '../../src/shared/model/ipc/ipc-channel';
import { IpcRequest } from '../../src/shared/model/ipc/ipc-request';

const RECIPE_TEST = {
    "title": "Première recette",
    "ingredients": ["1/2 tasse de truc", "Lots of other things"],
    "steps": ["Coupe toute", "Cuit toute"],
    "prepTime": 0.5,
    "cookTime": 1,
    "labels": [
        {
            "text": "végé",
            "color": "#000000"
        }
    ]
};

export class LoadRecipesChannel implements IpcChannel {
    getName(): Channel {
        return Channel.LoadRecipes;
    }

    handle(event: IpcMainEvent, request: IpcRequest): void {
        console.log(request);
        event.sender.send(request.responseChannel, { recipes: [RECIPE_TEST, RECIPE_TEST] });
    }
}