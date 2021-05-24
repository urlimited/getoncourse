import validator from 'validator';

export interface ruleConfigs {
    rule: string
}

export class RuleModel {
    protected _rule: string;

    constructor(configs: ruleConfigs) {
        this._rule = configs.rule;
    }

    public validate(stringToValidate: string): boolean {
        if(this._rule === 'email')
            return validator.isEmail(stringToValidate);

        if(this._rule === 'phone')
            return validator.isMobilePhone(stringToValidate, 'kk-KZ');

        if(this._rule.substr(0, 3) === 'max')
            return validator.isLength(stringToValidate, {max: parseInt(this._rule.substr(4))});

        if(this._rule.substr(0, 3) === 'min')
            return validator.isLength(stringToValidate, {min: parseInt(this._rule.substr(4))});

        return validator.matches(stringToValidate, this._rule);
    }
}
