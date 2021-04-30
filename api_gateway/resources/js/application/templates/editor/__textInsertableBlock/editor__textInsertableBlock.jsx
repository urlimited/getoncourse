import React, {useEffect, useState, useRef} from 'react';
import "./require.css";

const getCaretCoordinates = require('textarea-caret');

export const Editor__textInsertableBlock = (
    {
        initialContent, placeholder, textareaClass, afterRenderingCallback = () => {},
        setDropdownCommandsConfigsHandler, createNewBlockHandler, deleteBlockHandler, setHtmlElementHandler
    }) => {
    const selfHtmlElement = useRef(null);

    const [content, setContent] = useState(initialContent);
    const [caretPosition, setCaretPosition] = useState({});

    const [commandRegexResult, setCommandRegexResult] = useState('');

    const [command, setCommand] = useState('');
    const [isCommandStarted, setIsCommandStarted] = useState(false);

    const [eventCommandSelected, setEventCommandSelected] = useState(false);

    useEffect(() => {
        if (isCommandStarted)
            setDropdownCommandsConfigsHandler({
                position: caretPosition,
                isVisible: true,
                clearCommandHandler: () => setEventCommandSelected(true)
            });
        else {
            setDropdownCommandsConfigsHandler({
                isVisible: false
            });

            setCommand('');
        }
    }, [isCommandStarted]);

    useEffect(() => {
        setHtmlElementHandler(selfHtmlElement.current);

        afterRenderingCallback();
    }, []);

    useEffect(() => {
        if(eventCommandSelected === true){
            setContent(commandRegexResult[1] + commandRegexResult[3]);

            setEventCommandSelected(false);
        }
    }, [eventCommandSelected]);

    return (<textarea
        ref={selfHtmlElement}
        className={"editor__text-insertable-block-textarea " + (textareaClass ?? "")}
        onChange={e => {
            if (e.target.value === ''){
                deleteBlockHandler();
            }

            setContent(e.target.value)

            if (isCommandStarted) {
                const commandRegex = `(.{${caretPosition.charStarted}})\\/(.*)(.{${(e.target.value.length - e.target.selectionStart)}})`;

                const regexResult = (new RegExp(commandRegex, "gm")).exec(e.target.value);

                setCommandRegexResult(regexResult)

                if (regexResult)
                    setCommand(regexResult[2]);
            }
        }}

        onKeyDown={e => {
            if (e.code === "Backspace" && e.target.value === ''){
                e.preventDefault();
                deleteBlockHandler();
            }

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

                setContent(commandRegexResult[1] + commandRegexResult[3]);
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
