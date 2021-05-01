/**
 * Class Lesson
 */
export class Lesson {
    constructor(data) {
        this.id = data?.id ?? 0;
        this.name = data?.name ?? "";
        this.courseId = data?.course_id ?? 0;
        this.description = data?.description ?? "";
        this.lessonBlocks = data?.lesson_blocks ?? [];
    }

    isNewLesson() {
        return this.id === 0;
    }
}
