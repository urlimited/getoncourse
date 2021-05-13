import * as React from "react";
import {FormElementModel, formElementModelConfigs} from '../formElementModel';
import TextField from "./form__textField";
import {FormModel} from "../formModel";

export interface formTextFieldModelConfigs extends formElementModelConfigs {
    placeholder: string
}

export function isFormTextFieldModelConfigs(test: any): test is formTextFieldModelConfigs{
    return test.inputType === FormModel.FORM_TEXT_TYPE ;
}

export class FormTextFieldModel extends FormElementModel{
    constructor(configs: formTextFieldModelConfigs) {
        super(configs);

        this._placeholder = configs.placeholder;
    }

    protected _placeholder: string;

    render(): React.ReactElement {
        return <TextField
            setValue={(data: string) => this.setValue(data)}
            key={this._key}
            label={this._label}
            placeholder={this._placeholder}
        />;
    }
}
