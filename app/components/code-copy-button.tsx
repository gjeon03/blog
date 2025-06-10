"use client";

import { useState } from "react";

export const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("복사 실패:", err));
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute z-10 px-2  text-sm text-gray-500 transition-opacity bg-gray-100 rounded opacity-0 top-2 right-2 dark:bg-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white group-hover:opacity-100"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
};
