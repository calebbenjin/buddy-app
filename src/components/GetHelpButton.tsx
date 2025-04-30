import React from "react";
import Button from "./ui/Button";
import { RxChatBubble } from "react-icons/rx";

const GetHelpButton = () => {
  return (
    <Button className="rounded-full absolute lg:bottom-10 bottom-4 right-8 shadow-2xl flex items-center">
      Get Help <RxChatBubble className="ml-2" />
    </Button>
  );
};

export default GetHelpButton;
