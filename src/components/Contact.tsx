"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import { siteConfig } from "../data/config";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [timestamp, setTimestamp] = useState("");

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
    <section
      id="contact"
      className="
        bg-[#0B0B0B] text-[#E5E5E5]
        px-4 sm:px-6 lg:px-8
        py-4
      "
    >
      <div
        className="
        max-w-xl mx-auto
        bg-[#1A1A1A] p-6
        rounded-2xl shadow-lg
      "
      >
        <h2 className="text-3xl font-semibold mb-2 text-white text-center">
          Where Silence Listens
        </h2>
        <p className="text-[#CCCCCC] mb-6 text-center">
          If you’ve carried a thought this far, let it rest here.
        </p>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
          <input type="hidden" name="time" value={timestamp} />

          <input
            type="text"
            name="name"
            placeholder="The name behind the silence?"
            required
            className="
              w-full px-4 py-3
              bg-[#1A1A1A] text-[#E5E5E5]
              border border-[#333333]
              rounded-lg
              placeholder-[#CCCCCC]
              focus:outline-none focus:ring-2 focus:ring-[#333333]
              hover:bg-[#282828]
              transition-colors duration-200
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Where shall the winds return the word?"
            className="
              w-full px-4 py-3
              bg-[#1A1A1A] text-[#E5E5E5]
              border border-[#333333]
              rounded-lg
              placeholder-[#CCCCCC]
              focus:outline-none focus:ring-2 focus:ring-[#333333]
              hover:bg-[#282828]
              transition-colors duration-200
            "
          />

          <textarea
            name="message"
            placeholder="Let the silence speak through you..."
            rows={5}
            required
            className="
              w-full px-4 py-3
              bg-[#1A1A1A] text-[#E5E5E5]
              border border-[#333333]
              rounded-lg
              placeholder-[#CCCCCC]
              focus:outline-none focus:ring-2 focus:ring-[#333333]
              hover:bg-[#282828]
              transition-colors duration-200
            "
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="
              w-full flex items-center justify-center space-x-2
              py-3
              bg-transparent
              border border-[#E5E5E5]
              text-[#E5E5E5] font-medium
              rounded-lg
              hover:bg-[#333333]
              focus:outline-none focus:ring-2 focus:ring-[#555555]
              disabled:opacity-50 disabled:cursor-not-allowed
              cursor-pointer transition
            "
          >
            <span>
              {status === "sending"
                ? "Sending it through silence..."
                : status === "sent"
                ? "It now echoes where only quiet listens."
                : status === "error"
                ? "Something stilled its journey. Try again?"
                : "Release it to the quiet..."}
            </span>
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="mt-6 flex justify-center space-x-6 text-[#CCCCCC]">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition transform hover:scale-110 hover:text-white"
          >
            <Github size={28} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition transform hover:scale-110 hover:text-white"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
