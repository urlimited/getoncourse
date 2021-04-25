// @ts-ignore
import {EditorBlockModel, EditorBlockModelConfigs} from "./editorBlock.model.tsx";
// @ts-ignore
import * as React from "react";
// @ts-ignore
import CommandsBlock from "../__dropdownCommands/editor__dropdownCommands.jsx";
// @ts-ignore
import {EditorBlockModelHandlers} from "./editorBlock.model.tsx";

export interface EditorCommandsBlockModelConfigs extends EditorBlockModelConfigs {
    commands?: Array<string>,
    isVisible?: boolean,
    position: {
        x: number,
        y: number
    }
}

/**
 * Class EditorTextBlockModel
 */
export class EditorCommandsBlockModel extends EditorBlockModel {
    protected _handlers: EditorBlockModelHandlers;

    protected _commands: Array<string>;
    protected _isVisible: boolean;
    protected _positionX: number;
    protected _positionY: number;

    public constructor(configs?: EditorCommandsBlockModelConfigs) {
        super(configs);

        this.setConfigs(configs);
    }

    public render(): React.ReactElement {
        return this._isVisible ? <CommandsBlock
            position={{x: this._positionX, y: this._positionY}}
            commands={this._commands}
        /> : <></>
    }

    public setConfigs(configs: EditorCommandsBlockModelConfigs): void {
        this._commands = configs?.commands ?? ['text', 'header', 'image'];
        this._isVisible = configs?.isVisible ?? false;

        this._positionX = configs?.position?.x ?? 0;
        this._positionY = configs?.position?.y ?? 0;
    }
}
