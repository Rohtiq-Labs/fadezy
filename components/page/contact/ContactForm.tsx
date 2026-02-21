"use client";

import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { contactContents } from "@/contents/contactContents";
import { FC, useState, FormEvent } from "react";

const ContactForm: FC = () => {
  const lang = useCurrentLanguages();
  const formLabels = contactContents[lang].mainContact.form;
  const [salonName, setSalonName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Fadezy - Free Preview Request from ${salonName}`
    );
    const body = encodeURIComponent(
      `Salon Name: ${salonName}\nOwner Name: ${ownerName}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hello@fadezy.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-secondary placeholder-secondary/50 focus:outline-none focus:border-accent transition-colors w-full";
  const labelClass = "font-acumin text-sm text-secondary/80 mb-2 block";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full max-w-md"
      aria-label="Contact form"
    >
      <label className="flex flex-col">
        <span className={labelClass}>{formLabels.salonNameLabel}</span>
        <input
          type="text"
          value={salonName}
          onChange={(e) => setSalonName(e.target.value)}
          className={inputClass}
          placeholder={formLabels.salonNamePlaceholder}
          required
          aria-required
        />
      </label>
      <label className="flex flex-col">
        <span className={labelClass}>{formLabels.ownerNameLabel}</span>
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          className={inputClass}
          placeholder={formLabels.ownerNamePlaceholder}
          required
          aria-required
        />
      </label>
      <label className="flex flex-col">
        <span className={labelClass}>{formLabels.emailLabel}</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder={formLabels.emailPlaceholder}
          required
          aria-required
        />
      </label>
      <label className="flex flex-col">
        <span className={labelClass}>{formLabels.whatsappLabel}</span>
        <input
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inputClass}
          placeholder={formLabels.whatsappPlaceholder}
          aria-required={false}
        />
      </label>
      <label className="flex flex-col">
        <span className={labelClass}>{formLabels.messageLabel}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={`${inputClass} resize-y min-h-[100px]`}
          placeholder={formLabels.messagePlaceholder}
          required
          aria-required
        />
      </label>
      <button
        type="submit"
        className="w-fit font-acumin font-semibold text-primary-dark px-8 py-3 rounded-sm bg-cta-gradient hover:opacity-95 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
        aria-label={formLabels.submitButton}
      >
        {formLabels.submitButton}
      </button>
    </form>
  );
};

export default ContactForm;
