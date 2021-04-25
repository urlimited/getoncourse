// @ts-ignore
import {EditorBlockModel} from "./editorBlock.model.tsx";
import * as React from "react";
// @ts-ignore
import {EditorCommandsBlockModel, EditorCommandsBlockModelConfigs} from "./editorCommandsBlock.model.tsx";
// @ts-ignore
import {EditorTextBlockModel} from "./editorTextBlock.model.tsx";

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

    protected _render: Function;

    public constructor(configs?: EditorModelConfigs) {
        this._commandsDropdown = configs?.commandsDropdown ?? new EditorCommandsBlockModel();

        this._blocks = configs?.blocks
            .map(bc => bc.setHandlers({
                setDropdownCommandsConfigsHandler: (dropdownConfigs: EditorCommandsBlockModelConfigs) => this.setDropdownCommandsConfigs(dropdownConfigs),
                createNewBlockHandler: (command: string, selfElement: EditorBlockModel) => this.createNewBlock(command, selfElement),
            })) ?? [];

        this._render = configs?.render ?? (() => {});

    }

    public renderBlocks(): Array<React.ReactElement> {
        return this._blocks.map((b, k) => b.render(k));
    }

    public renderCommandsDropdown(): React.ReactElement {
        return this._commandsDropdown.render();
    }

    public setDropdownCommandsConfigs(configs: EditorCommandsBlockModelConfigs): void {
        this._commandsDropdown.setConfigs(configs);

        this._render(new EditorModel(this.getConfigs()));
    }

    public createNewBlock(command: string, selfElement: EditorBlockModel): void {
        let block: EditorBlockModel;

        switch(command){
            case 'text':
                block = new EditorTextBlockModel({key: "text-" + (+new Date())});
        }

        if(block !== undefined){
            this._blocks.splice(this._blocks.indexOf(selfElement) + 1, 0, block);

            this._render(new EditorModel(this.getConfigs()));
        }
    }

    public getConfigs(): EditorModelConfigs {
        return {
            blocks: this._blocks,
            commandsDropdown: this._commandsDropdown,
            render: this._render
        }
    }
}
