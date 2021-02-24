export class Criteria{
    constructor(data) {
        this.id = data?.id ?? 0;
        this.content = data?.content ?? "";
        this.halfAdvice = data?.half_advice ?? "";
        this.zeroAdvice = data?.zero_advice ?? "";
        this.reportTypeId = data?.report_type_id ?? "";
        this.sectionId = data?.section_id ?? 0;
    }
}