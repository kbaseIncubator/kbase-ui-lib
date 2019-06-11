import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppConfig, AppStoreState, AppRuntime } from './store';
import { AppError } from '../store';
export declare enum ActionType {
    APP_LOAD = "app load",
    APP_LOAD_START = "app load start",
    APP_LOAD_SUCCESS = "app load success",
    APP_LOAD_ERROR = "app load error",
    APP_SEND_MESSAGE = "app/sendMessage"
}
export interface AppLoadSuccess extends Action {
    type: ActionType.APP_LOAD_SUCCESS;
    config: AppConfig;
    runtime: AppRuntime;
}
export interface AppLoadError extends Action {
    type: ActionType.APP_LOAD_ERROR;
    error: AppError;
}
export declare function appLoadSuccess(config: AppConfig, runtime: AppRuntime): AppLoadSuccess;
export declare function appLoadError(error: AppError): AppLoadError;
export declare function appStart(): (dispatch: ThunkDispatch<AppStoreState, void, Action<any>>, getState: () => AppStoreState) => void;
export interface SendMessage {
    type: ActionType.APP_SEND_MESSAGE;
    id: string;
    payload: object;
}
export declare function sendMessage(id: string, payload: object): (dispatch: ThunkDispatch<AppStoreState, void, Action<any>>, getState: () => AppStoreState) => void;
