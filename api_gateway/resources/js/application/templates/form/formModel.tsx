import * as React from "react";
import {FormSectionModel} from "./__section/formSectionModel";
import {FormElementModel, formElementModelConfigs} from "./formElementModel";
import {FormTextFieldModel, isFormTextFieldModelConfigs} from "./__textField/formTextFieldModel";

export class FormModel {
    protected _sections: Array<FormSectionModel>;

    public static build(elementConfigs: formElementModelConfigs): FormElementModel {
        switch(elementConfigs.inputType){
            case 'text':
                if(isFormTextFieldModelConfigs(elementConfigs)){
                    return new FormTextFieldModel(elementConfigs);
                }

                throw new Error('Element configs does not provide necessary data');

        }
    }

    public getData(){

    }
}
