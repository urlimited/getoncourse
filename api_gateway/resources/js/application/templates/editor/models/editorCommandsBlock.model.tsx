import * as f1 from "./editorBlock.model";
import * as React from "react";
import CommandsBlock from "../__dropdownCommands/editor__dropdownCommands.jsx";
import {EditorBlockModel} from "./editorBlock.model";

export interface EditorCommandsBlockModelConfigs extends f1.EditorBlockModelConfigs {
    commands?: Array<{
        label: string,
        command: string
    }>,
    isVisible?: boolean,
    position?: {
        x: number,
        y: number
    },
    callerBlock: EditorBlockModel | null,
    clearCommandHandler: Function
}

/**
 * Class EditorTextBlockModel
 */
export class EditorCommandsBlockModel extends f1.EditorBlockModel {
    protected _commands: Array<{
        label: string,
        command: string
    }>;
    protected _isVisible: boolean;
    protected _positionX: number;
    protected _positionY: number;

    protected _clearCommandHandler: Function;

    protected _callerBlock: EditorBlockModel;

    public constructor(configs?: EditorCommandsBlockModelConfigs) {
        super(configs);

        this.setConfigs(configs);
    }

    public render(): React.ReactElement {
        return <CommandsBlock
            initIsVisible={this._isVisible}
            initPosition={{x: this._positionX, y: this._positionY}}
            initCommands={this._commands}
            createNewBlockHandler={(command: string) => this._handlers.createNewBlockHandler(command, this._callerBlock)}
            clearCommandHandler={() => this._clearCommandHandler()}
        />
    }

    public setConfigs(configs?: EditorCommandsBlockModelConfigs): void {
        this._commands = configs?.commands ?? [
            {
                label: 'text field',
                command: 'text'
            },
            {
                label: 'header',
                command: 'heading'
            },
            {
                label: 'image',
                command: 'image'
            }];

        this._isVisible = configs?.isVisible ?? false;

        this._callerBlock = configs?.callerBlock;

        this._positionX = configs?.position?.x ?? 0;
        this._positionY = configs?.position?.y ?? 0;

        this._clearCommandHandler = configs?.clearCommandHandler ?? (() => {});
    }
}
