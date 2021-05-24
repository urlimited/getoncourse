import * as React from "react";
import {FormSectionModel, sectionConfigs} from "./__section/formSectionModel";
import {FormElementModel, formElementModelConfigs} from "./formElementModel";
import {FormTextFieldModel, isFormTextFieldModelConfigs} from "./__textField/formTextFieldModel";
import {FormRadioFieldModel, isFormRadioFieldModelConfigs} from "./__radioField/formRadioFieldModel";
import {FormHiddenFieldModel, isFormHiddenFieldModelConfigs} from "./__hiddenField/formHiddenFieldModel";

interface FormModelConfigs {
    sections: Array<FormSectionModel>,
    render: (value: FormModel) => void
}

interface apiSaveOnServer {
    (data: {}): void;
}

export class FormModel {
    protected _sections: Array<FormSectionModel>;

    protected _render: (value: FormModel) => void;

    public static FORM_TEXT_TYPE = 'text';
    public static FORM_RADIO_TYPE = 'radio';
    public static FORM_HIDDEN_TYPE = 'hidden';

    public constructor(configs: FormModelConfigs) {
        this._sections = configs.sections;

        this._render = configs.render;
    }

    public static build(elementConfigs: formElementModelConfigs): FormElementModel {
        switch (elementConfigs.inputType) {
            case FormModel.FORM_TEXT_TYPE:
                if (isFormTextFieldModelConfigs(elementConfigs)) {
                    return new FormTextFieldModel(elementConfigs);
                }

                throw new Error('Element configs does not provide necessary data for TextField');
            case FormModel.FORM_RADIO_TYPE:
                if (isFormRadioFieldModelConfigs(elementConfigs)) {
                    return new FormRadioFieldModel(elementConfigs);
                }

                throw new Error('Element configs does not provide necessary data for RadioField');

            case FormModel.FORM_HIDDEN_TYPE:
                if (isFormHiddenFieldModelConfigs(elementConfigs)) {
                    return new FormHiddenFieldModel(elementConfigs);
                }

                throw new Error('Element configs does not provide necessary data for RadioField');
            default:
                throw new Error('Element configs does not provide necessary data in general');
        }
    }

    public getData(): {} {
        interface resultData {
            [key: string]: string
        }

        const resultData: resultData = {}

        this._sections
            .forEach(s => {
                s.getInputs()
                    .forEach(i => {
                        const key = i.getName();

                        resultData[key] = i.getValue();
                    })
            });

        return resultData;
    }

    public getSections(){
        return this._sections;
    }

    public getConfigs(): FormModelConfigs {
        return {
            sections: this._sections,
            render: this._render
        }
    }

    public apiSaveOnServer(apiMethod: apiSaveOnServer): void {
        apiMethod(this.getData());
    }
}
