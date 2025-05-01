import React, { ChangeEvent, KeyboardEvent, RefObject } from "react";
import { BsSend } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";
import { HiPaperClip } from "react-icons/hi2";
import { MdIceSkating } from "react-icons/md";

interface ChatInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onFileUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: RefObject<HTMLInputElement>;
}

const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onKeyPress,
  onSend,
  onFileUpload,
  fileInputRef,
}) => {
  return (
    <div className="p-4 bg-white border-t border-gray-200">
      <div className="flex items-center bg-gray-100 rounded-full p-1">
        <button className="p-2 text-gray-500">
          <MdIceSkating size={20} />
        </button>
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="Write Something..."
          className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={onFileUpload}
          className="hidden"
        />
        <button
          className="p-2 text-gray-500"
          onClick={() => fileInputRef.current?.click()}
        >
          <HiPaperClip size={20} />
        </button>
        <button className="p-2 text-gray-500">
          <FaSmile size={20} />
        </button>
        <button
          className="p-2 bg-orange-500 rounded-full text-white"
          onClick={onSend}
        >
          <BsSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
