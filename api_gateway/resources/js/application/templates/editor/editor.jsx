import React, {useState, useEffect} from 'react'
import {EditorModel} from "./models/editor.model.tsx";
import {EditorTextBlockModel} from "./models/editorTextBlock.model.tsx";

const Editor = ({blocksLoaded}) => {
    const [editor, setEditor] = useState(new EditorModel({
        blocks: [
            new EditorTextBlockModel()
        ],
        render: (value) => setEditor(value)
    }));

    return (<>
        <h3>Editor</h3>
        <div className="editorArea">{editor.renderBlocks()}</div>
        {editor.renderCommandsDropdown()}
    </>);
}

export default Editor
