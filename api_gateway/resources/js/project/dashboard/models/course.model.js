import {ReportAnswer} from "./reportAnswer";

export class Report {
    constructor(data) {
        this.id = data?.id ?? 0;
        this.name = data?.name ?? "";
        this.iconColor = {
            0: "#6D2077",
            1: "#00A3A1",
            2: "#009A44",
            3: "#EAAA00",
            4: "#BC204B"
        }[data?.report_type_id ?? 0]
        this.groupId = data?.group_id ?? 0;
        this.typeId = data?.report_type_id ?? 0;
        this.authorId = data?.author_id ?? 0;
        this.status = statuses[(data?.status_id ?? 0)];
        this.createdAt = (new Date(data?.created_at * 1000 ?? 0)).getDate() + " of " + {
                0: "Jan", 1: "Feb", 2: "Mar", 3: "Apr", 4: "May", 5: "Jun", 6: "Jul", 7: "Aug",
                8: "Sep", 9: "Oct", 10: "Nov", 11: "Dec"
            }[(new Date(data?.created_at * 1000 ?? 0)).getMonth()] + ", " +
            +(new Date(data?.created_at * 1000 ?? 0)).getFullYear();
        this.reportCriterias = data?.report_criterias ?? [];
        this.answers = data?.report_criterias?.map(a => new ReportAnswer(a)) ?? [];
        this.score = data?.sections?.map(s => ({
            ...s,
            sum: this.reportCriterias
                .filter(c => c.section_id === s.id)
                .reduce((accum, next) => accum + (next.answer === 3 ? 0 : next.answer * 0.5), 0),
        }))
            .reduce((accum, next) => accum + next.weight * next.sum /
                (this.reportCriterias.filter(c => c.section_id === next.id).length !== 0
                    ? this.reportCriterias.filter(c => c.section_id === next.id).length
                    : 1), 0) ?? 0;
        this.answeredCriteria = data?.answered ?? 0;
        this.totalCriteria = data?.count ?? 1;
        this.fulfillment = this.answeredCriteria / this.totalCriteria;
    }

    get type() {
        return {
            "0": "",
            "1": "Оценка систем управления рисками и внутреннего контроля",
            "2": "Оценка риск-культуры",
            "3": "Оценка деятельности Совета Директоров",
            "4": "Оценка службы внутреннего аудита",
            "5": "Оценка системы корпоративного управления"
        }[this.typeId];
    }

    getType() {
        return {
            "0": "",
            "1": "Оценка систем управления рисками и внутреннего контроля",
            "2": "Оценка риск-культуры",
            "3": "Оценка деятельности Совета Директоров",
            "4": "Оценка службы внутреннего аудита",
            "5": "Оценка системы корпоративного управления"
        }[this.typeId];
    }
}

const statuses = {
    "0": "not loaded",
    "1": "in process",
    "2": "reported",
    "3": "cancelled"
}