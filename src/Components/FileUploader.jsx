import React from "react";

const FileUploader = ({onChange}) => {
  return (
    <div>
      

      <input
        id="file_input"
        type="file"
        onChange={onChange}
        className="
          block w-full text-sm text-gray-500
          border border-gray-300 rounded-lg
          cursor-pointer bg-gray-50
          file:mr-4 file:py-2 file:px-4
          file:rounded-l-lg file:border-0
          file:text-sm file:font-medium
          file:bg-gray-200 file:text-gray-700
          hover:file:bg-gray-300 mt-2
        "
      />
    </div>
  );
};

export default FileUploader;