import {EditorBlockModel} from "./editorBlock.model";
import * as React from "react";
import * as EditorCommandsBlockModelFile from "./editorCommandsBlock.model";
import * as EditorTextBlockModelFile from "./editorTextBlock.model";
import * as EditorImageBlockModelFile from "./editorImageBlock.model";

interface EditorModelConfigs {
    blocks?: Array<EditorBlockModel>,
    commandsDropdown?: EditorCommandsBlockModelFile.EditorCommandsBlockModel,
    render: Function
}

/**
 * Class EditorModel
 */
export class EditorModel {
    protected _blocks: Array<EditorBlockModel> = [];

    protected _commandsDropdown: EditorCommandsBlockModelFile.EditorCommandsBlockModel;

    protected _render: Function;

    public constructor(configs?: EditorModelConfigs) {
        this._commandsDropdown = configs?.commandsDropdown ?? new EditorCommandsBlockModelFile.EditorCommandsBlockModel();

        this._blocks = configs?.blocks
            .map(bc => bc.setHandlers({
                setDropdownCommandsConfigsHandler: (dropdownConfigs: EditorCommandsBlockModelFile.EditorCommandsBlockModelConfigs) => this.setDropdownCommandsConfigs(dropdownConfigs),
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

    public setDropdownCommandsConfigs(configs: EditorCommandsBlockModelFile.EditorCommandsBlockModelConfigs): void {
        this._commandsDropdown.setConfigs(configs);

        this._render(new EditorModel(this.getConfigs()));
    }

    public createNewBlock(command: string, selfElement: EditorBlockModel): void {
        let block: EditorBlockModel;

        switch(command){
            case 'text':
                block = new EditorTextBlockModelFile.EditorTextBlockModel({key: "text-" + (+new Date())});
                break;
            case 'image':
                block = new EditorImageBlockModelFile.EditorImageBlockModel({key: "image-" + (+new Date())});
                break;
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
