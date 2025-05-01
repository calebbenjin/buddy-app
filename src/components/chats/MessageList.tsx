import React from "react";
import DateSeparator from "./DateSeparator";
import Message from "./Message";

interface Sender {
  id: number;
  name: string;
  avatar: string;
  title?: string;
}

interface MessageData {
  id: number;
  sender: { id: number; name: string; avatar: string };
  text?: string;
  document?: { name: string; preview: string };
  time: string;
  isOwn: boolean;
}

interface MessageListProps {
  messages: MessageData[];
  currentUser: Sender;
}

function MessageList({
  messages,
  currentUser,
}: MessageListProps) {
  const messagesByDate = messages.reduce<Record<string, typeof messages>>(
    (acc, message) => {
      const date = message.time;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(message);
      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.entries(messagesByDate).map(([date, messagesForDate], index) => (
        <div key={index}>
          {index > 0 && <DateSeparator date={date} />}
          {messagesForDate.map((message) => (
            <Message
              key={message.id}
              message={message}
              isOwn={message.sender.id === currentUser.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
