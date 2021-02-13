export class ReportType{
    constructor(data) {
        this.id = data?.id ?? 0;
        this.name = data?.name ?? "";
    }
}

export const RISK_MANAGEMENT_SYSTEM = 1;
export const INTERNAL_CONTROL_SYSTEM = 2;
export const INTERNAL_AUDIT_SERVICES = 3;
export const RISK_CULTURE_ASSESSMENT = 4;