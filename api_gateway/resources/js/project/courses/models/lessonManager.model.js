import {EduStuffText} from "./eduStuffText.model";
import {EduStuffList} from "./eduStuffList.model";
import {EduStuffImage} from "./eduStuffImage.model";
import {Lesson} from "./lesson.model";
import {v4 as uuid} from "uuid";

export class LessonManager {
    static _instance = null;

    /**
     *
     * @param lesson {Lesson}
     */
    constructor(lesson) {
        this.lesson = lesson;
    }

    /**
     * Init manager
     * @param lesson {Lesson}
     * @returns {null}
     */
    static initManager(lesson = new Lesson()){
        if(this._instance === null)
            this._instance = new this(lesson);

        return this._instance;
    }

    /**
     * Adds edu stuff object into lesson model
     * @param eduStuffCommand {string}
     * @param callerEduStuff
     * @returns {boolean}
     */
    isEduStuffAddedToLesson(eduStuffCommand, callerEduStuff){
        if(this._isCommandInContent(eduStuffCommand)){
            this.getLesson().addEduStuff(this._build({
                id: uuid(),
                type: eduStuffCommand.substring(1),
                //TODO: еще раз проверить алгоритм распределения порядкового номера
                order: callerEduStuff.order + (1 / this.getLesson().getEduStuffs().length),
                lessonId: this.getLesson.id
            }));

            this.getLesson().sortOrdersEduStuffs();

            return true;
        }

        return false;
    }

    getLesson(){
        return this.lesson;
    }

    setLesson(lesson){
        this.lesson = lesson;

        return this;
    }

    /**
     * @param command {string}
     */
    _isCommandInContent(command){
        return command[0] === '/'
            && this._getCommandTypes().includes(command.substring(1));
    }


    /**
     *
     * @param data {Object}
     * @returns {AbstractEduStuff}
     */
    _build(data){
        switch(data.type){
            case 'text':
                return new EduStuffText(data);
            case 'list':
                return new EduStuffList(data);
            case 'image':
                return new EduStuffImage(data);
        }
    }

    /**
     *
     * @returns {Array<string>}
     */
    _getCommandTypes(){
        return [
            'text',
            'list',
            'image'
        ];
    }
}
