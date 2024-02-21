import React from 'react';
import { useEffect, useState } from 'react';
import Message from './Message';

export default function Board() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // TODO: Fetch messages
  }, []);

  return (
    <div id="message-list">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}
