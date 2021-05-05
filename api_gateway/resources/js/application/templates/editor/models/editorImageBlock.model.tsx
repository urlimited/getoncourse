import * as f1 from "./editorBlock.model";
import * as React from "react";
import ImageBlock from "../__imageBlock/editor__imageBlock";
import {EditorModel} from "./editor.model";

export interface EditorImageBlockModelConfigs extends f1.EditorBlockModelConfigs {
    content?: string,
    placeholder?: string,
}

/**
 * Class EditorTextBlockModel
 */
export class EditorImageBlockModel extends f1.EditorBlockModel {
    protected _content: string;

    protected _placeholder: string;

    protected _file: string;

    protected _meta: string;

    public constructor(configs?: EditorImageBlockModelConfigs) {
        super(configs);

        if(configs?.type === undefined)
            this._type = EditorModel.BLOCK_IMAGE_TYPE;

        this._key = configs?.key_id ?? configs?.key ?? "image-" + (+new Date());

        this._content = configs?.content ?? '';
    }

    public render(key: number): React.ReactElement {
        return <ImageBlock
            key={this._key}
            id={this._key}
            content={this._content}
            setHtmlElementHandler={(htmlElement: HTMLElement) => this.setHtmlElement(htmlElement)}
            deleteBlockHandler={() => this._handlers.deleteBlockHandler(this)}
            setContentToBlock={(content: string) => this.setContent(content)}
            setMetaToBlock={(meta: string) => this.setMeta(meta)}
            setFileToBlock={(fileContent: string) => this.setFile(fileContent)}
        />
    }

    public getFile(){
        return this._file;
    }

    public getMeta(): string{
        return this._meta;
    }

    protected setFile(fileContent: string): void{
        this._file = fileContent
    }

    protected setMeta(meta: string): void {
        this._meta = meta;
    }
}
