import React, {useEffect, useState} from 'react';
import "./require.css";

const getCaretCoordinates = require('textarea-caret');

export const Editor__textInsertableBlock = (
    {
        initialContent, placeholder, textareaClass,
        setDropdownCommandsConfigsHandler, createNewBlockHandler
    }/*{deleteHandler}*/) => {

    const [content, setContent] = useState(initialContent);
    const [caretPosition, setCaretPosition] = useState({});

    const [command, setCommand] = useState('');
    const [isCommandStarted, setIsCommandStarted] = useState(false);

    useEffect(() => {
        if (isCommandStarted)
            setDropdownCommandsConfigsHandler({
                position: caretPosition,
                isVisible: true
            });
        else {
            setDropdownCommandsConfigsHandler({
                isVisible: false
            });

            setCommand('');
        }
    }, [isCommandStarted]);


    return (<textarea
        className={"editor__text-insertable-block-textarea " + (textareaClass ?? "")}
        autoFocus={true}
        onChange={e => {
            /*if (e.target.value === '')
                deleteHandler(id);*/

            setContent(e.target.value)

            if (isCommandStarted) {
                const regex = `.{${caretPosition.charStarted}}\\/(.*).{${(e.target.value.length - e.target.selectionStart)}}`;

                if ((new RegExp(regex, "gm")).exec(e.target.value))
                    setCommand((new RegExp(regex, "gm")).exec(e.target.value)[1]);
            }
        }}

        onKeyPress={e => {
            if (e.code === "Slash") {
                const caret = getCaretCoordinates(e.target, e.target.selectionEnd);

                setCaretPosition({
                    x: e.target.offsetLeft + caret.left,
                    y: e.target.offsetTop + caret.top,
                    charStarted: e.target.selectionEnd
                });

                setIsCommandStarted(true);
            }

            if (e.code === 'Space')
                setIsCommandStarted(false);

            if (e.code === 'Enter' && isCommandStarted) {
                e.preventDefault();
                createNewBlockHandler(command);
                setIsCommandStarted(false);
            }

            if (e.code === 'Enter' && !isCommandStarted) {
                e.preventDefault();
                createNewBlockHandler('text');
            }
        }}

        onInput={e => {
            e.target.style.height = 'auto';
            e.target.style.height = (e.target.scrollHeight + 'px');
        }}

        onFocus={e => {
            e.target.placeholder = placeholder;
        }}

        onBlur={e => {
            e.target.placeholder = "";
        }}
        /*onBlur={e => setDropdownCommandsConfigsHandler({
            isVisible: false
        })}*/
        value={content}/>)
}

export default Editor__textInsertableBlock
