import React from "react";
import EduStuffTextComponent from "../containers/eduStuffText.comp_cont";
import {AbstractEduStuff} from "./abstractEduStuff.model";

export class EduStuffList extends AbstractEduStuff {
    /*runCommand(){
        this.getLesson().addContent(this.content);
    }*/

    render(){
        return <EduStuffTextComponent eduStuff={this} />
    }
}
