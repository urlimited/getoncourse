import * as EditorInsertableBlockModelFile from "./editorInsertableBlock.model";
import * as React from "react";
import TextBlock from "../__textBlock/editor__textBlock";

export interface EditorTextBlockModelConfigs extends EditorInsertableBlockModelFile.EditorInsertableBlockModelConfigs {
    content?: string,
    placeholder?: string,
}

/**
 * Class EditorTextBlockModel
 */
export class EditorTextBlockModel extends EditorInsertableBlockModelFile.EditorInsertableBlockModel {
    protected _content: string;

    protected _placeholder: string;

    public constructor(configs?: EditorTextBlockModelConfigs) {
        super(configs);

        this._content = configs?.content ?? "";

        this._key = configs?.key ?? "text-" + (+new Date());

        this._placeholder = configs?.placeholder ?? "Type '/' to start";
    }

    public render(key: number): React.ReactElement {
        return <TextBlock
            key={this._key}
            placeholder={this._placeholder}
            setDropdownCommandsConfigsHandler={this._handlers.setDropdownCommandsConfigsHandler}
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
