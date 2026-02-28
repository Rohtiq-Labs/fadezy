import { SupportedLanguages } from "./supportedLanguagesData"


export type LandingContents = Record<SupportedLanguages,{
        hero: {
            headline: [string,string,string],
            headlineTypingSpeed: number,
            description: string,
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
            "3d-hover-card": {
                caption: string,
                imgSrc: string
            },
            "image-parallax": {
                caption: string,
                imgSrc: string
            },
            "parallax-scrolling":{
                caption: string,
                description: string,
                imgSrcs: [string,string,string],
                imgsCaptions: [string,string,string]
            }
        },
        "full-screen-transition": {
            heading: [string,string],
            imgSrcs: [string,string]
        },
        "projects": {
            heading: string,
            description: string,
            projects: [
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                }
            ],
        },
        "services": {
            heading: string,
            description: string,
            services: [
                {
                    caption: string,
                    description: string
                },
                {
                    caption: string,
                    description: string
                },
                {
                    caption: string,
                    description: string
                },
                {
                    caption: string,
                    description: string
                },
            ]
        },
        "get-in-touch": {
            heading: string,
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

export const landingContents: LandingContents = {
    "en": {
        hero: {
            headline: ["Modern","Digital Presence","For Your Salon"],
            headlineTypingSpeed: 140,
            description: "I’m We help salons and barbershops grow with modern websites, online bookings, and brand presence. Get your free demo today.",
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
            description: "We help salons and barbershops grow with modern websites, online bookings, and brand presence.",
            "3d-hover-card": {
                caption: "Modern salon websites",
                imgSrc: "/assets/home%20page/barber%20saloon%20web.jpg"
            },
            "image-parallax": {
                caption: "Brand presence",
                imgSrc: "/assets/home%20page/Brand%20presence.jpg"
            },
            "parallax-scrolling":{
                caption: "More ways we help you stand out.",
                description: "From online booking to social presence, we create a dynamic experience that keeps your clients engaged and coming back.",
                imgSrcs: ["/assets/lennon-cheng-yAeUPmbyS-0-unsplash.jpg","/assets/valentin-beauvais-yVUQlyRlJSw-unsplash.jpg","/assets/joel-fulgencio-01fAtHwYqo0-unsplash.jpg"],
                imgsCaptions: ["slow", "fast","speedy"]
            }
        },
        "full-screen-transition": {
            heading: ["Full screen","transition"],
            imgSrcs: ["/assets/pexels-cottonbro-8721339.jpg","/assets/pexels-cottonbro-8721318.jpg"]
        },
        "projects": {
            heading: "Our work",
            description: "Barbershop and salon websites we've built. Modern, fast, and built to convert.",
            projects: [
                {
                    caption: "THE FADE ROOM",
                    videoSrc: "/assets/projectThumbnail/fade.png",
                    description: "Here’A sleek barbershop site with online booking, service menu, and gallery.",
                    projectLink: "#"
                },
                {
                    caption: "HAIR MASTER",
                    videoSrc: "/assets/projectThumbnail/hairmaster.jpg",
                    description: "Here’s a Premium salon website with brand storytelling, team section, and easy booking integration.’",
                    projectLink: "#"
                },
                {
                    caption: "TRENDZ HAIR SALON",
                    videoSrc: "/assets/projectThumbnail/trendz.jpeg",
                    description: "Modern barbershop site with services, pricing, and WhatsApp contact. Mobile-first for clients on the go.",
                    projectLink: "#"
                },
                {
                    caption: "NAZIH GENTS SALON",
                    videoSrc: "/assets/projectThumbnail/nazih.png",
                    description: "Here’Salon website with portfolio gallery, stylist profiles, and online appointment booking.",
                    projectLink: "#"
                },
       
            ],
        },
        "services": {
            heading: "Services",
            description: "We help salons and barbershops grow with modern websites, online bookings, and brand presence.",
            services: [
                {
                    caption: "Salon & Barbershop Websites",
                    description: "Clean, modern websites designed for your brand. Mobile-friendly so clients can find you and book on any device."
                },
                {
                    caption: "Online Booking",
                    description: "Integrate booking so clients can schedule appointments 24/7. Fewer no-shows, more bookings."
                },
                {
                    caption: "Brand Presence",
                    description: "From logo to socials, we help you look professional and stand out in your market."
                },
                {
                    caption: "Hosting & Support",
                    description: "We host and maintain your site so you can focus on your clients. Fast, secure, and always up."
                },
            ]
        },
        "get-in-touch": {
            heading: "Get in touch",
            contacts: [
                {
                    type: "email",
                    contact: "hello@fadezy.com"
                },
                {
                    type: "whatsapp",
                    contact: "+1 234 567 8900"
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
            heading: "What our clients say",
            prevLabel: "Previous testimonial",
            nextLabel: "Next testimonial",
            items: [
                { quote: "FADEZY gave our barbershop a modern site and online booking. Clients love it.", author: "Alex M.", role: "Classic Cuts Barbershop", imageSrc: "/assets/pexels-leeloothefirst-7818239.jpg" },
                { quote: "Professional, fast, and they really understand the salon business.", author: "Sarah L.", role: "Luxe Hair Studio", imageSrc: "/assets/pexels-cottonbro-8721339.jpg" },
                { quote: "Our new website brings in more bookings. Highly recommend.", author: "James K.", role: "The Gentleman's Salon", imageSrc: "/assets/pexels-cottonbro-8721318.jpg" }
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
            headline: ["حضور","رقمي حديث","لصالونك"],
            headlineTypingSpeed: 200,
            description: "نساعد الصالونات ومحلات الحلاقة على النمو عبر مواقع حديثة وحجوزات أونلاين ووجود علامة تجارية. احصل على عرض تجريبي مجاني اليوم.",
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
            description: "نساعد الصالونات ومحلات الحلاقة على النمو عبر مواقع حديثة وحجوزات أونلاين ووجود علامة تجارية.",
            "3d-hover-card": {
                caption: "مواقع صالونات حديثة",
                imgSrc: "/assets/home%20page/barber%20saloon%20web.jpg"
            },
            "image-parallax": {
                caption: "الوجود والعلامة التجارية",
                imgSrc: "/assets/home%20page/Brand%20presence.jpg"
            },
            "parallax-scrolling":{
                caption: "المزيد من الطرق لتميزك.",
                description: "من الحجز أونلاين إلى التواجد على وسائل التواصل، نخلق تجربة ديناميكية تبقي عملاءك مهتمين وعائدين.",
                imgSrcs: ["/assets/lennon-cheng-yAeUPmbyS-0-unsplash.jpg","/assets/valentin-beauvais-yVUQlyRlJSw-unsplash.jpg","/assets/joel-fulgencio-01fAtHwYqo0-unsplash.jpg"],
                imgsCaptions: ["بطيء", "سريع", "سريع جداً"]
            }
        },
        "full-screen-transition": {
            heading: ["انتقال","ملء الشاشة"],
            imgSrcs: ["/assets/pexels-cottonbro-8721339.jpg","/assets/pexels-cottonbro-8721318.jpg"]
        },
        "projects": {
            heading: "أعمالنا",
            description: "بعض أعمالنا السابقة في مواقع وصالات وحلول رقمية للصالونات ومحلات الحلاقة.",
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
        "services": {
            heading: "الخدمات",
            description: "نقدم مجموعة خدمات رقمية من بناء العلامة التجارية إلى أتمتة العمل.",
            services: [
                {
                    caption: "تصميم الويب",
                    description: "نصمم مواقع وواجهات أنيقة وسهلة الاستخدام وسريعة الاستجابة."
                },
                {
                    caption: "تطوير الويب",
                    description: "نبني واجهات حديثة باستخدام Next.js وReact وTypeScript ومكونات قابلة لإعادة الاستخدام."
                },
                {
                    caption: "تطوير إضافات Chrome",
                    description: "نساعدك في أتمتة المهام المتكررة على الويب وتوفير وقتك."
                },
                {
                    caption: "استضافة الويب وCloudflare",
                    description: "نستضيف موقعك على مزودين موثوقين ونضبط Cloudflare للسرعة والأمان."
                },
            ]
        },
        "get-in-touch": {
            heading: "تواصل معنا",
            contacts: [
                {
                    type: "email",
                    contact: "hello@fadezy.com"
                },
                {
                    type: "whatsapp",
                    contact: "+1 234 567 8900"
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
            heading: "آراء العملاء",
            prevLabel: "الشهادة السابقة",
            nextLabel: "الشهادة التالية",
            items: [
                { quote: "صممت FADEZY لنا موقعاً حديثاً وحجوزات أونلاين، العملاء سعداء.", author: "Alex M.", role: "Classic Cuts Barbershop", imageSrc: "/assets/pexels-leeloothefirst-7818239.jpg" },
                { quote: "احترافية وسرعة وفهم حقيقي لقطاع الصالونات.", author: "Sarah L.", role: "Luxe Hair Studio", imageSrc: "/assets/pexels-cottonbro-8721339.jpg" },
                { quote: "الموقع الجديد زاد الحجوزات، ننصح به بشدة.", author: "James K.", role: "The Gentleman's Salon", imageSrc: "/assets/pexels-cottonbro-8721318.jpg" }
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