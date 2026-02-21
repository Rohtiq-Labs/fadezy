"use client";

import { FC, useState, FormEvent } from "react";

const InquiryForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const subject = encodeURIComponent(`Fadezy inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hello@fadezy.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-md mt-8"
      aria-label="Contact inquiry form"
    >
      <label className="flex flex-col gap-1 opacity-80 text-sm">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary"
          placeholder="Your name"
          required
          aria-required
        />
      </label>
      <label className="flex flex-col gap-1 opacity-80 text-sm">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary"
          placeholder="your@email.com"
          required
          aria-required
        />
      </label>
      <label className="flex flex-col gap-1 opacity-80 text-sm">
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary resize-y"
          placeholder="Tell us about your salon or barbershop..."
          required
          aria-required
        />
      </label>
      <button
        type="submit"
        className="w-fit font-acumin font-normal text-[18px] px-6 py-2 rounded bg-accent text-black hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Send inquiry"
      >
        Send inquiry
      </button>
    </form>
  );
};

export default InquiryForm;
