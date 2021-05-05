import * as React from "react";
import {EditorModel} from "./editor.model";
import {fromString} from "uuidv4";
import {EditorImageBlockModel} from "./editorImageBlock.model";

export interface EditorBlockModelConfigs {
    id?: number,
    key?: string,
    type?: number,
    key_id?: string,
    content?: string
}

export interface EditorBlockModelHandlers {
    deleteBlockHandler?: Function,
    setDropdownCommandsConfigsHandler?: Function,
    createNewBlockHandler?: Function
}

/**
 * Class EditorBlockModel
 * @property eduStuffs {AbstractEduStuff[]}
 */
export abstract class EditorBlockModel {
    protected _handlers: EditorBlockModelHandlers;

    protected _id: string;

    protected _key: string;

    protected _type: number;

    protected _content: string;

    protected _htmlElement: HTMLElement;

    protected _afterRenderingCallback: Function;

    protected constructor(configs?: EditorBlockModelConfigs) {
        this._id = configs?.key ?? configs?.key_id ?? null;
        this._key = configs?.key_id ?? configs?.key ?? null;
        this._type = configs?.type ?? null;
        this._content = configs?.content ?? '';
    }

    public setHandlers(handlers: EditorBlockModelHandlers): EditorBlockModel {
        this._handlers = this.processHandlers(handlers);

        return this;
    }

    public processHandlers(handlers: EditorBlockModelHandlers): EditorBlockModelHandlers {
        return handlers;
    }

    public setHtmlElement(htmlElement: HTMLElement) {
        this._htmlElement = htmlElement;
    }

    public getHtmlElement() {
        return this._htmlElement;
    }

    public setAfterRenderingCallback(callback: Function) {
        this._afterRenderingCallback = callback;
    }

    public setContent(content: string): void {
        this._content = content;
    }

    public getData(): {
        key_id: string,
        content: string,
        type: number,
        meta?: string
    } {
        let result: {
            key_id: string,
            content: string,
            type: number,
            meta?: string
        } = {
            key_id: fromString(this._id + EditorModel.editorSalt),
            content: this._content,
            type: this._type
        };

        if(this._type === EditorModel.BLOCK_IMAGE_TYPE)
            { // @ts-ignore
                result.meta = this.getMeta();
            }

        return result;
    }

    public getType(): number {
        return this._type;
    }

    public abstract render(key: number, callback?: Function): React.ReactElement;
}
