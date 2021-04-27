import * as React from "react";

export interface EditorBlockModelConfigs {
    id?: number,
    key?: string
}

interface EditorBlockModelHandlers {
    setDropdownCommandsConfigsHandler: Function,
    createNewBlockHandler: Function
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
        this._handlers = handlers;

        return this;
    }

    public abstract render(key: number): React.ReactElement;
}
