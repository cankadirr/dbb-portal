// src/components/social/SocialIcons.tsx
import React from "react";

export const SocialIcons: React.FC = () => (
  <div className="flex gap-4">
    <a
      href="https://www.facebook.com/diyarbakir"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5v-2.2c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.5.7-1.5 1.5V12H17l-.5 3h-2v7A10 10 0 0 0 22 12z" />
      </svg>
    </a>
    <a
      href="https://twitter.com/diyarbakir"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      className="hover:text-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.4a9 9 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.5 0c-2.5 0-4.5 2.1-4.5 4.6 0 .4.1.8.2 1.1A12.7 12.7 0 0 1 1.64 1.1a4.56 4.56 0 0 0-.6 2.3c0 1.6.8 3 2 3.8a4.37 4.37 0 0 1-2-.5v.1c0 2.2 1.5 4 3.4 4.4a4.52 4.52 0 0 1-2 .1c.6 2 2.4 3.5 4.5 3.5a9 9 0 0 1-6 2c-.4 0-.8 0-1.2-.1A12.75 12.75 0 0 0 7 19c8.4 0 13-7 13-13v-.6A9.3 9.3 0 0 0 23 3z" />
      </svg>
    </a>
    <a
      href="https://instagram.com/diyarbakir"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zM12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm6.25-.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
      </svg>
    </a>
  </div>
);
