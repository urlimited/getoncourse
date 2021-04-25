import * as React from "react";

export interface EditorBlockModelConfigs {
    id: number
}

/**
 * Class EditorBlockModel
 * @property eduStuffs {AbstractEduStuff[]}
 */
export abstract class EditorBlockModel {
    protected _id: number;

    protected constructor(configs?: EditorBlockModelConfigs) {
        this._id = configs?.id ?? 0;
    }

    public abstract render(key: number): React.ReactElement;

    get id(): number {
        return this._id;
    }
}
