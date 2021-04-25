// @ts-ignore
import {EditorBlockModel, EditorBlockModelConfigs, EditorBlockModelHandlers} from "./editorBlock.model.tsx";
// @ts-ignore
import * as React from "react";
import TextBlock from "../__textBlock/editor__textBlock.jsx";

export interface EditorTextBlockModelConfigs extends EditorBlockModelConfigs {
    content: string,
    placeholder: string,
}

/**
 * Class EditorTextBlockModel
 */
export class EditorTextBlockModel extends EditorBlockModel {
    protected _content: string;

    protected _placeholder: string = "Type '/' to start";

    public constructor(configs?: EditorTextBlockModelConfigs) {
        super(configs ?? {});

        this._content = configs?.content ?? "";

        this._placeholder = configs?.placeholder ?? "";
    }

    public render(): React.ReactElement {
        return <TextBlock
            placeholder={this._placeholder}
            //@ts-ignore
            setDropdownCommandsConfigsHandler={this._handlers.setDropdownCommandsConfigsHandler}
            //@ts-ignore
            /*createNewBlockHandler={this._handlers.createNewBlockHandler}*/
            initialContent={this._content} />
    }

    get content(): string {
        return this._content;
    }

    get placeholder(): string {
        return this._placeholder;
    }
}
