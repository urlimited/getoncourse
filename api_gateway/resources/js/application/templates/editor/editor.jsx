import React, {useState, useEffect} from 'react'
import {EditorModel} from "./models/editor.model.tsx";
import {EditorTextBlockModel} from "./models/editorTextBlock.model.tsx";

const Editor = ({blocksLoaded}) => {
    const [editorRender, setEditorRender] = useState(0);

    const editor = new EditorModel({
        blocks: [
            new EditorTextBlockModel()
        ],
        render: (value) => setEditorRender(value)
    })

    return (<>
        <h3>Editor</h3>
        <div className="editorArea">{editor.renderBlocks()}</div>
        {editor.renderCommandsDropdown()}
    </>);
}

export default Editor
