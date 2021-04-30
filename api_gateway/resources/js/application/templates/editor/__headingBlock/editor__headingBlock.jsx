import React from 'react';
import "./require.css";
import Editor__textInsertableBlock from "../__textInsertableBlock/editor__textInsertableBlock";

const Editor__headingBlock = ({initialContent, placeholder, afterRenderingCallback,
                                  setHtmlElementHandler, setDropdownCommandsConfigsHandler, createNewBlockHandler,
                                  deleteBlockHandler}) => {

    return (<div className="editor__heading-block" >
        <Editor__textInsertableBlock
            initialContent={initialContent}
            placeholder={placeholder}
            setDropdownCommandsConfigsHandler={setDropdownCommandsConfigsHandler}
            createNewBlockHandler={createNewBlockHandler}
            deleteBlockHandler={deleteBlockHandler}
            setHtmlElementHandler={setHtmlElementHandler}
            textareaClass={"editor__heading-block-textarea"}
            afterRenderingCallback={afterRenderingCallback}
        />
    </div>)
}

export default Editor__headingBlock
