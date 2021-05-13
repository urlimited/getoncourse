import * as React from "react";
import {v4 as uuidv4} from 'uuid';

export interface formElementModelConfigs {
    inputType: string,

    key: string,

    label: string,

    name: string,

    initialValue: string
}

export function isFormElementModelConfigs(test: any): test is formElementModelConfigs {
    return 'inputType' in test;
}

export abstract class FormElementModel {
    protected _label: string;

    protected _inputType: string;

    protected _key: string;

    protected _name: string;

    protected _value: string;

    protected constructor(configs: formElementModelConfigs) {
        this._inputType = configs.inputType;

        this._name = configs.name;

        this._value = configs.initialValue;

        this._key = configs.key ?? uuidv4();

        this._label = configs.label;
    }

    public abstract render(): React.ReactElement;

    public getName(): string {
        return this._name;
    }

    public getValue(): string {
        return this._value;
    }

    public setValue(value: string): void {
        this._value = value;
    }
}
