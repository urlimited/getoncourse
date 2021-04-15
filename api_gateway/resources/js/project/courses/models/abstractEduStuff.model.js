export class AbstractEduStuff {
    constructor(data) {
        this.id = data?.id ?? 0;
        this.content = data?.content ?? "";
        this.lessonId = data?.lesson?.id ?? 0;
        this.type = data?.type ?? "";
        this.order = data?.order ?? 0;
    }



    runCommand(){
        throw new Error('Render method must be realised');
    }

    render(){
        throw new Error('Render method must be realised');
    };

    getContent(){
        return this.content;
    }

    /**
     *
     * @param content {string}
     * @return this
     */
    setContent(content){
        this.content = content

        return this;
    }
}
