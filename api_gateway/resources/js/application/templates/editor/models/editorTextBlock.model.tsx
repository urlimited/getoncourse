// @ts-ignore
import {EditorBlockModel, EditorBlockModelConfigs} from "./editorBlock.model.tsx";
// @ts-ignore
import * as React from "react";
import TextBlock from "../__textBlock/editor__textBlock";

interface EditorTextBlockModelConfigs extends EditorBlockModelConfigs {
    content: string,
    placeholder: string,
    key: string
}

interface EditorTextBlockModelHandlers {
    setDropdownCommandsConfigsHandler: Function,
    createNewBlockHandler: Function
}

/**
 * Class EditorTextBlockModel
 */
export class EditorTextBlockModel extends EditorBlockModel {
    protected _content: string;

    protected _key: string;

    protected _placeholder: string;

    protected _handlers: EditorTextBlockModelHandlers;

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
