import * as EditorInsertableBlockModelFile from "./editorInsertableBlock.model";
import * as React from "react";
import HeadingBlock from "../__headingBlock/editor__headingBlock";
import {EditorCommandsBlockModelConfigs} from "./editorCommandsBlock.model";

export interface EditorTextBlockModelConfigs extends EditorInsertableBlockModelFile.EditorInsertableBlockModelConfigs {
    content?: string,
    placeholder?: string,
}

/**
 * Class EditorTextBlockModel
 */
export class EditorHeadingBlockModel extends EditorInsertableBlockModelFile.EditorInsertableBlockModel {
    protected _content: string;

    protected _placeholder: string;

    public constructor(configs?: EditorTextBlockModelConfigs) {
        super(configs);

        this._content = configs?.content ?? "";

        this._key = configs?.key ?? "text-" + (+new Date());

        this._placeholder = configs?.placeholder ?? "Heading...";
    }

    public render(key: number): React.ReactElement {
        return <HeadingBlock
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
