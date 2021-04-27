import React from 'react';
import "./require.css";
import Editor__textInsertableBlock from "../__textInsertableBlock/editor__textInsertableBlock";

const Editor__textBlock = ({initialContent, placeholder, setDropdownCommandsConfigsHandler, createNewBlockHandler}/*{deleteHandler}*/) => {

    return (<div className="editor__text-block" >
        <Editor__textInsertableBlock
            initialContent={initialContent}
            placeholder={placeholder}
            setDropdownCommandsConfigsHandler={setDropdownCommandsConfigsHandler}
            createNewBlockHandler={createNewBlockHandler}
        />
    </div>)
}

export default Editor__textBlock
