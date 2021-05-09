import * as React from "react";
import {FormSectionModel} from "./__section/formSectionModel";
import {FormElementModel, formElementModelConfigs} from "./formElementModel";
import {FormTextFieldModel, isFormTextFieldModelConfigs} from "./__textField/formTextFieldModel";
import {FormRadioFieldModel, isFormRadioFieldModelConfigs} from "./__radioField/formRadioFieldModel";

export class FormModel {
    protected _sections: Array<FormSectionModel>;

    public static FORM_TEXT_TYPE = 'text';
    public static FORM_RADIO_TYPE = 'radio';

    public static build(elementConfigs: formElementModelConfigs): FormElementModel {
        switch(elementConfigs.inputType){
            case FormModel.FORM_TEXT_TYPE:
                if(isFormTextFieldModelConfigs(elementConfigs)){
                    return new FormTextFieldModel(elementConfigs);
                }

                throw new Error('Element configs does not provide necessary data for TextField');
            case FormModel.FORM_RADIO_TYPE:
                if(isFormRadioFieldModelConfigs(elementConfigs)){
                    return new FormRadioFieldModel(elementConfigs);
                }

                throw new Error('Element configs does not provide necessary data for RadioField');
            default:
                throw new Error('Element configs does not provide necessary data in general');
        }
    }

    public getData(){

    }
}
