import { execSync } from "child_process";
import { IpcMainEvent } from 'electron';
import { IpcChannel } from '../ipc-channel';
import { IpcRequest } from '../ipc-request';

export class LoadRecipesChannel implements IpcChannel {
    getName(): string {
        return 'load-recipes';
    }

    handle(event: IpcMainEvent, request: IpcRequest): void {
        if (!request.responseChannel) {
            request.responseChannel = `${this.getName()}_response`;
        }
        event.sender.send(request.responseChannel, { kernel: execSync('uname -a').toString() });
    }
}