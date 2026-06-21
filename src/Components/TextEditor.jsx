import React from 'react'
import { Editor } from 'primereact/editor';

const TextEditor = ({value,onChange}) => {
    return (
        <div>
            <div className="border border-gray-300 rounded-2xl overflow-hidden">
                <Editor
                    value={value}
                    onTextChange={onChange}
                    style={{height:'210px'}}
                />
            </div>
        </div>
    )
}

export default TextEditor