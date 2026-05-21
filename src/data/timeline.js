import aramcoLogo from '../assets/orgs/aramco.webp';
import sdaLogo from '../assets/orgs/sda.webp';
import tuwaiqLogo from '../assets/orgs/tuwaiq.webp';
import yicLogo from '../assets/orgs/yic.svg';

export const timeline = [
  {
    logo: yicLogo,
    accent: 'accent-sky',
    date: { en: 'Aug 2020 - Oct 2025', ar: 'أغسطس 2020 - أكتوبر 2025' },
    organization: { en: 'Yanbu Industrial College', ar: 'كلية ينبع الصناعية' },
    role: { en: 'Bachelor of Science in Computer Engineering', ar: 'بكالوريوس العلوم في هندسة الحاسب الآلي' },
    subtitle: { en: 'Kingdom of Saudi Arabia', ar: 'المملكة العربية السعودية' },
    bullets: [
      { en: 'Member of the university students club (Computer Science and Engineering Department club / Cultural Club Art Team ).', ar: ' عضوة متميزة في أندية الجامعة الطلابية (نادي قسم علوم وهندسة الحاسب الآلي / النادي الثقافي فريق الفن )' },
      { en: 'Won the second place in the “Junior Developer Championship” competition organized by the Computer Science and Engineering Department at Yanbu Industrial College.', ar: 'فزت بالمركز الثاني في مسابقة “Junior Developer Championship” التابعة لقسم علوم وهندسة الحاسب في كلية ينبع الصناعية.' },
      { en: 'Presented the project “Touch Door Bell” as part of the departmental projects  at Yanbu Industrial College.', ar: ' قدّمت مشروع “Touch Door Bell” ضمن مشاريع قسم الحاسب في كلية ينبع الصناعية.' },
      { en: 'Participated in organizing and hosting a Python Hackathon in collaboration with the Computer Club.', ar: ' شاركت في تنظيم وإقامة هاكاثون Python بالتعاون مع نادي الحاسب .' },
    ],
  },
  {
    logo: aramcoLogo,
    accent: 'accent-sage',
    date: { en: 'Jan 2025 - Jul 2025', ar: 'يناير ٢٠٢٥ - يوليو ٢٠٢٥' },
    organization: { en: 'Saudi Aramco', ar: 'أرامكو السعودية' },
    role: { en: 'Information Security Analyst Intern', ar: 'متدربة تحليل وأمن معلومات' },
    subtitle: { en: 'Yanbu Refinery Department', ar: 'قسم مصفاة ينبع' },
    bullets: [
      { en: 'Supported secure internal systems as part of the Information Security Analyst team, contributing to technology-driven security solutions.', ar: 'دعمت أنظمة داخلية آمنة ضمن فريق تحليل أمن المعلومات، مما ساهم في تطوير حلول أمنية تعتمد على التقنيات الحديثة.' },
      { en: 'Built interactive Power BI dashboards to improve access to insights and support decision-making', ar: 'تعلمت إنشاء لوحات تفاعلية باستخدام Power BI  لتحسين تحليل البيانات ودعم اتخاذ القرارات السريعة.' },
      { en: 'Developed a frontend interface for an internal reporting website and implemented a smart privacy alert system using Arduino sensors.', ar: 'طوّرت الواجهة الأمامية لموقع تقارير داخلية ونظام تنبيه ذكي للخصوصية باستخدام مستشعرات Arduino.' },
    ],
  },
  {
    logo: tuwaiqLogo,
    accent: 'accent-butter',
    date: { en: 'Oct 2025 - Jan 2026', ar: 'أكتوبر ٢٠٢٥ - يناير ٢٠٢٦' },
    organization: { en: 'Tuwaiq Academy', ar: 'أكاديمية طويق' },
    role: { en: 'Backend Development Trainee', ar: 'متدربة تطوير أنظمة خلفية' },
    subtitle: { en: 'Java, Spring Boot, APIs, and clean architecture', ar: 'معسكر تدريبي ' },
    bullets: [
      { en: 'Completed intensive project-based training focused on Java and Spring Boot backend development.', ar: 'أكملت تدريبًا مكثفًا مبنيًا على التعلم بالمشاريع في تطوير الأنظمة الخلفية باستخدام Java وSpring Boot.' },
      { en: 'Developed RESTful backend systems and applications following clean architecture principles.', ar: 'طوّرت تطبيقات وأنظمة خلفية وفق مبادئ RESTful والبنية النظيفة والإبداعية .' },
      { en: 'Collaborated in team projects that simulated real-world software development workflows such as figma, AWS, and mySQL.', ar: 'تعاونت في مشاريع جماعية  تحاكي سير عمل تطوير البرمجيات الواقعي باستخدام Figma, AWS, وMySQL.' },
    ],
  },
  {
    logo: sdaLogo,
    accent: 'accent-lavender',
    date: { en: 'May 2026 - Jun 2026', ar: 'مايو ٢٠٢٦ - يونيو ٢٠٢٦' },
    organization: { en: 'Saudi Digital Academy', ar: 'الأكاديمية السعودية الرقمية' },
    role: { en: 'Agentic AI Trainee', ar: 'متدربة في الذكاء الاصطناعي الوكيل' },
    subtitle: { en: 'AI workflows and CRM automation', ar: 'معسكر تدريبي ' },
    bullets: [
      { en: 'Applied Agentic AI concepts through a graduation project focused on an AI-powered CRM agent.', ar: 'طبّقت مفاهيم الذكاء الاصطناعي التوكيلي عبر مشروع تخرج لوكيل CRM مدعوم بالذكاء الاصطناعي.' },
      { en: 'Designed workflows for extracting, structuring, confirming, and updating CRM data from natural language input.', ar: 'صممت مسارات لاستخراج بيانات CRM وهيكلتها وتأكيدها وتحديثها من المدخلات الطبيعية.' },
      { en: 'Practiced prompt engineering, sales operation automation, lead management, follow-up reminders, and reporting workflows.', ar: 'تدربت على هندسة الأوامر وأتمتة عمليات المبيعات وإدارة العملاء المحتملين وتذكيرات المتابعة ومسارات التقارير.' },
    ],
  },
];

export const education = timeline;
