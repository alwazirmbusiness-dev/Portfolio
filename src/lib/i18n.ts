export type Locale = "en" | "ar" | "ru";

export const LOCALES: Locale[] = ["en", "ar", "ru"];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  ru: "Русский",
};

type Dictionary = {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
  };
  footer: string;
  hero: {
    Brand: string;
    greetingLead: string;
    name: string;
    role: string;
    desc: string;
    ctaTalk: string;
    ctaCv: string;
    years: string;
    delivered: string;
    mastered: string;
    spokenTitle: string;
    spoken: string[];
  };
  services: {
    kicker: string;
    titleA: string;
    titleB: string;
    desc: string;
    allProjects: string;
    cards: Array<{ title: string; body: string; cta: string }>;
  };
  portfolio: {
    kicker: string;
    title: string;
    desc: string;
    tabs: string[];
  };
  projectsPage: {
    kicker: string;
    title: string;
    desc: string;
    tabs: string[];
  };
  aboutPage: {
    kicker: string;
    title: string;
    desc: string;
    cards: Array<{ title: string; body: string }>;
    howTitle: string;
    bullets: string[];
  };
  contactPage: {
    kicker: string;
    title: string;
    desc: string;
    cards: Array<{ title: string; body: string; cta: string; href: string }>;
  };
  projectCard: {
    company: string;
    personal: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    nav: { home: "Home", services: "Services", projects: "Projects", about: "About", contact: "Contact" },
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
      spoken: ["Arabic (Native)", "Russian (Advanced)", "English (Professional)"],
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
          cta: "Play Store Work",
        },
        {
          title: "Next.js Full-Stack Web",
          body: "End-to-end systems using Next.js, JavaScript, HTML, CSS, APIs, and clean code structures for maintainable products.",
          cta: "See Web Projects",
        },
        {
          title: "Backend, Docker & Architecture",
          body: "Java backend APIs, debugging, performance fixes, and Dockerized deployments with strong project structure and delivery discipline.",
          cta: "Architecture Proof",
        },
      ],
    },
    portfolio: {
      kicker: "Let's have a look at my",
      title: "portfolio",
      desc: "Company case studies, personal projects with full GitHub code, and live demos.",
      tabs: ["All", "Mobile App", "Full-Stack", "Java Backend", "Docker"],
    },
    projectsPage: {
      kicker: "Portfolio",
      title: "Projects & Case Studies",
      desc: "Company work is presented as architecture case studies (no source code). Personal projects include full GitHub code and live demos you can run.",
      tabs: ["All", "Mobile App", "Full-Stack", "Java Backend", "Docker"],
    },
    aboutPage: {
      kicker: "About",
      title: "Product-minded engineer with backend strength",
      desc: "I work across frontend, backend, and deployment with strongest focus on Java backend systems, full-stack applications, and production quality.",
      cards: [
        { title: "Backend First", body: "Java Spring Boot, clean architecture, REST APIs, tests, PostgreSQL, and Docker-ready deployments." },
        { title: "Full-Stack", body: "Next.js, Node.js, full database design, auth, payments, and real-time features end-to-end." },
        { title: "Repo Modernization", body: "Taking existing GitHub projects and making them production-ready: debugging, UI/UX, tests, Docker." },
      ],
      howTitle: "How I work",
      bullets: [
        "I prioritize measurable outcomes: faster pages, fewer bugs, stronger architecture, better UX.",
        "I build with documentation, test coverage, and deployability in mind from the start.",
        "I take ownership of entire features, not just isolated tasks.",
        "I continuously grow my public GitHub profile with real projects.",
      ],
    },
    contactPage: {
      kicker: "Contact",
      title: "Let's build something valuable",
      desc: "Open to backend-focused roles, full-stack product engineering, and contract opportunities.",
      cards: [
        { title: "Email", body: "alwazirm.business@gmail.com", cta: "Send Email", href: "mailto:alwazirm.business@gmail.com" },
        { title: "GitHub", body: "See my public repos, commits, and project history.", cta: "View GitHub", href: "https://github.com/alwazirmbusiness-dev" },
        { title: "LinkedIn", body: "Professional profile, experience, and endorsements.", cta: "Connect", href: "https://linkedin.com/in/alwazirtech-dev" },
      ],
    },
    projectCard: {
      company: "Company Case Study",
      personal: "Personal Project",
    },
  },
  ar: {
    nav: { home: "الرئيسية", services: "الخدمات", projects: "المشاريع", about: "نبذة", contact: "تواصل" },
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
      spoken: ["العربية (اللغة الأم)", "الروسية (متقدم)", "الإنجليزية (احترافي)"],
    },
    services: {
      kicker: "الخبرات الأساسية",
      titleA: "ما الذي",
      titleB: "أتقنه بقوة",
      desc: "هذه ليست خدمات عشوائية. هذا القسم يوضح ما يمكن للشركات توظيفي عليه مباشرة بناءً على أعمال حقيقية.",
      allProjects: "كل المشاريع",
      cards: [
        { title: "تطبيقات موسيقى أندرويد (Java + XML)", body: "خبرة في نشر تطبيقات موبايل بهيكلية Java/XML وتدفقات واجهة مستخدم جاهزة للإطلاق على Google Play.", cta: "أعمال متجر Play" },
        { title: "تطوير ويب فل ستاك بـ Next.js", body: "أنظمة متكاملة باستخدام Next.js وJavaScript وHTML وCSS وواجهات API مع هيكلة كود قابلة للصيانة.", cta: "مشاريع الويب" },
        { title: "باك إند وDocker وهندسة النظام", body: "واجهات Java backend، حل مشاكل الأداء، ونشر بالحاويات Docker مع تنظيم مشروع قوي.", cta: "إثبات معماري" },
      ],
    },
    portfolio: {
      kicker: "دعنا نلقي نظرة على",
      title: "أعمالي",
      desc: "دراسات حالة لمشاريع الشركات، ومشاريع شخصية بكود كامل على GitHub، وروابط تشغيل مباشرة.",
      tabs: ["الكل", "تطبيق موبايل", "فل ستاك", "جافا باك إند", "Docker"],
    },
    projectsPage: {
      kicker: "المعرض",
      title: "المشاريع ودراسات الحالة",
      desc: "أعمال الشركات تعرض كدراسات معمارية دون كود. المشاريع الشخصية تحتوي كود GitHub كامل وروابط تشغيل.",
      tabs: ["الكل", "تطبيق موبايل", "فل ستاك", "جافا باك إند", "Docker"],
    },
    aboutPage: {
      kicker: "نبذة",
      title: "مهندس منتجات بعقلية قوية في الباك إند",
      desc: "أعمل على الواجهة الأمامية والخلفية والنشر مع تركيز قوي على أنظمة Java backend وتطبيقات فل ستاك بجودة إنتاجية.",
      cards: [
        { title: "أولوية للباك إند", body: "Java Spring Boot، معمارية نظيفة، REST APIs، اختبارات، PostgreSQL، ونشر Docker." },
        { title: "فل ستاك", body: "Next.js وNode.js وتصميم قواعد البيانات والمصادقة والدفع والميزات اللحظية." },
        { title: "تحديث المشاريع", body: "تحويل مشاريع GitHub الحالية إلى مستوى إنتاجي: إصلاحات، تحسين واجهة، اختبارات، Docker." },
      ],
      howTitle: "أسلوبي في العمل",
      bullets: [
        "أركز على نتائج قابلة للقياس: سرعة أعلى، أخطاء أقل، معمارية أقوى وتجربة استخدام أفضل.",
        "أبني مع التوثيق والاختبارات وقابلية النشر منذ البداية.",
        "أتحمل مسؤولية الميزة بالكامل وليس جزءاً صغيراً فقط.",
        "أطور ملفي العام على GitHub بشكل مستمر بمشاريع حقيقية.",
      ],
    },
    contactPage: {
      kicker: "تواصل",
      title: "لنصنع شيئاً ذا قيمة",
      desc: "منفتح لفرص عمل تركز على الباك إند، والهندسة الكاملة للمنتجات، والتعاقدات.",
      cards: [
        { title: "البريد", body: "alwazirm.business@gmail.com", cta: "إرسال بريد", href: "mailto:alwazirm.business@gmail.com" },
        { title: "GitHub", body: "شاهد مستودعاتي العامة وسجل التطوير والالتزامات.", cta: "عرض GitHub", href: "https://github.com/alwazirmbusiness-dev" },
        { title: "LinkedIn", body: "الملف المهني والخبرة والتوصيات.", cta: "تواصل", href: "https://linkedin.com/in/alwazirtech-dev" },
      ],
    },
    projectCard: {
      company: "دراسة حالة لشركة",
      personal: "مشروع شخصي",
    },
  },
  ru: {
    nav: { home: "Главная", services: "Услуги", projects: "Проекты", about: "Обо мне", contact: "Контакты" },
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
      spoken: ["Арабский (родной)", "Русский (продвинутый)", "Английский (профессиональный)"],
    },
    services: {
      kicker: "Ключевая экспертиза",
      titleA: "В ЧЕМ Я",
      titleB: "СИЛЕН",
      desc: "Это не случайный список услуг. Здесь показано, за что меня можно нанимать уже сейчас на основе реальных проектов.",
      allProjects: "Все проекты",
      cards: [
        { title: "Android музыкальные приложения (Java + XML)", body: "Опыт публикации мобильного приложения с архитектурой Java/XML и продуманным UX в Google Play.", cta: "Работы в Play Store" },
        { title: "Full-Stack веб на Next.js", body: "Полный цикл: Next.js, JavaScript, HTML, CSS, API и чистая структура кода для поддержки проекта.", cta: "Веб-проекты" },
        { title: "Backend, Docker и архитектура", body: "Java backend API, отладка, улучшение производительности и Docker-деплой с грамотной структурой проекта.", cta: "Архитектурные кейсы" },
      ],
    },
    portfolio: {
      kicker: "Давайте посмотрим на",
      title: "мои работы",
      desc: "Кейсы по корпоративным проектам, личные проекты с открытым кодом на GitHub и live-демо.",
      tabs: ["Все", "Мобильное", "Full-Stack", "Java Backend", "Docker"],
    },
    projectsPage: {
      kicker: "Портфолио",
      title: "Проекты и кейсы",
      desc: "Корпоративные работы представлены как архитектурные кейсы без исходников. Личные проекты включают полный код и live-демо.",
      tabs: ["Все", "Мобильное", "Full-Stack", "Java Backend", "Docker"],
    },
    aboutPage: {
      kicker: "Обо мне",
      title: "Инженер с продуктовым мышлением и сильным backend",
      desc: "Работаю с фронтендом, бэкендом и деплоем, с сильным фокусом на Java backend, full-stack приложения и production-качество.",
      cards: [
        { title: "Backend в приоритете", body: "Java Spring Boot, чистая архитектура, REST API, тесты, PostgreSQL и Docker-деплой." },
        { title: "Full-Stack", body: "Next.js, Node.js, проектирование БД, авторизация, платежи и real-time функции." },
        { title: "Модернизация репозиториев", body: "Довожу существующие GitHub-проекты до production: багфиксы, UI/UX, тесты, Docker." },
      ],
      howTitle: "Как я работаю",
      bullets: [
        "Фокус на измеримом результате: быстрее страницы, меньше багов, сильнее архитектура, лучше UX.",
        "Сразу закладываю документацию, тесты и готовность к деплою.",
        "Беру ответственность за фичу целиком, а не только за узкий кусок.",
        "Постоянно усиливаю публичный GitHub реальными проектами.",
      ],
    },
    contactPage: {
      kicker: "Контакты",
      title: "Давайте сделаем что-то ценное",
      desc: "Открыт к backend-позициям, full-stack ролям и контрактным задачам.",
      cards: [
        { title: "Email", body: "alwazirm.business@gmail.com", cta: "Написать", href: "mailto:alwazirm.business@gmail.com" },
        { title: "GitHub", body: "Публичные репозитории, коммиты и история разработки.", cta: "Открыть GitHub", href: "https://github.com/alwazirmbusiness-dev" },
        { title: "LinkedIn", body: "Профессиональный профиль, опыт и рекомендации.", cta: "Связаться", href: "https://linkedin.com/in/alwazirtech-dev" },
      ],
    },
    projectCard: {
      company: "Кейс компании",
      personal: "Личный проект",
    },
  },
};
