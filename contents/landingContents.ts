import { SupportedLanguages } from "./supportedLanguagesData"


export type LandingContents = Record<SupportedLanguages,{
        hero: {
            headline: [string,string,string],
            headlineTypingSpeed: number,
            description: string,
            ctaText: string,
            backgroundVideo: {
                videoSrc: string
            },
            contact: {
                facebook: string,
                twitter: string
            }
        },
        "what-i-do": {
            heading: string,
            description: string,
            services: Array<{ title: string; tagline: string; imageSrc: string }>
        },
        transformation: {
            heading: string,
            subheading: string,
            before: { label: string; caption: string; imageSrc: string },
            after: { label: string; caption: string; imageSrc: string }
        },
        "full-screen-transition": {
            heading: [string,string],
            imgSrcs: [string,string]
        },
        "trust-positioning": {
            ariaLabel: string,
            brands: Array<{
                name: string,
                tagline?: string,
                variant: "sans-bold" | "serif" | "sans-wide" | "serif-display" | "geometric" | "serif-luxury"
            }>
        },
        "projects": {
            heading: string,
            description: string,
            projects: Array<{
                caption: string,
                videoSrc: string,
                description: string,
                projectLink: string
            }>,
        },
        "get-in-touch": {
            heading: string,
            description: string,
            form: {
                nameLabel: string,
                namePlaceholder: string,
                emailLabel: string,
                emailPlaceholder: string,
                messageLabel: string,
                messagePlaceholder: string,
                submitLabel: string,
                ariaLabel: string
            },
            contacts: [
                {
                    type: string,
                    contact: string
                },
                {
                    type: string,
                    contact: string
                },
                {
                    type: string,
                    contact: string
                }
            ],
            "hand-image-src": string
        },
        "lets-talk-button": {
            name: string,
            link: string
        },
        "testimonials": {
            heading: string,
            prevLabel: string,
            nextLabel: string,
            items: Array<{ quote: string, author: string, role: string, imageSrc: string }>
        },
        "pricing": {
            heading: string,
            subtitle: string,
            prevLabel: string,
            nextLabel: string,
            reassurance: string,
            packages: Array<{
                name: string,
                description: string,
                features: string[],
                ctaText: string,
                ctaLink: string,
                badge?: string
            }>
        }
}>

const whatWeDoImages = {
  cinematic: "/assets/projectThumbnail/faderoom.png",
  websites:
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1400&q=85",
  social: "/assets/projectThumbnail/arbarber.png",
  positioning:
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
} as const;

