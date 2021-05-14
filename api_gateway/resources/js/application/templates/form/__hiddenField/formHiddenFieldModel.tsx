import * as React from "react";
import {FormElementModel, formElementModelConfigs} from '../formElementModel';
import HiddenField from "./form__hiddenField";
import {FormModel} from "../formModel";

export interface formHiddenFieldModelConfigs extends formElementModelConfigs{
    initialValue: string
}

export function isFormHiddenFieldModelConfigs(test: any): test is formHiddenFieldModelConfigs{
    return test.inputType === FormModel.FORM_HIDDEN_TYPE ;
}

export class FormHiddenFieldModel extends FormElementModel{
    public constructor(configs: formHiddenFieldModelConfigs) {
        super(configs);
    }

    render(): React.ReactElement {
        return <HiddenField
            key={this._key}
            value={this._value}
        />;
    }
}
