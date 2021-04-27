import * as editorBlock from "./editorBlock.model";
import * as React from "react";

export interface EditorInsertableBlockModelConfigs extends editorBlock.EditorBlockModelConfigs {
    content?: string,
    placeholder?: string,
}

export interface EditorInsertableBlockModelHandlers extends editorBlock.EditorBlockModelHandlers {
    setDropdownCommandsConfigsHandler: Function,
    createNewBlockHandler: Function
}

/**
 * Class EditorTextBlockModel
 */
export abstract class EditorInsertableBlockModel extends editorBlock.EditorBlockModel {
    protected _content: string;

    protected _placeholder: string;

    protected constructor(configs?: EditorInsertableBlockModelConfigs) {
        super(configs);

        this._content = configs?.content ?? "";

        this._placeholder = configs?.placeholder ?? "Type '/' to start";
    }

    get content(): string {
        return this._content;
    }

    get placeholder(): string {
        return this._placeholder;
    }
}
