import {EditorBlockModel} from "./editorBlock.model";
import * as f1 from "./editorCommandsBlock.model";
import * as f2 from "./editorTextBlock.model";
import * as f3 from "./editorImageBlock.model";
import * as f4 from "./editorHeadingBlock.model";
import * as f5 from "./editorListingBlock.model";
import {EditorInsertableBlockModel} from "./editorInsertableBlock.model";
import {EditorTextBlockModel} from "./editorTextBlock.model";
import {EditorCommandsBlockModel} from "./editorCommandsBlock.model";

interface EditorModelConfigs {
    blocks?: Array<EditorBlockModel>,
    commandsDropdown?: f1.EditorCommandsBlockModel,
    render: Function
}

/**
 * Class EditorModel
 */
export class EditorModel {
    protected _blocks: Array<EditorBlockModel> = [];

    protected _commandsDropdown: f1.EditorCommandsBlockModel;

    protected _render: Function;

    public constructor(configs?: EditorModelConfigs) {
        this._commandsDropdown = configs?.commandsDropdown ?? new f1.EditorCommandsBlockModel();

        this._blocks = configs?.blocks
            .map(bc => this.setHandlersToBlock(bc)) ?? [];

        this._commandsDropdown.setHandlers({
            createNewBlockHandler: (command: string, selfElement: EditorBlockModel) => this.createNewBlock(command, selfElement)
        });

        this._render = configs?.render ?? (() => {
        });

    }

    public renderBlocks(): Array<React.ReactElement> {
        if (!(this._blocks[(this._blocks.length - 1)] instanceof EditorInsertableBlockModel))
            this._blocks.push(this.setHandlersToBlock(new EditorTextBlockModel()));

        if (!(this._blocks[0] instanceof EditorInsertableBlockModel))
            this._blocks.splice(0, 0, this.setHandlersToBlock(new EditorTextBlockModel()))

        return this._blocks.map((b, k) => b.render(k));
    }

    public renderCommandsDropdown(): React.ReactElement {
        return this._commandsDropdown.render();
    }

    public setDropdownCommandsConfigs(configs: f1.EditorCommandsBlockModelConfigs): void {
        this._commandsDropdown.setConfigs(configs);

        this._render(new EditorModel(this.getConfigs()));
    }

    public createNewBlock(command: string, selfElement: EditorBlockModel): void {
        let block: EditorBlockModel;

        switch (command) {
            case 'text':
                block = new f2.EditorTextBlockModel({key: "text-" + (+new Date())});
                break;
            case 'image':
                block = new f3.EditorImageBlockModel({key: "image-" + (+new Date())});
                break;
            case 'heading':
                block = new f4.EditorHeadingBlockModel({key: "heading-" + (+new Date())});
                break;
            case 'list':
                block = new f5.EditorListingBlockModel({key: "listing-" + (+new Date())});
                break;
        }

        if (block !== undefined) {
            this._blocks.splice(this._blocks.indexOf(selfElement) + 1, 0, block);

            if(block instanceof EditorInsertableBlockModel)
                block.setAfterRenderingCallback(() => {
                    block.getHtmlElement().focus();
                });

            this._render(new EditorModel(this.getConfigs()));
        }
    }

    /**
     * Deletes element and focuses on the last textInsertable element
     * @param block
     */
    public deleteBlock(block: EditorBlockModel) {
        let blockIndex = this._blocks.indexOf(block);

        this._blocks.splice(blockIndex, 1);

        let currentBlock = this._blocks[--blockIndex];

        while(!(currentBlock instanceof EditorInsertableBlockModel)){
            if(blockIndex <= 0)
                break;

            currentBlock = this._blocks[--blockIndex];
        }

        if(currentBlock instanceof EditorInsertableBlockModel)
            currentBlock.getHtmlElement().focus();

        this._render(new EditorModel(this.getConfigs()));
    }

    public getConfigs(): EditorModelConfigs {
        return {
            blocks: this._blocks,
            commandsDropdown: this._commandsDropdown,
            render: this._render
        }
    }

    protected setHandlersToBlock(block: EditorBlockModel) {
        if (block instanceof EditorCommandsBlockModel)
            return block.setHandlers({
                createNewBlockHandler: (command: string, selfElement: EditorBlockModel) => this.createNewBlock(command, selfElement),
                deleteBlockHandler: (block: EditorBlockModel) => this.deleteBlock(block)
            })

        return block.setHandlers({
            setDropdownCommandsConfigsHandler: (dropdownConfigs: f1.EditorCommandsBlockModelConfigs) => this.setDropdownCommandsConfigs(dropdownConfigs),
            createNewBlockHandler: (command: string, selfElement: EditorBlockModel) => this.createNewBlock(command, selfElement),
            deleteBlockHandler: (block: EditorBlockModel) => this.deleteBlock(block)
        })
    }
}
