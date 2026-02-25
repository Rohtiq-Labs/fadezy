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
      className="flex flex-col gap-4 w-full max-w-md lg:max-w-xl mt-8"
      aria-label="Contact inquiry form"
    >
      <label className="flex flex-col gap-1 text-secondary text-sm">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white border border-brand-border rounded-sm px-4 py-3 min-h-[44px] text-primary-dark placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors w-full"
          placeholder="Your name"
          required
          aria-required
        />
      </label>
      <label className="flex flex-col gap-1 text-secondary text-sm">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border border-brand-border rounded-sm px-4 py-3 min-h-[44px] text-primary-dark placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors w-full"
          placeholder="your@email.com"
          required
          aria-required
        />
      </label>
      <label className="flex flex-col gap-1 text-secondary text-sm">
        Message
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="bg-white border border-brand-border rounded-sm px-4 py-3 text-primary-dark placeholder:text-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors w-full resize-y min-h-[100px]"
          placeholder="Tell us about your salon or barbershop..."
          required
          aria-required
        />
      </label>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center font-acumin-wide-light font-semibold text-primary-dark px-8 py-3 min-h-[44px] rounded-sm bg-accent hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-brand-bg"
          aria-label="Send inquiry"
        >
          Send inquiry
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
