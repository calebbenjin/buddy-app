import React from "react";
import ChatWindow from "@/components/chats/ChatWindow";
import DashboardLayout from "@/layouts/DashboardLayout";

const messages = () => {
  return (
    <DashboardLayout>
      <ChatWindow />
    </DashboardLayout>
  );
};

export default messages;
