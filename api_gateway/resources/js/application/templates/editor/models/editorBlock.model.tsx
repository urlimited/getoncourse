import * as React from "react";
import {EditorCommandsBlockModelConfigs} from "./editorCommandsBlock.model";

export interface EditorBlockModelConfigs {
    id?: number,
    key?: string
}

export interface EditorBlockModelHandlers {
    deleteBlockHandler?: Function,
    setDropdownCommandsConfigsHandler?: Function,
    createNewBlockHandler?: Function
}

/**
 * Class EditorBlockModel
 * @property eduStuffs {AbstractEduStuff[]}
 */
export abstract class EditorBlockModel {
    protected _handlers: EditorBlockModelHandlers;

    protected _key: string;

    protected constructor(configs?: EditorBlockModelConfigs) {


    }

    public setHandlers(handlers: EditorBlockModelHandlers): EditorBlockModel {
        this._handlers = this.processHandlers(handlers);

        return this;
    }

    public processHandlers(handlers: EditorBlockModelHandlers): EditorBlockModelHandlers{
        return handlers;
    }

    public abstract render(key: number): React.ReactElement;
}
