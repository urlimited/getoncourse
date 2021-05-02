import * as EditorBlockModelFile from "./editorBlock.model";
import * as React from "react";
import ImageBlock from "../__imageBlock/editor__imageBlock";
import {EditorModel} from "./editor.model";

export interface EditorImageBlockModelConfigs extends EditorBlockModelFile.EditorBlockModelConfigs {
    content?: string,
    placeholder?: string,
}

/**
 * Class EditorTextBlockModel
 */
export class EditorImageBlockModel extends EditorBlockModelFile.EditorBlockModel {
    protected _content: string;

    protected _placeholder: string;

    public constructor(configs?: EditorImageBlockModelConfigs) {
        super(configs);

        if(configs?.type === undefined)
            this._type = EditorModel.BLOCK_IMAGE_TYPE;

        this._key = configs?.key ?? "image-" + (+new Date());
    }

    public render(key: number): React.ReactElement {
        return <ImageBlock
            key={this._key}
            id={this._key}
            setHtmlElementHandler={(htmlElement: HTMLElement) => this.setHtmlElement(htmlElement)}
            deleteBlockHandler={() => this._handlers.deleteBlockHandler(this)}
            setContentToBlock={(content: string) => this.setContent(content)}
        />
    }
}
