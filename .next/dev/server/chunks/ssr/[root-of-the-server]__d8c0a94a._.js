module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/apps/portfolio/src/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCALES",
    ()=>LOCALES,
    "dictionary",
    ()=>dictionary,
    "localeLabels",
    ()=>localeLabels
]);
const LOCALES = [
    "en",
    "ar",
    "ru"
];
const localeLabels = {
    en: "English",
    ar: "العربية",
    ru: "Русский"
};
const dictionary = {
    en: {
        nav: {
            home: "Home",
            services: "Services",
            projects: "Projects",
            about: "About",
            contact: "Contact"
        },
        footer: "© 2026 Al-Wazir Muhamed Yahya · Built with Next.js + Tailwind",
        hero: {
            Brand: "ALwazir Mohammed Yahya",
            greetingLead: "Hi! I'm",
            name: "Muhamed",
            role: "Full-Stack & Java Developer",
            desc: "Building scalable systems, clean APIs, and real-world applications that companies can depend on.",
            ctaTalk: "Let's Talk",
            ctaCv: "Download CV",
            years: "Years of experience",
            delivered: "Projects delivered",
            mastered: "Technologies mastered",
            spokenTitle: "Languages I Speak",
            spoken: [
                "Arabic (Native)",
                "Russian (Advanced)",
                "English (Professional)"
            ]
        },
        services: {
            kicker: "Core Expertise",
            titleA: "WHAT I'M",
            titleB: "STRONG AT",
            desc: "These are not random services. This section shows what companies can hire me for immediately based on real shipped work.",
            allProjects: "All Projects",
            cards: [
                {
                    title: "Android Music Apps (Java + XML)",
                    body: "Published mobile app experience with Java/XML architecture, UI flows, and release-ready delivery for Google Play.",
                    cta: "Play Store Work"
                },
                {
                    title: "Next.js Full-Stack Web",
                    body: "End-to-end systems using Next.js, JavaScript, HTML, CSS, APIs, and clean code structures for maintainable products.",
                    cta: "See Web Projects"
                },
                {
                    title: "Backend, Docker & Architecture",
                    body: "Java backend APIs, debugging, performance fixes, and Dockerized deployments with strong project structure and delivery discipline.",
                    cta: "Architecture Proof"
                }
            ]
        },
        portfolio: {
            kicker: "Let's have a look at my",
            title: "portfolio",
            desc: "Company case studies, personal projects with full GitHub code, and live demos.",
            tabs: [
                "All",
                "Mobile App",
                "Full-Stack",
                "Java Backend",
                "Docker"
            ]
        },
        projectsPage: {
            kicker: "Portfolio",
            title: "Projects & Case Studies",
            desc: "Company work is presented as architecture case studies (no source code). Personal projects include full GitHub code and live demos you can run.",
            tabs: [
                "All",
                "Mobile App",
                "Full-Stack",
                "Java Backend",
                "Docker"
            ]
        },
        aboutPage: {
            kicker: "About",
            title: "Product-minded engineer with backend strength",
            desc: "I work across frontend, backend, and deployment with strongest focus on Java backend systems, full-stack applications, and production quality.",
            cards: [
                {
                    title: "Backend First",
                    body: "Java Spring Boot, clean architecture, REST APIs, tests, PostgreSQL, and Docker-ready deployments."
                },
                {
                    title: "Full-Stack",
                    body: "Next.js, Node.js, full database design, auth, payments, and real-time features end-to-end."
                },
                {
                    title: "Repo Modernization",
                    body: "Taking existing GitHub projects and making them production-ready: debugging, UI/UX, tests, Docker."
                }
            ],
            howTitle: "How I work",
            bullets: [
                "I prioritize measurable outcomes: faster pages, fewer bugs, stronger architecture, better UX.",
                "I build with documentation, test coverage, and deployability in mind from the start.",
                "I take ownership of entire features, not just isolated tasks.",
                "I continuously grow my public GitHub profile with real projects."
            ]
        },
        contactPage: {
            kicker: "Contact",
            title: "Let's build something valuable",
            desc: "Open to backend-focused roles, full-stack product engineering, and contract opportunities.",
            cards: [
                {
                    title: "Email",
                    body: "alwazirm.business@gmail.com",
                    cta: "Send Email",
                    href: "mailto:alwazirm.business@gmail.com"
                },
                {
                    title: "GitHub",
                    body: "See my public repos, commits, and project history.",
                    cta: "View GitHub",
                    href: "https://github.com/alwazirmbusiness-dev"
                },
                {
                    title: "LinkedIn",
                    body: "Professional profile, experience, and endorsements.",
                    cta: "Connect",
                    href: "https://linkedin.com/in/alwazirtech-dev"
                }
            ]
        },
        projectCard: {
            company: "Company Case Study",
            personal: "Personal Project"
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            services: "الخدمات",
            projects: "المشاريع",
            about: "نبذة",
            contact: "تواصل"
        },
        footer: "© 2026 محمد يحيى · تم البناء باستخدام Next.js + Tailwind",
        hero: {
            Brand: "محمد يحيى الوزير",
            greetingLead: "مرحباً! أنا",
            name: "محمد",
            role: "مطور فل ستاك وجافا",
            desc: "أبني أنظمة قابلة للتوسع وواجهات برمجية نظيفة وتطبيقات عملية يمكن للشركات الاعتماد عليها.",
            ctaTalk: "لنتحدث",
            ctaCv: "تحميل السيرة الذاتية",
            years: "سنوات الخبرة",
            delivered: "مشاريع منجزة",
            mastered: "تقنيات أتقنها",
            spokenTitle: "اللغات التي أتحدثها",
            spoken: [
                "العربية (اللغة الأم)",
                "الروسية (متقدم)",
                "الإنجليزية (احترافي)"
            ]
        },
        services: {
            kicker: "الخبرات الأساسية",
            titleA: "ما الذي",
            titleB: "أتقنه بقوة",
            desc: "هذه ليست خدمات عشوائية. هذا القسم يوضح ما يمكن للشركات توظيفي عليه مباشرة بناءً على أعمال حقيقية.",
            allProjects: "كل المشاريع",
            cards: [
                {
                    title: "تطبيقات موسيقى أندرويد (Java + XML)",
                    body: "خبرة في نشر تطبيقات موبايل بهيكلية Java/XML وتدفقات واجهة مستخدم جاهزة للإطلاق على Google Play.",
                    cta: "أعمال متجر Play"
                },
                {
                    title: "تطوير ويب فل ستاك بـ Next.js",
                    body: "أنظمة متكاملة باستخدام Next.js وJavaScript وHTML وCSS وواجهات API مع هيكلة كود قابلة للصيانة.",
                    cta: "مشاريع الويب"
                },
                {
                    title: "باك إند وDocker وهندسة النظام",
                    body: "واجهات Java backend، حل مشاكل الأداء، ونشر بالحاويات Docker مع تنظيم مشروع قوي.",
                    cta: "إثبات معماري"
                }
            ]
        },
        portfolio: {
            kicker: "دعنا نلقي نظرة على",
            title: "أعمالي",
            desc: "دراسات حالة لمشاريع الشركات، ومشاريع شخصية بكود كامل على GitHub، وروابط تشغيل مباشرة.",
            tabs: [
                "الكل",
                "تطبيق موبايل",
                "فل ستاك",
                "جافا باك إند",
                "Docker"
            ]
        },
        projectsPage: {
            kicker: "المعرض",
            title: "المشاريع ودراسات الحالة",
            desc: "أعمال الشركات تعرض كدراسات معمارية دون كود. المشاريع الشخصية تحتوي كود GitHub كامل وروابط تشغيل.",
            tabs: [
                "الكل",
                "تطبيق موبايل",
                "فل ستاك",
                "جافا باك إند",
                "Docker"
            ]
        },
        aboutPage: {
            kicker: "نبذة",
            title: "مهندس منتجات بعقلية قوية في الباك إند",
            desc: "أعمل على الواجهة الأمامية والخلفية والنشر مع تركيز قوي على أنظمة Java backend وتطبيقات فل ستاك بجودة إنتاجية.",
            cards: [
                {
                    title: "أولوية للباك إند",
                    body: "Java Spring Boot، معمارية نظيفة، REST APIs، اختبارات، PostgreSQL، ونشر Docker."
                },
                {
                    title: "فل ستاك",
                    body: "Next.js وNode.js وتصميم قواعد البيانات والمصادقة والدفع والميزات اللحظية."
                },
                {
                    title: "تحديث المشاريع",
                    body: "تحويل مشاريع GitHub الحالية إلى مستوى إنتاجي: إصلاحات، تحسين واجهة، اختبارات، Docker."
                }
            ],
            howTitle: "أسلوبي في العمل",
            bullets: [
                "أركز على نتائج قابلة للقياس: سرعة أعلى، أخطاء أقل، معمارية أقوى وتجربة استخدام أفضل.",
                "أبني مع التوثيق والاختبارات وقابلية النشر منذ البداية.",
                "أتحمل مسؤولية الميزة بالكامل وليس جزءاً صغيراً فقط.",
                "أطور ملفي العام على GitHub بشكل مستمر بمشاريع حقيقية."
            ]
        },
        contactPage: {
            kicker: "تواصل",
            title: "لنصنع شيئاً ذا قيمة",
            desc: "منفتح لفرص عمل تركز على الباك إند، والهندسة الكاملة للمنتجات، والتعاقدات.",
            cards: [
                {
                    title: "البريد",
                    body: "alwazirm.business@gmail.com",
                    cta: "إرسال بريد",
                    href: "mailto:alwazirm.business@gmail.com"
                },
                {
                    title: "GitHub",
                    body: "شاهد مستودعاتي العامة وسجل التطوير والالتزامات.",
                    cta: "عرض GitHub",
                    href: "https://github.com/alwazirmbusiness-dev"
                },
                {
                    title: "LinkedIn",
                    body: "الملف المهني والخبرة والتوصيات.",
                    cta: "تواصل",
                    href: "https://linkedin.com/in/alwazirtech-dev"
                }
            ]
        },
        projectCard: {
            company: "دراسة حالة لشركة",
            personal: "مشروع شخصي"
        }
    },
    ru: {
        nav: {
            home: "Главная",
            services: "Услуги",
            projects: "Проекты",
            about: "Обо мне",
            contact: "Контакты"
        },
        footer: "© 2026 Аль-Вазир Мухамед Яхья · Создано на Next.js + Tailwind",
        hero: {
            Brand: "Аль-Вазир Мухамед Яхья",
            greetingLead: "Привет! Я",
            name: "Мухамед",
            role: "Full-Stack и Java разработчик",
            desc: "Создаю масштабируемые системы, чистые API и прикладные продукты, на которые компании могут опираться.",
            ctaTalk: "Связаться",
            ctaCv: "Скачать CV",
            years: "Лет опыта",
            delivered: "Проектов выполнено",
            mastered: "Технологий освоено",
            spokenTitle: "Языки, на которых говорю",
            spoken: [
                "Арабский (родной)",
                "Русский (продвинутый)",
                "Английский (профессиональный)"
            ]
        },
        services: {
            kicker: "Ключевая экспертиза",
            titleA: "В ЧЕМ Я",
            titleB: "СИЛЕН",
            desc: "Это не случайный список услуг. Здесь показано, за что меня можно нанимать уже сейчас на основе реальных проектов.",
            allProjects: "Все проекты",
            cards: [
                {
                    title: "Android музыкальные приложения (Java + XML)",
                    body: "Опыт публикации мобильного приложения с архитектурой Java/XML и продуманным UX в Google Play.",
                    cta: "Работы в Play Store"
                },
                {
                    title: "Full-Stack веб на Next.js",
                    body: "Полный цикл: Next.js, JavaScript, HTML, CSS, API и чистая структура кода для поддержки проекта.",
                    cta: "Веб-проекты"
                },
                {
                    title: "Backend, Docker и архитектура",
                    body: "Java backend API, отладка, улучшение производительности и Docker-деплой с грамотной структурой проекта.",
                    cta: "Архитектурные кейсы"
                }
            ]
        },
        portfolio: {
            kicker: "Давайте посмотрим на",
            title: "мои работы",
            desc: "Кейсы по корпоративным проектам, личные проекты с открытым кодом на GitHub и live-демо.",
            tabs: [
                "Все",
                "Мобильное",
                "Full-Stack",
                "Java Backend",
                "Docker"
            ]
        },
        projectsPage: {
            kicker: "Портфолио",
            title: "Проекты и кейсы",
            desc: "Корпоративные работы представлены как архитектурные кейсы без исходников. Личные проекты включают полный код и live-демо.",
            tabs: [
                "Все",
                "Мобильное",
                "Full-Stack",
                "Java Backend",
                "Docker"
            ]
        },
        aboutPage: {
            kicker: "Обо мне",
            title: "Инженер с продуктовым мышлением и сильным backend",
            desc: "Работаю с фронтендом, бэкендом и деплоем, с сильным фокусом на Java backend, full-stack приложения и production-качество.",
            cards: [
                {
                    title: "Backend в приоритете",
                    body: "Java Spring Boot, чистая архитектура, REST API, тесты, PostgreSQL и Docker-деплой."
                },
                {
                    title: "Full-Stack",
                    body: "Next.js, Node.js, проектирование БД, авторизация, платежи и real-time функции."
                },
                {
                    title: "Модернизация репозиториев",
                    body: "Довожу существующие GitHub-проекты до production: багфиксы, UI/UX, тесты, Docker."
                }
            ],
            howTitle: "Как я работаю",
            bullets: [
                "Фокус на измеримом результате: быстрее страницы, меньше багов, сильнее архитектура, лучше UX.",
                "Сразу закладываю документацию, тесты и готовность к деплою.",
                "Беру ответственность за фичу целиком, а не только за узкий кусок.",
                "Постоянно усиливаю публичный GitHub реальными проектами."
            ]
        },
        contactPage: {
            kicker: "Контакты",
            title: "Давайте сделаем что-то ценное",
            desc: "Открыт к backend-позициям, full-stack ролям и контрактным задачам.",
            cards: [
                {
                    title: "Email",
                    body: "alwazirm.business@gmail.com",
                    cta: "Написать",
                    href: "mailto:alwazirm.business@gmail.com"
                },
                {
                    title: "GitHub",
                    body: "Публичные репозитории, коммиты и история разработки.",
                    cta: "Открыть GitHub",
                    href: "https://github.com/alwazirmbusiness-dev"
                },
                {
                    title: "LinkedIn",
                    body: "Профессиональный профиль, опыт и рекомендации.",
                    cta: "Связаться",
                    href: "https://linkedin.com/in/alwazirtech-dev"
                }
            ]
        },
        projectCard: {
            company: "Кейс компании",
            personal: "Личный проект"
        }
    }
};
}),
"[project]/apps/portfolio/src/contexts/I18nContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = "portfolio-locale";
function I18nProvider({ children }) {
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (saved && [
            "en",
            "ar",
            "ru"
        ].includes(saved)) {
            setLocaleState(saved);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.localStorage.setItem(STORAGE_KEY, locale);
        document.documentElement.lang = locale;
        document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }, [
        locale
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            locale,
            setLocale: (next)=>setLocaleState(next)
        }), [
        locale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/portfolio/src/contexts/I18nContext.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
function useI18n() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider");
    }
    return {
        ...ctx,
        t: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dictionary"][ctx.locale]
    };
}
}),
"[project]/apps/portfolio/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/lib/i18n.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/contexts/I18nContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LanguageSwitcher() {
    const { locale, setLocale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return ()=>document.removeEventListener("mousedown", handler);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lang-switcher",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "lang-trigger",
                onClick: ()=>setOpen(!open),
                "aria-label": "Change language",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 12h20"
                        }, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                        }, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lang-dropdown",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCALES"].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `lang-option${locale === l ? " active" : ""}`,
                        onClick: ()=>{
                            setLocale(l);
                            setOpen(false);
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localeLabels"][l]
                    }, l, false, {
                        fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portfolio/src/components/LanguageSwitcher.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/portfolio/src/components/SiteChrome.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteChrome",
    ()=>SiteChrome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/contexts/I18nContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function SiteChrome({ children }) {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeMenu = ()=>setMenuOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "top-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "brand",
                        children: t.hero.Brand
                    }, void 0, false, {
                        fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `nav-links${menuOpen ? " open" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: closeMenu,
                                children: t.nav.home
                            }, void 0, false, {
                                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#services",
                                onClick: closeMenu,
                                children: t.nav.services
                            }, void 0, false, {
                                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                onClick: closeMenu,
                                children: t.nav.projects
                            }, void 0, false, {
                                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                onClick: closeMenu,
                                children: t.nav.about
                            }, void 0, false, {
                                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "btn-contact",
                                onClick: closeMenu,
                                children: t.nav.contact
                            }, void 0, false, {
                                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-lang-mobile",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                    fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-right-desktop",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-lang-topbar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-toggle",
                        onClick: ()=>setMenuOpen(!menuOpen),
                        "aria-label": "Toggle menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `hamburger${menuOpen ? " active" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-overlay",
                onClick: closeMenu
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                lineNumber: 47,
                columnNumber: 20
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "site-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "site-shell",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t.footer
                    }, void 0, false, {
                        fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/SiteChrome.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8c0a94a._.js.map