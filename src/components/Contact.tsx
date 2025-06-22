// components/Contact.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "../data/config";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [timestamp, setTimestamp] = useState("");

  // Generate timestamp once on mount
  useEffect(() => {
    setTimestamp(new Date().toLocaleString());
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => setStatus("sent"),
        () => setStatus("error")
      );
  };

  const { socialLinks } = siteConfig;

  return (
    <section id="contact" className="py-16 bg-gray-50 px-4">
      <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg">
        {/* Poetic Header */}
        <h2 className="text-3xl font-semibold mb-2 text-gray-900 text-center">
          Whisper Through the Wire
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          If you’ve carried a thought this far, let it rest here.
        </p>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
          {/* Hidden time field to satisfy {{time}} */}
          <input type="hidden" name="time" value={timestamp} />

          {/* Name field */}
          <input
            type="text"
            name="name"
            placeholder="Tell me your name, traveler..."
            required
            className="
              w-full px-4 py-3
              bg-gray-200 text-gray-900
              border border-gray-300
              rounded-lg
              placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent
            "
          />

          {/* Email field */}
          <input
            type="email"
            name="email"
            placeholder="Where shall I write back?"
            className="
              w-full px-4 py-3
              bg-gray-200 text-gray-900
              border border-gray-300
              rounded-lg
              placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent
            "
          />

          {/* Message field */}
          <textarea
            name="message"
            placeholder="Let your words drift here..."
            rows={5}
            required
            className="
              w-full px-4 py-3
              bg-gray-200 text-gray-900
              border border-gray-300
              rounded-lg
              placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent
            "
          />

          {/* Submit button with poetic feedback */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full py-3
              bg-gray-800 text-gray-100 font-medium
              rounded-lg
              hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-gray-500
              disabled:opacity-50 disabled:cursor-not-allowed
              transition
            "
          >
            {status === "sending"
              ? "Letting it fly..."
              : status === "sent"
              ? "Message delivered like a secret note."
              : status === "error"
              ? "Something broke the rhythm. Try again."
              : "Send a Signal"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center space-x-6 text-gray-600">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 transition"
          >
            <Github size={28} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-800 transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
