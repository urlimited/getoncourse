import * as React from "react";
import {FormElementModel, formElementModelConfigs} from "../formElementModel";
import {FormModel} from "../formModel";
import {v4 as uuid4} from "uuid";
import FormSection from "./form__section";

interface sectionConfigs {
    sectionLabel: string,
    sectionItems: Array<formElementModelConfigs>,
}

export class FormSectionModel {
    protected _inputs: Array<FormElementModel>;

    protected _label: string;

    protected  _key: string;

    public constructor(configs: sectionConfigs) {
        this._label = configs.sectionLabel;

        this._key = uuid4();

        this._inputs = configs.sectionItems
            .map(conf => FormModel.build(conf));
    }

    public render() {
        return <FormSection
            key={this._key}
            label={this._label}
            inputs={this._inputs}
        />
    }

    /*public build(elementConfigs: {
        inputType: string,
        label: string,
        initialValue?: string,
        placeholder: string
    }): React.ReactElement {
        switch(elementConfigs.inputType){
            case 'text':
                return <TextField
                    key={'text'}
                    label={elementConfigs.label}
                    placeholder={elementConfigs.placeholder}
                />;
        }
    }*/
}
