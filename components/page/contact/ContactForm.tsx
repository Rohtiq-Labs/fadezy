"use client";

import { contactContents, contactWhatsAppUrl } from "@/contents/contactContents";
import { useCurrentLanguages } from "@/contents/languageSupportHooks";
import { cn } from "@/lib/tailwind/cn";
import { FC, FormEvent, useState } from "react";

const inputBase = cn(
  "w-full bg-transparent border-0 border-b border-brand-border",
  "py-4 font-acumin-wide-light text-[15px] text-brand-text",
  "placeholder:text-brand-text-muted/60",
  "transition-colors duration-500 ease-out",
  "focus:outline-none focus:border-brand-text hover:border-brand-text/50"
);

const labelBase =
  "font-blinker text-[10px] uppercase tracking-[0.2em] text-brand-text-muted mb-2 block";

const ContactForm: FC = () => {
  const lang = useCurrentLanguages();
  const form = contactContents[lang].form;
  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Fadezy Inquiry\n\nName: ${name}\nBarbershop: ${shopName}\nEmail: ${email}\nInstagram: ${instagram}\n\nLooking for:\n${inquiry}`
    );
    window.location.href = `${contactWhatsAppUrl}?text=${text}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-[clamp(28px,calc(((100vw-1024px)/896*12)+28px),40px)] w-full max-w-[min(640px,100%)]"
      aria-label={form.heading}
    >
      <label className="flex flex-col">
        <span className={labelBase}>{form.nameLabel}</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputBase}
          placeholder={form.namePlaceholder}
          required
          autoComplete="name"
        />
      </label>
      <label className="flex flex-col">
        <span className={labelBase}>{form.shopLabel}</span>
        <input
          type="text"
          name="barbershop"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
          className={inputBase}
          placeholder={form.shopPlaceholder}
          required
        />
      </label>
      <label className="flex flex-col">
        <span className={labelBase}>{form.emailLabel}</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputBase}
          placeholder={form.emailPlaceholder}
          required
          autoComplete="email"
        />
      </label>
      <label className="flex flex-col">
        <span className={labelBase}>{form.instagramLabel}</span>
        <input
          type="text"
          name="instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          className={inputBase}
          placeholder={form.instagramPlaceholder}
        />
      </label>
      <label className="flex flex-col">
        <span className={labelBase}>{form.inquiryLabel}</span>
        <textarea
          name="inquiry"
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          rows={3}
          className={cn(inputBase, "resize-none min-h-[100px]")}
          placeholder={form.inquiryPlaceholder}
          required
        />
      </label>
      <button
        type="submit"
        className={cn(
          "self-start mt-4 min-h-[48px] px-8 py-3",
          "font-acumin-wide-light text-[13px] uppercase tracking-[0.18em]",
          "border border-brand-text/30 text-brand-text",
          "transition-all duration-500 ease-out",
          "hover:bg-brand-text hover:text-brand-bg",
          "focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-text"
        )}
        aria-label={form.submitButton}
      >
        {form.submitButton}
      </button>
    </form>
  );
};

export default ContactForm;
