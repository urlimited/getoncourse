import * as EditorInsertableBlockModelFile from "./editorInsertableBlock.model";
import * as React from "react";
import ListingBlock from "../__listingBlock/editor__listingBlock";
import {EditorCommandsBlockModelConfigs} from "./editorCommandsBlock.model";

export interface EditorTextBlockModelConfigs extends EditorInsertableBlockModelFile.EditorInsertableBlockModelConfigs {
    content?: string,
    placeholder?: string,
}

/**
 * Class EditorTextBlockModel
 */
export class EditorListingBlockModel extends EditorInsertableBlockModelFile.EditorInsertableBlockModel {
    protected _content: string;

    protected _placeholder: string;

    public constructor(configs?: EditorTextBlockModelConfigs) {
        super(configs);

        if(configs?.type === undefined)
            this._type = 'list';

        this._content = configs?.content ?? "";

        this._key = configs?.key ?? "list-" + (+new Date());

        this._placeholder = configs?.placeholder ?? "List...";
    }

    public render(key: number): React.ReactElement {
        return <ListingBlock
            key={this._key}
            placeholder={this._placeholder}
            setDropdownCommandsConfigsHandler={(configs: EditorCommandsBlockModelConfigs) =>
                this._handlers.setDropdownCommandsConfigsHandler({
                    ...configs,
                    callerBlock: this
                })}
            createNewBlockHandler={(command: string) => this._handlers.createNewBlockHandler(command, this)}
            initialContent={this._content} />
    }

    get content(): string {
        return this._content;
    }

    get placeholder(): string {
        return this._placeholder;
    }
}
