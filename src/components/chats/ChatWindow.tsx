
import { useState, useRef, useEffect, SetStateAction } from "react";
import ChatHeader from "@/components/chats/ChatHeader";
import SidebarHeader from "@/components/chats/SidebarHeader";
import MessageInput from "@/components/chats/MessageInput";
import ContactList from "@/components/chats/ContactList";
import MessageList from "@/components/chats/MessageList";
import { contacts, currentUser, messagesData } from "@/utils/constant";
import SearchBar from "./Searchbar";

// Main App Component
export default function ChatWindow() {
  const [messages, setMessages] = useState(messagesData);

  const [newMessage, setNewMessage] = useState("");
  const [activeContact, setActiveContact] = useState(contacts[0]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = {
      id: messages.length + 1,
      sender: currentUser,
      text: newMessage,
      time: "Just now",
      isOwn: true,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  const handleKeyPress = (e: {
    key: string;
    shiftKey: any;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];

    // Create a blob URL for preview
    const preview = URL.createObjectURL(file);

    const newMsg = {
      id: messages.length + 1,
      sender: currentUser,
      document: { name: file.name, preview },
      time: "Just now",
      isOwn: true,
    };

    setMessages([...messages, newMsg]);
  };

  return (
    <div className="flex gap-x-4 h-[90vh] bg-white rounded-2xl p-3">
      {/* Left Sidebar */}
      <div className="lg:w-1/4 w-full bg-gray-50 rounded-2xl">
        <SidebarHeader user={currentUser} />
        <SearchBar />
        <ContactList
          contacts={contacts}
          activeContact={activeContact}
          setActiveContact={setActiveContact}
        />
      </div>

      {/* Main Chat Area */}
      <div className="w-3/4 flex flex-col bg-gray-50 rounded-2xl p-3">
        <ChatHeader contact={activeContact} />
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 bg-gray-50"
        >
          <MessageList messages={messages} currentUser={currentUser} />
        </div>
        <MessageInput
          value={newMessage}
          onChange={(e: { target: { value: SetStateAction<string> } }) =>
            setNewMessage(e.target.value)
          }
          onKeyPress={handleKeyPress}
          onSend={handleSendMessage}
          onFileUpload={handleFileUpload}
          fileInputRef={fileInputRef}
        />
      </div>
    </div>
  );
}