export const landingContents: LandingContents = {
    "en": {
        hero: {
            headline: ["Digital Presence","for Premium","Barbershops"],
            headlineTypingSpeed: 280,
            description: "A luxury creative studio crafting cinematic brands for elite barbershops.",
            ctaText: "Begin Your Brand",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
            },
            contact: {
                facebook: "https://www.facebook.com/fadezy",
                twitter: "https://x.com/fadezy"
            }
        },
        "what-i-do": {
            heading: "What we do",
            description: "We build luxury barber brands through restraint, visuals, and precision.",
            services: [
                {
                    title: "Cinematic Content",
                    tagline: "Film-grade visuals crafted for elite barbershops.",
                    imageSrc: whatWeDoImages.cinematic
                },
                {
                    title: "Premium Websites",
                    tagline: "Editorial web experiences designed to convert.",
                    imageSrc: whatWeDoImages.websites
                },
                {
                    title: "Social Identity",
                    tagline: "A cohesive luxury presence across every channel.",
                    imageSrc: whatWeDoImages.social
                },
                {
                    title: "Luxury Brand Positioning",
                    tagline: "From first impression to lasting prestige.",
                    imageSrc: whatWeDoImages.positioning
                }
            ]
        },
        transformation: {
            heading: "The transformation",
            subheading: "From generic presence to a refined luxury barber brand.",
            before: {
                label: "Before",
                caption: "Generic barber branding",
                imageSrc: "/assets/home%20page/barber%20saloon%20web.jpg"
            },
            after: {
                label: "After",
                caption: "Premium luxury positioning",
                imageSrc: "/assets/projectThumbnail/fade.png"
            }
        },
        "full-screen-transition": {
            heading: ["Full screen","transition"],
            imgSrcs: ["/assets/pexels-cottonbro-8721339.jpg","/assets/pexels-cottonbro-8721318.jpg"]
        },
        "trust-positioning": {
            ariaLabel: "Barbershop brands we have worked with",
            brands: [
                { name: "Fade Room", variant: "sans-bold" },
                { name: "Hair Master", tagline: "Premium Grooming", variant: "serif-display" },
                { name: "Trendz", variant: "sans-wide" },
                { name: "Nazih", tagline: "Gents Salon", variant: "serif-luxury" },
                { name: "Blade Co", variant: "geometric" },
                { name: "Regent", variant: "serif" },
                { name: "Iron Fade", variant: "sans-bold" },
                { name: "Crown Cut", variant: "serif-luxury" }
            ]
        },
        "projects": {
            heading: "Our work",
            description: "Selected barber brands — editorial, cinematic, built for prestige.",
            projects: [
                {
                    caption: "THE FADE ROOM",
                    videoSrc: "/assets/projectThumbnail/fade.png",
                    description: "Cinematic barbershop presence with refined booking flow.",
                    projectLink: "https://thfaderoom.netlify.app/"
                },
                {
                    caption: "HAIR MASTER",
                    videoSrc: "/assets/projectThumbnail/hairmaster.jpg",
                    description: "Luxury brand storytelling with editorial composition.",
                    projectLink: "https://hairmaste.netlify.app/"
                },
                {
                    caption: "TRENDZ HAIR SALON",
                    videoSrc: "/assets/projectThumbnail/trendz.jpeg",
                    description: "Modern grooming brand with confident digital identity.",
                    projectLink: "https://trendzhairsalon.netlify.app/"
                },
                {
                    caption: "NAZIH GENTS SALON",
                    videoSrc: "/assets/projectThumbnail/nazih saloon.png",
                    description: "Premium gents salon with gallery-led visual hierarchy.",
                    projectLink: "https://nazihsalon.netlify.app/"
                },
       
            ],
        },
        "get-in-touch": {
            heading: "Get in touch",
            description: "Elevate your barbershop brand. We respond with intention.",
            form: {
                nameLabel: "Name",
                namePlaceholder: "Your name",
                emailLabel: "Email",
                emailPlaceholder: "your@email.com",
                messageLabel: "Message",
                messagePlaceholder: "Tell us about your barbershop vision",
                submitLabel: "Send inquiry",
                ariaLabel: "Contact inquiry form"
            },
            contacts: [
                {
                    type: "whatsapp",
                    contact: "+92 323 9675581"
                },
                {
                    type: "instagram",
                    contact: "instagram.com/fadezy.rl"
                },
                {
                    type: "demo",
                    contact: "Get your free demo"
                }
            ],
            "hand-image-src": "/assets/hand.PNG"
        },
        "lets-talk-button": {
            name: "Let’s Talk",
            link: "#get-in-touch"
        },
        "testimonials": {
            heading: "Client words",
            prevLabel: "Previous testimonial",
            nextLabel: "Next testimonial",
            items: [
                { quote: "Fadezy transformed our barbershop into a luxury brand. The presence feels cinematic.", author: "Marcus Reid", role: "The Fade Room", imageSrc: "/assets/pexels-leeloothefirst-7818239.jpg" },
                { quote: "Minimal, confident, premium. Exactly the editorial direction we wanted.", author: "Daniel Cole", role: "Hair Master", imageSrc: "/assets/pexels-cottonbro-8721339.jpg" },
                { quote: "Our digital identity now matches the quality of our craft.", author: "James K.", role: "Nazih Gents Salon", imageSrc: "/assets/pexels-cottonbro-8721318.jpg" }
            ]
        },
        "pricing": {
            heading: "Simple, Transparent Pricing",
            subtitle: "Choose the package that fits your salon's vision.",
            prevLabel: "Previous package",
            nextLabel: "Next package",
            reassurance: "All packages include a free custom preview before payment.",
            packages: [
                {
                    name: "Essential Presence",
                    description: "A polished online foundation for salons ready to make their mark.",
                    features: [
                        "Modern, responsive website",
                        "Contact & location pages",
                        "Social media integration",
                        "Basic SEO setup",
                        "1 month free hosting"
                    ],
                    ctaText: "Get Started",
                    ctaLink: "#get-in-touch"
                },
                {
                    name: "Signature Experience",
                    description: "Our most popular choice for growing salons seeking a standout presence.",
                    features: [
                        "Everything in Essential, plus",
                        "Online booking integration",
                        "Service menu & pricing",
                        "Team & stylist profiles",
                        "Gallery & portfolio",
                        "3 months free hosting"
                    ],
                    ctaText: "Request Free Preview",
                    ctaLink: "#get-in-touch",
                    badge: "Most Popular"
                },
                {
                    name: "Elite Digital Presence",
                    description: "Full-service digital experience for premium salons and chains.",
                    features: [
                        "Everything in Signature, plus",
                        "Multi-location support",
                        "Custom branding & animations",
                        "Premium integrations",
                        "Priority support",
                        "6 months free hosting"
                    ],
                    ctaText: "Get in Touch",
                    ctaLink: "#get-in-touch"
                }
            ]
        }
    },
    
    "ar": {
        hero: {
            headline: ["حضور رقمي","لصالونات","الحلاقة الفاخرة"],
            headlineTypingSpeed: 280,
            description: "استوديو إبداعي فاخر يصنع علامات سينمائية لصالونات الحلاقة الراقية.",
            ctaText: "ابدأ علامتك",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
            },
            contact: {
                facebook: "https://www.facebook.com/fadezy",
                twitter: "https://x.com/fadezy"
            }
        },
        "what-i-do": {
            heading: "ماذا نقدم",
            description: "نبني علامات حلاقة فاخرة عبر البساطة والصورة والدقة.",
            services: [
                {
                    title: "محتوى سينمائي",
                    tagline: "مرئيات بجودة سينمائية لصالونات الحلاقة الراقية.",
                    imageSrc: whatWeDoImages.cinematic
                },
                {
                    title: "مواقع فاخرة",
                    tagline: "تجارب ويب تحريرية مصممة للتحويل.",
                    imageSrc: whatWeDoImages.websites
                },
                {
                    title: "هوية اجتماعية",
                    tagline: "حضور فاخر متسق عبر كل القنوات.",
                    imageSrc: whatWeDoImages.social
                },
                {
                    title: "تموضع علامة فاخر",
                    tagline: "من الانطباع الأول إلى الهيبة الدائمة.",
                    imageSrc: whatWeDoImages.positioning
                }
            ]
        },
        transformation: {
            heading: "التحول",
            subheading: "من حضور عام إلى علامة حلاقة فاخرة ومكرّسة.",
            before: {
                label: "قبل",
                caption: "علامة حلاقة تقليدية",
                imageSrc: "/assets/home%20page/barber%20saloon%20web.jpg"
            },
            after: {
                label: "بعد",
                caption: "تموضع فاخر ومميز",
                imageSrc: "/assets/projectThumbnail/fade.png"
            }
        },
        "full-screen-transition": {
            heading: ["انتقال","ملء الشاشة"],
            imgSrcs: ["/assets/pexels-cottonbro-8721339.jpg","/assets/pexels-cottonbro-8721318.jpg"]
        },
        "trust-positioning": {
            ariaLabel: "علامات صالونات الحلاقة التي عملنا معها",
            brands: [
                { name: "Fade Room", variant: "sans-bold" },
                { name: "Hair Master", tagline: "Premium Grooming", variant: "serif-display" },
                { name: "Trendz", variant: "sans-wide" },
                { name: "Nazih", tagline: "Gents Salon", variant: "serif-luxury" },
                { name: "Blade Co", variant: "geometric" },
                { name: "Regent", variant: "serif" },
                { name: "Iron Fade", variant: "sans-bold" },
                { name: "Crown Cut", variant: "serif-luxury" }
            ]
        },
        "projects": {
            heading: "أعمالنا",
            description: "علامات حلاقة مختارة — تحريرية، سينمائية، مبنية للهيبة.",
            projects: [
                {
                    caption: "قاعة الشخصيات التاريخية",
                    videoSrc: "/assets/projectThumbnail/hall.jpg",
                    description: "موقع تاريخي بتأثيرات 3D وصفوف متحركة، مع صفحة مميزة لكل شخصية.",
                    projectLink: "#"
                },
                {
                    caption: "معرض أعمال V1",
                    videoSrc: "/assets/projectThumbnail/old_portfolio.jpg",
                    description: "معرض أعمال بسيط وسريع مع تصميم أساسي وتأثيرات حركية خفيفة.",
                    projectLink: "#"
                },
                {
                    caption: "How moons slow retreat earth",
                    videoSrc: "/assets/projectThumbnail/moon.jpg",
                    description: "مشروع بصري بتسلسل صور متحرك وتصميم mobile-first.",
                    projectLink: "https://multimedia.scmp.com/native/infographics/article/3131059/how-moons-slow-retreat-earth/"
                },
                {
                    caption: "تطبيق مهام وتقويم",
                    videoSrc: "/assets/projectThumbnail/todo.jpg",
                    description: "تطبيق ويب لإدارة الوقت بتجربة مستخدم واضحة وبسيطة.",
                    projectLink: "#"
                },
                {
                    caption: "أداة تحويل النص",
                    videoSrc: "/assets/projectThumbnail/tools.jpg",
                    description: "إضافة Chrome مجانية لتحويل النص ونسخ الصور والنص من الشاشة.",
                    projectLink: "#"
                }
            ],
        },
        "get-in-touch": {
            heading: "تواصل معنا",
            description: "ارتقِ بعلامة صالون الحلاقة. نرد بعناية ووضوح.",
            form: {
                nameLabel: "الاسم",
                namePlaceholder: "اسمك",
                emailLabel: "البريد الإلكتروني",
                emailPlaceholder: "your@email.com",
                messageLabel: "الرسالة",
                messagePlaceholder: "أخبرنا عن رؤية صالونك",
                submitLabel: "إرسال",
                ariaLabel: "نموذج التواصل"
            },
            contacts: [
                {
                    type: "واتساب",
                    contact: "+92 323 9675581"
                },
                {
                    type: "انستغرام",
                    contact: "instagram.com/fadezy.rl"
                },
                {
                    type: "demo",
                    contact: "احصل على عرض تجريبي مجاني"
                }
            ],
            "hand-image-src": "/assets/hand.PNG"
        },
        "lets-talk-button": {
            name: "لنتحدث",
            link: "#get-in-touch"
        },
        "testimonials": {
            heading: "كلمات العملاء",
            prevLabel: "الشهادة السابقة",
            nextLabel: "الشهادة التالية",
            items: [
                { quote: "حوّلت Fadezy صالوننا إلى علامة فاخرة. الحضور يبدو سينمائياً.", author: "Marcus Reid", role: "The Fade Room", imageSrc: "/assets/pexels-leeloothefirst-7818239.jpg" },
                { quote: "بسيط، واثق، فاخر. بالضبط التوجه التحريري الذي أردناه.", author: "Daniel Cole", role: "Hair Master", imageSrc: "/assets/pexels-cottonbro-8721339.jpg" },
                { quote: "هويتنا الرقمية أصبحت بمستوى جودة حرفتنا.", author: "James K.", role: "Nazih Gents Salon", imageSrc: "/assets/pexels-cottonbro-8721318.jpg" }
            ]
        },
        "pricing": {
            heading: "أسعار بسيطة وشفافة",
            subtitle: "اختر الباقة التي تناسب رؤية صالونك.",
            prevLabel: "الباقة السابقة",
            nextLabel: "الباقة التالية",
            reassurance: "جميع الباقات تشمل معاينة مجانية مخصصة قبل الدفع.",
            packages: [
                {
                    name: "الحضور الأساسي",
                    description: "أساس رقمي أنيق للصالونات الجاهزة لترك بصمتها.",
                    features: [
                        "موقع حديث وسريع الاستجابة",
                        "صفحات التواصل والموقع",
                        "ربط وسائل التواصل",
                        "إعداد أساسي لمحركات البحث",
                        "استضافة شهر مجاني"
                    ],
                    ctaText: "ابدأ الآن",
                    ctaLink: "#get-in-touch"
                },
                {
                    name: "تجربة التوقيع",
                    description: "الخيار الأكثر شعبية للصالونات الطامحة إلى حضور مميز.",
                    features: [
                        "كل ما في الأساسي، بالإضافة إلى",
                        "ربط الحجز أونلاين",
                        "قائمة الخدمات والأسعار",
                        "ملفات الفريق والمصففين",
                        "معرض ومحفظة أعمال",
                        "3 أشهر استضافة مجانية"
                    ],
                    ctaText: "اطلب معاينة مجانية",
                    ctaLink: "#get-in-touch",
                    badge: "الأكثر طلباً"
                },
                {
                    name: "الحضور الرقمي الفاخر",
                    description: "تجربة رقمية شاملة للصالونات الفاخرة والسلاسل.",
                    features: [
                        "كل ما في التوقيع، بالإضافة إلى",
                        "دعم الفروع المتعددة",
                        "هوية بصرية وتأثيرات مخصصة",
                        "تكاملات متميزة",
                        "دعم أولوية",
                        "6 أشهر استضافة مجانية"
                    ],
                    ctaText: "تواصل معنا",
                    ctaLink: "#get-in-touch"
                }
            ]
        }
    }
} as const