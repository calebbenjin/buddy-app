import React, { useRef } from "react";
import { BsSend } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { HiPaperClip } from "react-icons/hi2";
import { FiSmile } from "react-icons/fi";

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}

function MessageInput({
  value,
  onChange,
  onKeyPress,
  onSend,
  onFileUpload,
  fileInputRef,
}: MessageInputProps) {
  return (
    <div className="p-4 bg-gray-200 rounded-2xl w-11/12 mx-auto">
      <div className="flex items-center bg-gray-100 rounded-full p-1">
        <button className="p-2 text-gray-500">
          <CiMicrophoneOn size={24} />
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
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
        >
          <HiPaperClip size={24} />
        </button>
        <button className="p-2 text-gray-500">
          <IoCameraOutline size={24} />
        </button>
        <button className="p-2 text-gray-500">
          <FiSmile size={24} />
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
}

export default MessageInput;
