import React from "react";
import TemplateBuilder from "bem-react-constructor/src/templateBuilder";


export const Homepage = () => {
    const data = [{
        type: "section",
        isFullPage: true
    }]

    return (<>{TemplateBuilder.getInstance({
        elementsDeclarationFile: require('../templates/elementsDeclaration.json'),
        dynamicRequireFile: require('../templates/dynamicRequire.js')
    }).build(data)}</>);
}

export default Homepage;
