import { Metadata } from "next";

export const metadataTags: Metadata = {
  title: "Fadezy | Digital Agency for Barbershops & Salons",
  description: "We help salons and barbershops grow with modern websites, online bookings, and brand presence. Get your free demo today.",
  keywords: ["digital agency", "barbershop", "salon", "website", "online booking", "brand presence", "barbershop website", "salon marketing"],
  publisher: "Fadezy",
  authors: [{ name: "Fadezy", url: "https://fadezy.com" }],
  robots: "index, follow",
  icons: {
    icon: "/assets/icon.png",
    apple: "/assets/icon.png"
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://fadezy.com",
    languages: {
      en: "en-US",
      ar: "ar"
    }
  },
  category: "business",
  metadataBase: new URL("https://fadezy.com"),
  openGraph: {
    siteName: "Fadezy",
    type: "website",
    title: "Fadezy | Digital Agency for Barbershops & Salons",
    description: "We help salons and barbershops grow with modern websites, online bookings, and brand presence.",
    images: [{
      url: "/assets/thumbnail.png",
      type: "image/png",
      width: "1920",
      height: "1080",
    }],
    url: "https://fadezy.com",
    locale: "en_US",
    emails: "hello@fadezy.com",
    phoneNumbers: "+1234567890",
  },
  twitter: {
    site: "@fadezy",
    creator: "@fadezy",
    card: "summary_large_image",
    title: "Fadezy | Digital Agency for Barbershops & Salons",
    description: "We help salons and barbershops grow with modern websites, online bookings, and brand presence.",
    images: "/assets/thumbnail.png",
  }
};
