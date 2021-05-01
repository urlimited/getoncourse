import React from 'react';
import "./require.css";
import Editor__textInsertableBlock from "../__textInsertableBlock/editor__textInsertableBlock";

const Editor__textBlock = ({initialContent, placeholder, setHtmlElementHandler, afterRenderingCallback, setContentToBlock,
                               setDropdownCommandsConfigsHandler, createNewBlockHandler, deleteBlockHandler}) => {

    return (<div className="editor__text-block" >
        <Editor__textInsertableBlock
            initialContent={initialContent}
            placeholder={placeholder}
            setDropdownCommandsConfigsHandler={setDropdownCommandsConfigsHandler}
            createNewBlockHandler={createNewBlockHandler}
            deleteBlockHandler={deleteBlockHandler}
            setHtmlElementHandler={setHtmlElementHandler}
            afterRenderingCallback={afterRenderingCallback}
            setContentToBlock={setContentToBlock}
        />
    </div>)
}

export default Editor__textBlock
