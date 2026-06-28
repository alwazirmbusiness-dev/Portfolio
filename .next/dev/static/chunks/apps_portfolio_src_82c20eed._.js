(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/portfolio/src/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectCard",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/contexts/I18nContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ProjectCard({ project }) {
    _s();
    const { locale, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "project-card animate-rise",
        style: {
            animationDelay: "120ms"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "project-card-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `project-badge ${project.type === "company" ? "company" : "personal"}`,
                        children: project.type === "company" ? t.projectCard.company : t.projectCard.personal
                    }, void 0, false, {
                        fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: project.title[locale]
                    }, void 0, false, {
                        fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "project-summary",
                children: project.summary[locale]
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "stack-list",
                children: project.stack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: tech
                    }, tech, false, {
                        fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "impact-list",
                children: project.impact[locale].map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: point
                    }, point, false, {
                        fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "project-links",
                children: project.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        target: "_blank",
                        rel: "noreferrer",
                        children: link.label
                    }, link.label, false, {
                        fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/portfolio/src/components/ProjectCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "L8/ofCq4zCnNFFjXim76Tsio/Mk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/portfolio/src/lib/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        slug: "google-play-music-app",
        title: {
            en: "Google Play Music App",
            ar: "تطبيق موسيقى على Google Play",
            ru: "Музыкальное приложение в Google Play"
        },
        type: "personal",
        summary: {
            en: "Mobile music application built with Java and XML, focused on reliable playback UX, clean navigation, and production delivery.",
            ar: "تطبيق موسيقى للموبايل مبني بـ Java وXML مع تركيز على تجربة تشغيل موثوقة وتنقل واضح وجودة جاهزة للإطلاق.",
            ru: "Мобильное музыкальное приложение на Java и XML с упором на надежное воспроизведение, удобную навигацию и production-качество."
        },
        stack: [
            "Java",
            "XML",
            "Android",
            "UI/UX",
            "Google Play"
        ],
        impact: {
            en: [
                "Published a real mobile product to Google Play",
                "Implemented maintainable code structure and reusable UI patterns",
                "Improved app usability through practical debugging and flow refinement"
            ],
            ar: [
                "نشر منتج موبايل حقيقي على Google Play",
                "تنفيذ هيكل كود قابل للصيانة وأنماط واجهة قابلة لإعادة الاستخدام",
                "تحسين سهولة الاستخدام عبر تصحيح عملي وتطوير تدفقات التطبيق"
            ],
            ru: [
                "Опубликован реальный мобильный продукт в Google Play",
                "Реализована поддерживаемая структура кода и переиспользуемые UI-паттерны",
                "Улучшен UX за счет практичной отладки и оптимизации пользовательских сценариев"
            ]
        },
        links: [
            {
                label: "Google Play",
                href: "https://play.google.com/store/apps"
            },
            {
                label: "GitHub",
                href: "https://github.com/alwazirmbusiness-dev"
            }
        ]
    },
    {
        slug: "restaurant-qr-system",
        title: {
            en: "Restaurant QR Order & Payment Platform",
            ar: "منصة طلب ودفع المطاعم عبر QR",
            ru: "Платформа QR-заказов и оплат для ресторанов"
        },
        type: "company",
        summary: {
            en: "Multi-venue ordering and payment platform with real-time kitchen workflow and role-based admin operations.",
            ar: "منصة متعددة الفروع للطلبات والدفع مع تدفق مطبخ لحظي وإدارة صلاحيات حسب الدور.",
            ru: "Платформа заказов и платежей для нескольких точек с real-time workflow кухни и ролевой админ-панелью."
        },
        stack: [
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Docker",
            "Yookassa",
            "Stripe"
        ],
        impact: {
            en: [
                "Handled multi-venue workflows and live kitchen updates",
                "Improved session reliability and checkout completion",
                "Delivered secure payment flows and reconciliation"
            ],
            ar: [
                "إدارة تدفقات العمل متعددة الفروع وتحديثات المطبخ المباشرة",
                "تحسين استمرارية الجلسات ورفع إتمام عملية الدفع",
                "تنفيذ مسارات دفع آمنة وآليات مطابقة مالية"
            ],
            ru: [
                "Реализованы процессы для нескольких заведений и live-обновления кухни",
                "Повышена стабильность сессий и завершение checkout",
                "Внедрены безопасные платежные сценарии и сверка транзакций"
            ]
        },
        links: [
            {
                label: "Case Study",
                href: "#case-study"
            },
            {
                label: "Screenshots",
                href: "#screenshots"
            }
        ]
    },
    {
        slug: "java-payment-api",
        title: {
            en: "Java Payment API",
            ar: "واجهة دفع Java API",
            ru: "Java Payment API"
        },
        type: "personal",
        summary: {
            en: "Personal Spring Boot application focused on payment orchestration, validation, testing, and production-ready architecture.",
            ar: "تطبيق Spring Boot شخصي يركز على تنسيق عمليات الدفع والتحقق والاختبارات ومعمارية جاهزة للإنتاج.",
            ru: "Личное приложение на Spring Boot с фокусом на оркестрацию платежей, валидацию, тесты и production-архитектуру."
        },
        stack: [
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "JUnit",
            "Docker"
        ],
        impact: {
            en: [
                "Layered architecture with strong validation and error handling",
                "Integration tests and CI pipeline for release confidence",
                "Ready for live deployment and demo usage"
            ],
            ar: [
                "معمارية طبقية مع تحقق قوي ومعالجة أخطاء فعالة",
                "اختبارات تكامل وخط CI لثقة أعلى في الإصدارات",
                "جاهز للنشر والعرض المباشر"
            ],
            ru: [
                "Слоистая архитектура с надежной валидацией и обработкой ошибок",
                "Интеграционные тесты и CI-пайплайн для стабильных релизов",
                "Готов к live-деплою и демонстрации"
            ]
        },
        links: [
            {
                label: "GitHub",
                href: "https://github.com/"
            },
            {
                label: "Live Demo",
                href: "https://"
            }
        ]
    },
    {
        slug: "realtime-notification-service",
        title: {
            en: "Real-Time Notification Service",
            ar: "خدمة إشعارات لحظية",
            ru: "Сервис real-time уведомлений"
        },
        type: "personal",
        summary: {
            en: "Backend-first service for real-time events with WebSocket broadcasting, persistence, and resilient delivery.",
            ar: "خدمة تركز على الباك إند للأحداث اللحظية مع WebSocket وتخزين مستمر وتسليم موثوق.",
            ru: "Backend-first сервис для событий в реальном времени с WebSocket, постоянным хранением и надежной доставкой."
        },
        stack: [
            "Java",
            "WebSocket",
            "Redis",
            "PostgreSQL",
            "Docker"
        ],
        impact: {
            en: [
                "Designed event pipeline for low-latency updates",
                "Implemented retry-safe delivery and durable message storage",
                "Improved observability with structured logs"
            ],
            ar: [
                "تصميم خط أحداث بزمن استجابة منخفض للتحديثات اللحظية",
                "تنفيذ تسليم آمن مع إعادة المحاولة وتخزين رسائل دائم",
                "تحسين المراقبة التشغيلية عبر سجلات منظمة"
            ],
            ru: [
                "Спроектирован event-пайплайн с низкой задержкой",
                "Реализована надежная доставка с retry и долговременным хранением сообщений",
                "Улучшена наблюдаемость за счет структурированных логов"
            ]
        },
        links: [
            {
                label: "GitHub",
                href: "https://github.com/"
            },
            {
                label: "Architecture",
                href: "#architecture"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/portfolio/src/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@opentelemetry+_0d40dacb79c22317d19f0d98df45c928/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/components/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/contexts/I18nContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/portfolio/src/lib/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ProjectsPage() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "page-shell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "page-header animate-rise",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow",
                            children: t.projectsPage.kicker
                        }, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: t.projectsPage.title
                        }, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.projectsPage.desc
                        }, void 0, false, {
                            fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filter-tabs",
                    style: {
                        justifyContent: "flex-start"
                    },
                    children: t.projectsPage.tabs.map((tab, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `filter-tab${idx === 0 ? " active" : ""}`,
                            children: tab
                        }, tab, false, {
                            fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "project-grid",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$opentelemetry$2b$_0d40dacb79c22317d19f0d98df45c928$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectCard"], {
                            project: project
                        }, project.slug, false, {
                            fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/portfolio/src/app/projects/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ProjectsPage, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$portfolio$2f$src$2f$contexts$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = ProjectsPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_portfolio_src_82c20eed._.js.map