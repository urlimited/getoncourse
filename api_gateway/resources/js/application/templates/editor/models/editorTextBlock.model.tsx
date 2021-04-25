// @ts-ignore
import {EditorBlockModel, EditorBlockModelConfigs} from "./editorBlock.model.tsx";
// @ts-ignore
import * as React from "react";
import TextBlock from "../__textBlock/editor__textBlock";

interface EditorTextBlockModelConfigs extends EditorBlockModelConfigs {
    content: string,
    placeholder: string,
}

interface EditorTextBlockModelHandlers {
    setDropdownCommandsConfigsHandler: Function
}

/**
 * Class EditorTextBlockModel
 */
export class EditorTextBlockModel extends EditorBlockModel {
    protected _content: string;

    protected _placeholder: string = "Type '/' to start";

    protected _handlers: EditorTextBlockModelHandlers;

    public constructor(configs?: EditorTextBlockModelConfigs) {
        super(configs);

        this._content = configs?.content ?? "";

        this._placeholder = configs?.placeholder ?? "";
    }

    public render(): React.ReactElement {
        return <TextBlock
            placeholder={this._placeholder}
            setDropdownCommandsConfigsHandler={this._handlers.setDropdownCommandsConfigsHandler}
            initialContent={this._content} />
    }

    public setHandlers(handlers: EditorTextBlockModelHandlers): EditorTextBlockModel {
        this._handlers = handlers;

        return this;
    }

    get content(): string {
        return this._content;
    }

    get placeholder(): string {
        return this._placeholder;
    }
}
