export class ReportAnswer {
    constructor(data) {
        this.id = data?.id ?? 0;
        this.criteriaId = data?.criteria_id ?? 0;
        this.answer = {
            0: CRITERIA_ANSWER_ZERO,
            1: CRITERIA_ANSWER_HALF,
            2: CRITERIA_ANSWER_FULL,
            3: CRITERIA_ANSWER_UNDEFINED
        }[data?.answer] ?? CRITERIA_ANSWER_UNDEFINED;
        this.comment = data?.comment ?? "";
        this.advice = data?.advice ?? "";
        this.content = data?.content ?? "";
        this.sectionId = data?.section_id ?? 0;
        this.hint = data?.hint ?? "";
    }
}

export const CRITERIA_ANSWER_UNDEFINED = "not_answered";
export const CRITERIA_ANSWER_ZERO = "zero";
export const CRITERIA_ANSWER_HALF = "half";
export const CRITERIA_ANSWER_FULL = "full";