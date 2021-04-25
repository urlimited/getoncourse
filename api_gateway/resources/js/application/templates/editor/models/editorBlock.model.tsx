import * as React from "react";
// @ts-ignore
import {EditorTextBlockModel} from "./editorTextBlock.model.tsx";

export interface EditorBlockModelConfigs {
    id?: number
}

export interface EditorBlockModelHandlers {
    setDropdownCommandsConfigsHandler: Function,
    createNewBlockHandler: Function,
}

/**
 * Class EditorBlockModel
 */
export class EditorBlockModel {
    protected _id?: number;

    protected _handlers?: EditorBlockModelHandlers;

    protected constructor(configs?: EditorBlockModelConfigs) {
        this._id = configs?.id ?? 0;
    }

    public setHandlers(handlers: EditorBlockModelHandlers): EditorBlockModel {
        this._handlers = handlers;

        this._handlers.createNewBlockHandler = (command: string) => {

            this._handlers.createNewBlockHandler(this.identifyBlockViaCommand(command))
        }

        return this;
    }

    protected identifyBlockViaCommand(command: string): EditorBlockModel {
        switch (command.toLowerCase()){
            case 'text':
                // @ts-ignore
                return new EditorTextBlockModel();
        }
    }

    get id(): number {
        return this._id;
    }
}
