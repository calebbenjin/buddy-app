import React from "react";
import ContactItem from "./ContactItem";


function ContactList({
  contacts,
  activeContact,
  setActiveContact,
}: {
  contacts: Array<{
    id: number;
    name: string;
    avatar: string;
    status: string;
    lastMessage: string;
    time: string;
    unread: number;
    read?: boolean;
  }>;
  activeContact: {
    id: number;
    name: string;
    avatar: string;
    status: string;
    lastMessage: string;
    time: string;
    unread: number;
    read?: boolean;
  };
  setActiveContact: (contact: {
    id: number;
    name: string;
    avatar: string;
    status: string;
    lastMessage: string;
    time: string;
    unread: number;
    read?: boolean;
  }) => void;
}) {
  return (
    <div className="overflow-y-auto max-h-[calc(100vh-140px)] px-2">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          isActive={activeContact.id === contact.id}
          onClick={() => setActiveContact(contact)}
        />
      ))}
    </div>
  );
}

export default ContactList;
