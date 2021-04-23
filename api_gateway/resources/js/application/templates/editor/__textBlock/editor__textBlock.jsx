import React, {useEffect, useState} from 'react';

const getCaretCoordinates = require('textarea-caret');

const Editor__textBlock = ({id, deleteHandler, setDropdownCommandsConfigsHandler}) => {

    const [content, setContent] = useState('');

    return (<div>
        <textarea placeholder={"Type '/' for commands"}
                  onChange={e => {
                      if (e.target.value === '')
                          deleteHandler(id);

                      setContent(e.target.value)
                  }}
                  onKeyPress={e => {
                      if (e.code === "Slash"){
                          const caret = getCaretCoordinates(e.target, e.target.selectionEnd);

                          setDropdownCommandsConfigsHandler({
                              position: {
                                  x: e.target.offsetLeft + caret.left,
                                  y: e.target.offsetTop + caret.top
                              },
                              isVisible: true
                          });
                      }

                  }}
                  onBlur={e => setDropdownCommandsConfigsHandler({
                      isVisible: false
                  })}
                  value={content}/>
    </div>)
}

export default Editor__textBlock
