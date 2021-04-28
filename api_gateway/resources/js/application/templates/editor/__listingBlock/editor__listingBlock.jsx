import React from 'react';
import "./require.css";
import Editor__textInsertableBlock from "../__textInsertableBlock/editor__textInsertableBlock";

const Editor__listingBlock = ({initialContent, placeholder, setDropdownCommandsConfigsHandler, createNewBlockHandler}/*{deleteHandler}*/) => {

    return (<div className="editor__heading-block" >
        <Editor__textInsertableBlock
            initialContent={initialContent}
            placeholder={placeholder}
            setDropdownCommandsConfigsHandler={setDropdownCommandsConfigsHandler}
            createNewBlockHandler={createNewBlockHandler}
            textareaClass={"editor__listing-block-textarea"}
        />
    </div>)
}

export default Editor__listingBlock
