import React, {
  useState,
  useRef,
  useEffect,
  Suspense,
  lazy,
} from "react";
import { contacts, currentUser, messagesData } from "@/utils/constant";
import SearchBar from "./Searchbar";

// Lazy-loaded components
const ChatHeader = lazy(() => import("@/components/chats/ChatHeader"));
const SidebarHeader = lazy(() => import("@/components/chats/SidebarHeader"));
const MessageInput = lazy(() => import("@/components/chats/MessageInput"));
const ContactList = lazy(() => import("@/components/chats/ContactList"));
const MessageList = lazy(() => import("@/components/chats/MessageList"));

// Main App Component
export default function ChatWindow() {
  const [messages, setMessages] = useState(messagesData);
  const [newMessage, setNewMessage] = useState("");
  const [activeContact, setActiveContact] = useState(contacts[0]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
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
      <div className="lg:w-1/4 w-full bg-gray-50 rounded-2xl">
        <Suspense fallback={<div className="p-4">Loading sidebar...</div>}>
          <SidebarHeader user={currentUser} />
          <SearchBar />
          <ContactList
            contacts={contacts}
            activeContact={activeContact}
            setActiveContact={setActiveContact}
          />
        </Suspense>
      </div>

      <div className="w-3/4 flex flex-col bg-gray-50 rounded-2xl p-3">
        <Suspense fallback={<div className="p-4">Loading chat...</div>}>
          <ChatHeader contact={activeContact} />
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 bg-gray-50"
          >
            <MessageList messages={messages} currentUser={currentUser} />
          </div>
          <MessageInput
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            onSend={handleSendMessage}
            onFileUpload={handleFileUpload}
            fileInputRef={fileInputRef}
          />
        </Suspense>
      </div>
    </div>
  );
}
