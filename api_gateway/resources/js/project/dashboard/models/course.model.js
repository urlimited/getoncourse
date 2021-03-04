export class Course {
    constructor(data) {
        this.id = data.id ?? 0;
        this.name = data.name ?? "";
        this.authorId = data.author_id ?? 0;
        this.description = data.description ?? "";
    }
}
