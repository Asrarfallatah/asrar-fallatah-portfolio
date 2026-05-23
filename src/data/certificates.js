import ibmAiImage from '../assets/certificates/ibm-ai.webp';
import ibmChatbotsImage from '../assets/certificates/ibm-chatbots.webp';
import iosSdaImage from '../assets/certificates/ios-development-sda.webp';
import javaBadgeImage from '../assets/certificates/java-foundation-badge.webp';
import swiftLearnQuestImage from '../assets/certificates/swift-ios-learnquest.webp';
import sceImage from '../assets/certificates/sce-accreditation.webp';
import ieltsImage from '../assets/certificates/ielts-academic.webp';

export const featuredCertificates = [
  { provider: 'SCE', image: sceImage, href: sceImage, title: { en: 'Saudi Council of Engineers Accreditation', ar: 'اعتماد الهيئة السعودية للمهندسين' } },
  { provider: 'SDA', image: iosSdaImage, href: iosSdaImage, title: { en: 'iOS Development', ar: 'تطوير تطبيقات iOS' } },
  { provider: 'IBM', image: ibmAiImage, href: ibmAiImage, title: { en: 'Introduction to Artificial Intelligence', ar: 'مقدمة في الذكاء الاصطناعي' } },
  { provider: 'LearnQuest', image: swiftLearnQuestImage, href: swiftLearnQuestImage, title: { en: 'iOS App Development with Swift 5', ar: 'مطورة تطبيقات iOS باستخدام Swift 5' } },
];

export const certificatesByProvider = [
  { provider: 'Professional', certificates: featuredCertificates.filter((item) => item.provider === 'SCE' || item.provider === 'IELTS') },
  { provider: 'IBM', certificates: [featuredCertificates.find((item) => item.provider === 'IBM'), { provider: 'IBM', image: ibmChatbotsImage, href: ibmChatbotsImage, title: { en: 'Building AI Powered Chatbots Without Programming', ar: 'بناء روبوتات محادثة ذكية دون برمجة' } }].filter(Boolean) },
  { provider: 'LearnQuest', certificates: featuredCertificates.filter((item) => item.provider === 'LearnQuest') },
  { provider: 'SDA', certificates: [{ provider: 'SDA', image: iosSdaImage, href: iosSdaImage, title: { en: 'iOS Development', ar: 'تطوير تطبيقات iOS' } }] },
  { provider: 'Oracle', certificates: [{ provider: 'Oracle', image: javaBadgeImage, href: javaBadgeImage, title: { en: 'Java Foundation Badge', ar: 'شارة أساسيات Java' } }] },
];
