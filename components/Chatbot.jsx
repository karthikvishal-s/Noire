'use client'
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { IoArrowForwardSharp } from 'react-icons/io5';

const Chatbot = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  // ➜ ADD a ref that will always point to the bottom of the scroll area
  const bottomRef = useRef(null);

  // ➜ Whenever the message list (or panel open state) changes, scroll down
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);   // depend on both

  const handleUserMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMsgs = [
      ...messages,
      { sender: 'user', text: trimmed },
    ];

    // — Rule‑based reply
    let reply = 'Sorry, I cant’t understand that.';
    const lower = trimmed.toLowerCase();
    if (lower.includes('return')) reply = 'You can return items within 30 days of delivery.';
    else if (lower.includes('order status')) reply = 'Please visit Profile → Orders to check status.';
    else if (lower.includes('delivery') || lower.includes('delivered') ||lower.includes('deliver'))     reply = 'Delivery usually takes 3‑5 business days.';
    else if (lower.includes('cancel')) reply = 'You can cancel your order within 1 hour of placing it.';
    newMsgs.push({ sender: 'bot', text: reply });
    setMessages(newMsgs);
    setInput('');
  };

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {isOpen ? (
        <div className="bg-white shadow-xl w-[472px] h-[720px] flex flex-col border border-gray-300 rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center p-2 bg-black text-white">
            <p className="text-2xl font-semibold ml-3">Chat</p>
            <IoClose size={35} className="cursor-pointer mr-2" onClick={() => setIsOpen(false)} />
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto text-sm space-y-2 mt-5">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg w-fit max-w-[80%] text-xl ${
                  msg.sender === 'bot'
                    ? 'bg-gray-200 self-start'
                    : 'bg-black text-white self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {/* Invisible anchor that we keep scrolling to */}
            <div ref={bottomRef} />
          </div>




          {/* Input box */}
          <div className="p-2 h-[100px]  border-gray-200 flex items-center ml-3 mr-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleUserMessage()}
              placeholder="Type a message"
              className="flex-1 p-1 text-xl border border-gray-300 rounded-md h-[45px]"
            />
            
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <AiOutlineMessage size={40} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
