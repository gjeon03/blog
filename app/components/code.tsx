"use client";

import { useState } from "react";
import { highlight } from "sugar-high";

export default function Code({ children, ...props }) {
  const [copied, setCopied] = useState(false);
  let codeHTML = highlight(children);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("복사 실패:", err));
  };

  return (
    <div className="relative group my-4">
      <pre className="overflow-x-auto p-4 ">
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute z-10 px-2 py-1 text-sm text-gray-500 transition-opacity bg-gray-100 rounded opacity-0 top-2 right-2 dark:bg-gray-700 hover:text-black dark:hover:text-white group-hover:opacity-100"
      >
        {copied ? "✔ Copied" : "📋 Copy"}
      </button>
    </div>
  );
}
