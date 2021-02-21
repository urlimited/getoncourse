export class Arrangement{
    constructor(data) {
        this.id = data?.id ?? 0;
        this.description = data?.description ?? "";
        this.name = data?.name ?? "";
        this.deadline = data?.deadline ?? 0;
        this.criteriaId = data?.report_criteria_id ?? 0;
        this.isDone = data?.is_done ?? false;
        this.reportId = data?.report_id ?? 0;
    }
}