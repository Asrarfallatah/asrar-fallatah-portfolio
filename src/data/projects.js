export const projectCategories = [
  { id: 'all', label: { en: 'All', ar: 'الكل' } },
  { id: 'backend', label: { en: 'Backend Systems', ar: 'أنظمة خلفية' } },
  { id: 'ios', label: { en: 'iOS Apps', ar: 'تطبيقات iOS' } },
];

export const projects = [
  {
    id: 'bnyan-system',
    featured: true,
    category: 'backend',
    initials: 'B',
    accent: 'accent-sage',
    title: { en: 'Bnyan System', ar: 'نظام بُنيان' },
    type: { en: 'Construction Management Backend Platform', ar: 'منصة خلفية لإدارة مشاريع البناء' },
    problem: {
      en: 'Construction projects often suffer from scattered communication, unclear timelines, and weak coordination between landowners and specialists.',
      ar: 'مشاريع البناء غالبا تتأثر بتشتت التواصل، وغموض الجدول الزمني، وضعف التنسيق بين ملاك الأراضي والمتخصصين.',
    },
    idea: {
      en: 'A unified backend platform that manages the construction lifecycle by tracking requirements, budgets, timelines, project stages, and stakeholder communication.',
      ar: 'منصة خلفية موحدة تدير دورة مشروع البناء عبر تتبع المتطلبات والميزانيات والجداول الزمنية ومراحل المشروع والتواصل بين الأطراف.',
    },
    cardLine: {
      en: 'A structured workspace for the construction lifecycle.',
      ar: 'مساحة منظمة لدورة حياة مشروع البناء.',
    },
    tech: ['Java', 'Spring Boot', 'REST APIs'],
    role: { en: 'Backend Developer', ar: 'مطوّرة خلفية' },
    github: 'https://github.com/Asrarfallatah/Bnyan-System',
  },
  {
    id: 'rosnamaksa',
    featured: true,
    category: 'backend',
    initials: 'R',
    accent: 'accent-sky',
    title: { en: 'RosnamaKSA', ar: 'روزنامة السعودية' },
    type: { en: 'Smart Events Platform', ar: 'منصة فعاليات ذكية' },
    problem: {
      en: 'Saudi events can be hard to discover, filter, and manage from one reliable place.',
      ar: 'قد يصعب اكتشاف الفعاليات السعودية وتصفيتها وإدارتها من مكان موحد وموثوق.',
    },
    idea: {
      en: 'A centralized event management platform with scheduling, filtering, external event source integration, and AI-assisted recommendations.',
      ar: 'منصة مركزية لإدارة الفعاليات مع الجدولة والتصفية وتكامل المصادر الخارجية وتوصيات مدعومة بالذكاء الاصطناعي.',
    },
    cardLine: {
      en: 'Events organized into clearer discovery and planning flows.',
      ar: 'فعاليات مرتبة في مسارات أوضح للاكتشاف والتخطيط.',
    },
    tech: ['Java', 'Spring Boot', 'REST APIs'],
    role: { en: 'Backend Developer', ar: 'مطوّرة خلفية' },
    github: 'https://github.com/Asrarfallatah/RosnamaKSA-System',
  },
  {
    id: 'fazza-event-planner',
    featured: true,
    category: 'backend',
    initials: 'F',
    accent: 'accent-butter',
    title: { en: 'Fazza Event Planner System', ar: 'نظام فزعة لتنظيم الفعاليات' },
    type: { en: 'Event Planning Workflow Backend', ar: 'نظام خلفي لسير عمل تنظيم الفعاليات' },
    problem: {
      en: 'Event planning requests need validation, approvals, representative assignment, and feedback tracking.',
      ar: 'طلبات تنظيم الفعاليات تحتاج إلى تحقق وموافقات وتوزيع ممثلين وتتبع للتغذية الراجعة.',
    },
    idea: {
      en: 'A backend system for client requests, approvals, representative teams, workflow validation, and structured post-event feedback.',
      ar: 'نظام خلفي لإدارة طلبات العملاء والموافقات وفرق الممثلين والتحقق من سير العمل والتغذية الراجعة المنظمة بعد الفعالية.',
    },
    cardLine: {
      en: 'Operational flow behind smoother events.',
      ar: 'سير تشغيلي خلف فعاليات أكثر سلاسة.',
    },
    tech: ['Java', 'Spring Boot', 'REST APIs'],
    role: { en: 'Backend Developer', ar: 'مطوّرة خلفية' },
    github: 'https://github.com/Asrarfallatah/Fazza-System',
  },
  {
    id: 'swiftui-lab',
    category: 'ios',
    initials: 'i',
    accent: 'accent-lavender',
    title: { en: 'TicTacToe', ar: ' X و O ' },
    type: { en: 'iOS Practice Projects', ar: 'تجارب تطبيقات iOS' },
    cardLine: { en: 'Small iOS experiments for interaction and layout practice.', ar: 'تجارب iOS صغيرة للتفاعل وترتيب الواجهات.' },
    idea: { en: 'A growing area for SwiftUI practice, Apple ecosystem learning, and mobile interaction experiments.', ar: 'تطبيق iOS بسيط للعبة X/O، بُني باستخدام Swift وSwiftUI لتطبيق منطق اللعب، إدارة حالات الفوز والتعادل، وتقديم تجربة تفاعلية خفيفة وواضحة للمستخدم.' },
    tech: ['Swift', 'SwiftUI'],
    role: { en: 'iOS Practice', ar: 'تجربة iOS' },
    github: 'https://github.com/Asrarfallatah/SwiftProjects/tree/main/TicTacToe',
  },
];
