"use client";

import { landingContents } from "@/contents/landingContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { FC, useState, FormEvent } from "react";

const InquiryForm: FC = () => {
  const lang = useCurrentLanguages();
  const { form } = landingContents[lang]["get-in-touch"];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi FADEZY,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `https://wa.me/923239675581?text=${text}`;
  };

  const inputClass =
    "bg-transparent border-0 border-b border-brand-border rounded-none px-0 py-4 min-h-[48px] text-brand-text placeholder:text-brand-text-muted/60 focus:outline-none focus:border-brand-text transition-colors duration-500 w-full font-acumin-wide-light text-[15px]";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 w-full max-w-lg mt-12"
      aria-label={form.ariaLabel}
    >
      <label className="flex flex-col gap-2">
        <span className="font-blinker text-[11px] uppercase tracking-[0.18em] text-brand-text-muted">
          {form.nameLabel}
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder={form.namePlaceholder}
          required
          aria-required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-blinker text-[11px] uppercase tracking-[0.18em] text-brand-text-muted">
          {form.emailLabel}
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder={form.emailPlaceholder}
          required
          aria-required
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-blinker text-[11px] uppercase tracking-[0.18em] text-brand-text-muted">
          {form.messageLabel}
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={`${inputClass} resize-none min-h-[120px]`}
          placeholder={form.messagePlaceholder}
          required
          aria-required
        />
      </label>
      <button
        type="submit"
        aria-label={form.submitLabel}
        className="
          inline-flex
          items-center
          justify-center
          min-h-[48px]
          px-8
          py-3
          mt-4
          font-acumin-wide-light
          text-[13px]
          uppercase
          tracking-[0.18em]
          border
          border-brand-text/30
          text-brand-text
          hover:bg-brand-text
          hover:text-brand-bg
          transition-all
          duration-500
          ease-out
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
        "
      >
        {form.submitLabel}
      </button>
    </form>
  );
};

export default InquiryForm;
