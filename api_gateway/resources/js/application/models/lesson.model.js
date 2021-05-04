/**
 * Class Lesson
 */
export class Lesson {
    constructor(data) {
        this.id = data?.id ?? null;
        this.name = data?.name ?? null;
        this.courseId = data?.course_id ?? null;
        this.description = data?.description ?? null;
        this.lessonBlocks = data?.lesson_blocks ?? data?.lessonBlocks ??[];
        this.files = data?.files ?? [];
    }

    isNewLesson() {
        return this.id === 0;
    }
}
