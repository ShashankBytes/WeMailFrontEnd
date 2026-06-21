import React from 'react'

const AIPromptBox = () => {
  return (
    <div>
      <div className="w-100">
        <input
            type="text"
            placeholder="Ask AI to generate an email..."
            className="w-full px-5 py-4 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 m-2"
        />
     </div>
    </div>
  )
}

export default AIPromptBox
