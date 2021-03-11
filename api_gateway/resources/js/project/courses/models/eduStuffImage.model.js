import React from "react";
import EduStuffImageComponent from "../containers/eduStuffImage.comp_cont";
import {AbstractEduStuff} from "./abstractEduStuff.model";

export class EduStuffImage extends AbstractEduStuff {
    /*runCommand(){
        this.getLesson().addContent(this.content);
    }*/

    render(){
        return <EduStuffImageComponent eduStuff={this} />
    }
}
