import DocumentPreview from "./DocumentPreview";

interface MessageProps {
  message: {
    sender: {
      avatar: string;
      name?: string;
    };
    text?: string;
    document?: any; // Replace 'any' with a specific type if known
  };
  isOwn: boolean;
}

function Message({ message, isOwn }: MessageProps) {
  return (
    <div className={`flex mb-4 ${isOwn ? "justify-end" : "justify-start"}`}>
      {!isOwn && (
        <img
          src={message.sender.avatar}
          alt={message.sender?.name}
          className="w-8 h-8 rounded-full mr-2 mt-1"
        />
      )}
      <div
        className={`max-w-[70%] ${
          isOwn ? "bg-orange-50 text-orange-800" : "bg-gray-200 text-gray-800"
        } rounded-lg p-3`}
      >
        {message.text && <p className="text-sm">{message.text}</p>}
        {message.document && (
          <div className="mt-1">
            <DocumentPreview document={message.document} />
          </div>
        )}
      </div>
      {isOwn && (
        <img
          src={message.sender.avatar}
          alt={message.sender?.name}
          className="w-8 h-8 rounded-full ml-2 mt-1"
        />
      )}
    </div>
  );
}

export default Message;
