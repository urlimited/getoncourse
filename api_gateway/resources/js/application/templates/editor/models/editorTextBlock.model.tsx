import * as EditorInsertableBlockModelFile from "./editorInsertableBlock.model";
import * as React from "react";
import TextBlock from "../__textBlock/editor__textBlock";
import {EditorCommandsBlockModelConfigs} from "./editorCommandsBlock.model";
import {ReactElement} from "react";

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

    public render(key: number): ReactElement {
        return <TextBlock
            key={this._key}
            placeholder={this._placeholder}
            setDropdownCommandsConfigsHandler={(configs: EditorCommandsBlockModelConfigs) =>
                this._handlers.setDropdownCommandsConfigsHandler({
                    ...configs,
                    callerBlock: this
                })}
            createNewBlockHandler={(command: string) => this._handlers.createNewBlockHandler(command, this)}
            deleteBlockHandler={() => this._handlers.deleteBlockHandler(this)}
            setHtmlElementHandler={(htmlElement: HTMLElement) => this.setHtmlElement(htmlElement)}
            initialContent={this._content}
            afterRenderingCallback={this._afterRenderingCallback}
        />
    }

    get content(): string {
        return this._content;
    }

    get placeholder(): string {
        return this._placeholder;
    }
}
