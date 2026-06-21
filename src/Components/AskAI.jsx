import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import AIPromptBox from './AIPromptBox';

const AskAI = ({setShowBox}) => {

    return (
        <div className="flex items-center h-10 gap-2 m-4">
            <Brain
                size={25}
                color="blue"
                className="cursor-pointer flex-shrink-0"
                onClick={()=>setShowBox(prev=>!prev)}
            />
        </div>
    );
}

export default AskAI;