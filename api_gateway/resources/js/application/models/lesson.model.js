import {EduStuffText} from "./eduStuffText.model";
import {v4 as uuid} from 'uuid';

/**
 * Class Lesson
 * @property eduStuffs {AbstractEduStuff[]}
 */
export class Lesson {
    constructor(data) {
        this.id = data?.id ?? 0;
        this.name = data?.name ?? "";
        this.courseId = data?.course_id ?? 0;
        this.description = data?.description ?? "";
        this.eduStuffs = data?.eduStuffs ?? [];

        if (this.eduStuffs.length === 0)
            this.addEduStuff(new EduStuffText({
                id: uuid(),
                type: 'text',
                content: '',
                lessonId: this.id,
                order: 0
            }));
    }

    isNewLesson() {
        return this.id === 0;
    }

    getEduStuffs() {
        return this.eduStuffs
            .sort(
                /**
                 * @param a {AbstractEduStuff}
                 * @param b {AbstractEduStuff}
                 */
                (a, b) => a.order - b.order);
    }

    /**
     *
     * @param eduStuff {AbstractEduStuff}
     */
    addEduStuff(eduStuff) {
        this.eduStuffs.push(eduStuff);

        return this;
    }

    sortOrdersEduStuffs() {
        let initialOrder = 0;

        this.eduStuffs = this.eduStuffs.sort(
            /**
             * @param a {AbstractEduStuff}
             * @param b {AbstractEduStuff}
             */
            (a, b) => a.order - b.order)
            .map(e => {
                e.order = initialOrder++;
                return e;
            });

        return this;
    }

    /**
     *
     * @param eduStuff {AbstractEduStuff}
     */
    updateEduStuff(eduStuff) {
        this.eduStuffs = this.eduStuffs
            .map(e => e.id === eduStuff.id
                ? eduStuff
                : e);

        return this;
    }

    removeEduStuff(eduStuff){
        this.eduStuffs = this.eduStuffs
            .filter(e => e.id !== eduStuff.id);

        console.log(this.eduStuffs);

        return this;
    }
}
