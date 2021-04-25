// @ts-ignore
import {EditorBlockModel, EditorBlockModelConfigs} from "./editorBlock.model.tsx";
// @ts-ignore
import * as React from "react";
import ImageBlock from "../__imageBlock/editor__imageBlock.jsx";

interface EditorImageBlockModelConfigs extends EditorBlockModelConfigs {
    content: string,
    placeholder: string,
    key: string
}

interface EditorImageBlockModelHandlers {
    setDropdownCommandsConfigsHandler: Function,
    createNewBlockHandler: Function
}

/**
 * Class EditorTextBlockModel
 */
export class EditorImageBlockModel extends EditorBlockModel {
    protected _content: string;

    protected _key: string;

    protected _placeholder: string;

    protected _handlers: EditorImageBlockModelHandlers;

    public constructor(configs?: EditorImageBlockModelConfigs) {
        super(configs);

        this._content = configs?.content ?? "";

        this._key = configs?.key ?? "image-" + (+new Date());

        this._placeholder = configs?.placeholder ?? "Type '/' to start";
    }

    public render(key: number): React.ReactElement {
        return <ImageBlock
            key={this._key}
        />
    }

    public setHandlers(handlers: EditorImageBlockModelHandlers): EditorImageBlockModel {
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
