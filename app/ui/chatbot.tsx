"use client";
import OpenAI from "openai";

import {
  ChatBubbleOvalLeftIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ChatbotComponent = () => {
  const [messages, setMessages] = useState<
    { sender: string; text: string | null }[]
  >([]);
  const [userInput, setUserInput] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const client = new OpenAI({
  //   apiKey: process.env.NEXT_PUBLIC_TOGETHERAI_API_KEY,
  //   baseURL: "https://api.together.xyz/v1",
  //   dangerouslyAllowBrowser: true,
  // });

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  const handleChange = (event: any) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (isLoading) return;
    const prompt = userInput.trim();
    if (prompt) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "You",
          text: userInput.trim(),
        },
      ]);
      setUserInput("");
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: prompt,
        }),
      });

      const data = await response.json();
      setIsLoading(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "AI",
          text: data.answer,
        },
      ]);
    }
  };

  function handleBubbleClick() {
    setShowChat(!showChat);
  }

  // Add a CSS class for the chat messages container
  const chatMessagesContainerClass = "pr-4 h-[340px] overflow-y-auto";

  return (
    <div>
      {/* Chat bubble button */}
      <button
        onClick={handleBubbleClick}
        className="z-50 fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
      >
        <ChatBubbleOvalLeftIcon width={30} height={40} className="text-white" />
      </button>

      {/* Chatbot container */}
      <div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
        className={clsx(
          "fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] z-50 ",
          "w-60 md:w-96 xl:w-[440px] h-[500px]",

          {
            hidden: !showChat,
          }
        )}
      >
        {/* Heading */}
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">Sami</h2>
          <p className="text-sm text-[#6b7280] leading-3">
            I'm here to assist you with ISSAT Sousse University inquiries!
          </p>
        </div>

        {/* Chat messages container */}
        <div ref={messagesContainerRef} className={chatMessagesContainerClass}>
          {/* Initial AI message */}
          <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
              <div className="rounded-full bg-gray-100 border p-1">
                <SparklesIcon width={20} height={20} />
              </div>
            </span>
            <p className="leading-relaxed">
              <span className="block font-bold text-gray-700">AI</span>
              Hello, how can I help?
            </p>
          </div>

          {/* Render messages */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 my-4 text-gray-600 text-sm flex-1`}
            >
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  {message.sender === "AI" ? (
                    <SparklesIcon width={20} height={20} />
                  ) : (
                    <UserIcon width={20} height={20} />
                  )}
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">
                  {message.sender}
                </span>
                {message.text}
              </p>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  <SparklesIcon width={20} height={20} />
                </div>
              </span>
              <Image
                src="/typing-animation-3x.gif"
                alt="loading"
                width={50}
                height={50}
              />
            </div>
          )}
        </div>

        {/* Input box */}
        <div className="flex items-center pt-0">
          <form
            className="flex items-center justify-center w-full space-x-2"
            onSubmit={handleSubmit}
          >
            <input
              className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
              placeholder="Type your message"
              value={userInput}
              onChange={handleChange}
            />
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
              type="submit"
              disabled={!userInput.trim() || isLoading}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatbotComponent;
