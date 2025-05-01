import React from "react";

interface DocumentPreviewProps {
  document: {
    preview: string;
    name: string;
  };
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ document }) => {
  return (
    <div className="">
      <img
        src={document.preview}
        alt={document.name}
        className="h-40 w-full object-cover rounded-md"
      />
      <p className="text-sm">{document.name}</p>
    </div>
  );
};

export default DocumentPreview;
