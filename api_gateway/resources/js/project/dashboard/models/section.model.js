export class Section {
    constructor(data) {
        this.id = data?.id ?? 0;
        this.name = data?.name ?? "";
        this.reportTypeId = data?.report_type_id ?? "";
        this.answeredCriteria = data?.answered ?? 0;
        this.countCriteria = data?.count === 0 ? 1 : data?.count ?? 1;
        this.score = data?.sum ?? 0;
        this.weight = data?.weight ?? 0;
    }

    isScoreMore30() {
        return this.score > this.countCriteria * 0.3;
    }

    isScoreMore70() {
        return this.score > this.countCriteria * 0.7;
    }
}