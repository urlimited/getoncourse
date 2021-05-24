import * as React from "react";
import {FormElementModel, formElementModelConfigs} from '../formElementModel';
import TextField from "./form__textField";
import {FormModel} from "../formModel";
import {ruleConfigs, RuleModel} from "./ruleModel";

export interface formTextFieldModelConfigs extends formElementModelConfigs {
    placeholder: string,

    rules?: Array<ruleConfigs>
}

export function isFormTextFieldModelConfigs(test: any): test is formTextFieldModelConfigs{
    return test.inputType === FormModel.FORM_TEXT_TYPE ;
}

export class FormTextFieldModel extends FormElementModel{
    protected _rules: Array<RuleModel>;

    constructor(configs: formTextFieldModelConfigs) {
        super(configs);

        this._rules = configs.rules?.map(r => new RuleModel(r)) ?? [];

        this._placeholder = configs.placeholder;
    }

    protected _placeholder: string;

    public render(): React.ReactElement {
        return <TextField
            setValue={(data: string) => this.setValue(data)}
            key={this._key}
            label={this._label}
            placeholder={this._placeholder}
            initialValue={this._value}
            rules={this._rules}
        />;
    }
}
