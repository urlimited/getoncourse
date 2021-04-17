export class Course {
    constructor(data) {
        this.id = data?.id ?? 0;
        this.name = data?.name ?? "";
        this.authorId = data?.author_id ?? data?.authorId ?? 0;
        this.description = data?.description ?? "";
        this.lessons = data?.lessons ?? [];
    }

    isNewAddedCourse(){
        return this.id === 0;
    }
}
