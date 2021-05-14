import * as React from "react";
import {FormElementModel, formElementModelConfigs} from '../formElementModel';
import RadioField from "./form__radioField";
import {FormModel} from "../formModel";

export interface formRadioFieldModelConfigs extends formElementModelConfigs {
    cases: Array<formRadioFieldModelCasesConfigs>
}

interface formRadioFieldModelCasesConfigs {
    caseType: "image" | "text",
    content: string
}

export function isFormRadioFieldModelConfigs(test: any): test is formRadioFieldModelConfigs{
    return test.inputType === FormModel.FORM_RADIO_TYPE ;
}

export class FormRadioFieldModel extends FormElementModel{
    public static RADIO_IMAGE_CASE_TYPE = 'image';

    public static RADIO_TEXT_CASE_TYPE = 'text';

    protected _cases: Array<formRadioFieldModelCasesConfigs>;

    constructor(configs: formRadioFieldModelConfigs) {
        super(configs);

        this._cases = configs.cases;
    }

    render(): React.ReactElement {
        return <RadioField
            key={this._key}
            setValue={(data: string) => this.setValue(data)}
            label={this._label}
            cases={this._cases}
        />;
    }
}
