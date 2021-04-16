import { Action } from 'redux';

export const INIT = '@@INIT';
export type InitAction = ReturnType<typeof initAction>;
export const initAction = () => createAction(INIT);

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): Action<T> & P;
export function createAction<T extends string>(type: T, payload: Record<string, unknown> = {}): Action<T> {
    return { type, ...payload };
}
