import * as React from "react";
import {v4 as uuidv4} from 'uuid';

export interface formElementModelConfigs {
    inputType: string,

    key: string,

    label: string
}

export function isFormElementModelConfigs(test: any): test is formElementModelConfigs{
    return 'inputType' in test;
}

export abstract class FormElementModel {
    protected _label: string;

    protected _inputType: string;

    protected  _key: string;

    protected constructor(configs: formElementModelConfigs) {
        this._inputType = configs.inputType;

        this._key = configs.key ?? uuidv4();

        this._label = configs.label;
    }

    public abstract render(): React.ReactElement;
}
