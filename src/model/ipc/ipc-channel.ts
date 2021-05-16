import { IpcMainEvent } from 'electron';
import { Channel } from './channels';
import { IpcRequest } from './ipc-request';

export interface IpcChannel {
    getName(): Channel;

    handle(event: IpcMainEvent, request: IpcRequest): void;
}
