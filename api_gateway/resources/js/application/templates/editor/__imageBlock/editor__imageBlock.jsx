import React, {useEffect, useRef, useState} from 'react';
import "./require.css";

const Editor__imageBlock = ({deleteBlockHandler, setHtmlElementHandler}) => {
    const [imageSrc, setImageSrc] = useState('');
    const [file, setFile] = useState();

    const [isImageHovered, setIsImageHovered] = useState(false);

    const selfHtmlElement = useRef(null);

    useEffect(() => {
        setHtmlElementHandler(selfHtmlElement.current);
    }, []);

    return (<div className="editor__image-block">
        <div className="editor__image-block-input">
            <input type="file"
                   ref={selfHtmlElement}
                   onChange={e => {
                       const reader = new FileReader();

                       reader.onload = e => setImageSrc(e.target.result);

                       setFile(e.target.files[0]);

                       reader.readAsDataURL(e.target.files[0]);
                   }}/>
        </div>
        <div className="editor__image-block-preview"
             onMouseEnter={() => setIsImageHovered(true)}
             onMouseLeave={() => setIsImageHovered(false)}>
            <img src={imageSrc} alt="The image" className="editor__image-block-preview-image"/>
            {isImageHovered
                ? <div className="editor__image-block-preview-actions">
                    <button
                        onClick={e => deleteBlockHandler()}>Delete
                    </button>
                    <button
                        onClick={e => console.log('changed')}>Change
                    </button>
                </div>
                : <></>}
        </div>
    </div>)
}

export default Editor__imageBlock
