// @ts-ignore
import {EditorBlockModel} from "./editorBlock.model.tsx";
import * as React from "react";
// @ts-ignore
import {EditorCommandsBlockModel, EditorCommandsBlockModelConfigs} from "./editorCommandsBlock.model.tsx";

interface EditorModelConfigs {
    blocks?: Array<EditorBlockModel>,
    commandsDropdown?: EditorCommandsBlockModel,
    render: Function
}

/**
 * Class EditorModel
 */
export class EditorModel {
    protected _blocks: Array<EditorBlockModel> = [];

    protected _commandsDropdown: EditorCommandsBlockModel;

    protected _render: {
        currentValue?: number,
        handler?: Function
    };

    public constructor(configs?: EditorModelConfigs) {
        this._commandsDropdown = configs?.commandsDropdown ?? new EditorCommandsBlockModel();

        this._blocks = configs?.blocks
            .map(bc => bc.setHandlers({
                setDropdownCommandsConfigsHandler: (configs: EditorCommandsBlockModelConfigs) => this.setDropdownCommandsConfigs(configs)
            })) ?? [];

        this._render = {
            handler: configs?.render ?? (() => {}),
            currentValue: 0
        };

    }

    public renderBlocks(): Array<React.ReactElement> {
        return this._blocks.map(b => b.render());
    }

    public renderCommandsDropdown(): React.ReactElement {
        return this._commandsDropdown.render();
    }

    public setDropdownCommandsConfigs(configs: EditorCommandsBlockModelConfigs): void {
        this._commandsDropdown.setConfigs(configs);

        this.render();
    }

    public createNewBlock(block: EditorBlockModel): void {
        this._blocks.push(block);

        this.render();
    }

    public render(){
        this._render.handler(++this._render.currentValue);
    }
}
