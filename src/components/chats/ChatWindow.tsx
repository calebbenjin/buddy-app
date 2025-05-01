import DashboardLayout from "@/layouts/DashboardLayout";
import { useState, useRef, useEffect, SetStateAction } from "react";
import ChatHeader from "@/components/chats/ChatHeader";
import SidebarHeader from "@/components/chats/SidebarHeader";
import SearchBar from "@/components/chats/SearchBar";
import MessageInput from "@/components/chats/MessageInput";
import ContactList from "@/components/chats/ContactList";
import MessageList from "@/components/chats/MessageList";

// Main App Component
export default function ChatWindow() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      text: "Hi David, have you got the project report pdf?",
      time: "Today",
      isOwn: false,
    },
    {
      id: 2,
      sender: { id: 1, name: "David Peters", avatar: "/userpic.png" },
      text: "NO. I did not get it",
      time: "Today",
      isOwn: true,
    },
    {
      id: 3,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      text: "Ok, I will just sent it here. Plz be sure to fill the details by today end of the day.",
      time: "Yesterday",
      isOwn: false,
    },
    {
      id: 4,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      document: {
        name: "project_report.pdf",
        preview: "/chatpdf.png",
      },
      time: "Yesterday",
      isOwn: false,
    },
    {
      id: 5,
      sender: { id: 1, name: "David Peters", avatar: "/userpic.png" },
      text: "Ok. Should I send it over email as well after filling the details.",
      time: "Yesterday",
      isOwn: true,
    },
    {
      id: 6,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      text: "Ya. I'll be adding more team members to it.",
      time: "Yesterday",
      isOwn: false,
    },
    {
      id: 7,
      sender: { id: 1, name: "David Peters", avatar: "/userpic.png" },
      text: "OK",
      time: "Yesterday",
      isOwn: true,
    },
  ]);

  const [contacts, setContacts] = useState([
    {
      id: 2,
      name: "Lisa Roy",
      avatar: "/userpic.png",
      status: "online",
      lastMessage: "Hi, are you Available Tomorrow?",
      time: "10:35 AM",
      unread: 0,
    },
    {
      id: 3,
      name: "Jamie Taylor",
      avatar: "/userpic.png",
      status: "offline",
      lastMessage: "Nice One.\nWill Do it tomorrow",
      time: "10:35 AM",
      unread: 3,
    },
    {
      id: 4,
      name: "Jason Roy",
      avatar: "/userpic.png",
      status: "offline",
      lastMessage:
        "That's Great. I am Looking forward to having a great start.",
      time: "10:35 AM",
      unread: 0,
      read: true,
    },
    {
      id: 5,
      name: "Amy Frost",
      avatar: "/userpic.png",
      status: "offline",
      lastMessage: "Hi, will you start working on the chat app right now?",
      time: "10:35 AM",
      unread: 0,
      read: true,
    },
    {
      id: 6,
      name: "Paul Wilson",
      avatar: "/userpic.png",
      status: "offline",
      lastMessage: "See you tomorrow champ",
      time: "10:35 AM",
      unread: 0,
      read: true,
    },
    {
      id: 7,
      name: "Ana Williams",
      avatar: "/userpic.png",
      status: "offline",
      lastMessage: "??",
      time: "10:35 AM",
      unread: 1,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "David Peters",
    avatar: "/userpic.png",
    title: "Senior Developer",
  });
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
      <div className="w-1/4 bg-gray-50 rounded-2xl">
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
