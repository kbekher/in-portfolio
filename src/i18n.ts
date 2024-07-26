import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Creating Visual Solutions that Inspire the World',
        about: "About me",
        portfolio: "Portfolio",
        connect: "Connect",
        contact: "Say hello",
        hello: "Don't be shy!",
        heroTitlePart1: "Unlocking Creativity Through",
        heroTitlePart2: "and",
        heroText: "Hi! My name is Ivan. I'm a UX/UI designer, graphic designer, and illustrator. I love creating beautiful and user-friendly designs. Let's create something amazing together!",
        viewBehanceBtn: "View on Behance",
        viewWebsiteBtn: "View Website",
        webProjectTitle: "Reflecting Style: Web Design for Ace and Tate",
        webProjectDescription: "Designed with the latest trends in design and user interface in mind, our web design transforms Ace and Tate's online presence into a source of inspiration and comfort for visitors.",
        appProjectTitle: "Xtrafit: Effective Design for Optimal Workout Experience",
        appProjectDescription: "Designed a new look for the Xtrafit gym app to make it easier to use, with a modern and easy-to-understand layout. Added colorful images and made it simple to find workouts and other gym services, making it more enjoyable for users.",
        illustrationTitle: "Illustrations bringing ideas to life",
        illustrationParagraph: "Illustrations embody unique visuals. I create illustrations that depict the essence of your idea or product.",
        biographyTitle: "About me",
        biographyText1: "Hi there! I'm Ivan, a UX/UI designer, graphic designer, and illustrator. I create unique, user-friendly interfaces that make brands and products stand out.",
        biographyText2: "Starting as a graphic designer, I crafted logos and corporate identities. Now, I focus on intuitive UX/UI designs and express my creativity through illustration.",
        biographyText3: "My goal is to inspire my clients and users with every design I create",
        footerPrompt: "Stay informed, subscribe",
        footerDetails: "Receive our latest updates and exclusive offers.",
        footerButton: "Join",
        footerPlaceholder: "Enter your email...",
        footerSuccessToast: "Thanks for subscribing!",
        footerErrorToast: "Something went wrong. Please try again."

      }
    },
    de: {
      translation: {
        title: 'Kreative visuelle Lösungen, die die Welt inspirieren',
        about: "Über mich",
        portfolio: "Portfolio",
        connect: "Verbinden",
        contact: "Sag hallo",
        hello: "Sei nicht schüchtern!",
        heroTitlePart1: "Kreativität freisetzen durch ",
        heroTitlePart2: "und",
        heroText: "Hallo! Mein Name ist Ivan. Ich bin UX/UI-Designer, Grafikdesigner und Illustrator. Ich liebe es, schöne und benutzerfreundliche Designs zu erstellen. Lassen Sie uns gemeinsam etwas Großartiges schaffen!",
        viewBehanceBtn: "Ansehen auf Behance",
        viewWebsiteBtn: "Webseite anzeigen",
        webProjectTitle: "Reflektierender Stil: Webdesign für Ace and Tate",
        webProjectDescription: "Mit den neuesten Trends im Design und der Benutzeroberfläche im Blick, verwandelt unser Webdesign die Online-Präsenz von Ace and Tate in eine Inspirationsquelle und einen Ort des Komforts für Besucher.",
        appProjectTitle: "Xtrafit: Effektives Design für ein optimales Trainingserlebnis",
        appProjectDescription: "Wir haben einen neuen Look für die Xtrafit Gym-App entworfen, um sie benutzerfreundlicher zu gestalten, mit einem modernen und leicht verständlichen Layout. Wir haben farbenfrohe Bilder hinzugefügt und es einfach gemacht, Workouts und andere Fitnessstudio-Dienstleistungen zu finden, was die Nutzung für die Benutzer angenehmer macht.",
        illustrationTitle: "Illustrationen, die Ideen zum Leben erwecken",
        illustrationParagraph: "Illustrationen verkörpern einzigartige visuelle Darstellungen. Ich erstelle Illustrationen, die die Essenz Ihrer Idee oder Ihres Produkts abbilden.",
        biographyTitle: "Über mich",
        biographyText1: "Hallo! Ich bin Ivan, UX/UI-Designer, Grafikdesigner und Illustrator. Ich gestalte einzigartige, benutzerfreundliche Interfaces, die Marken und Produkte hervorheben.",
        biographyText2: "Als Grafikdesigner entwarf ich Logos und Corporate Identities. Jetzt konzentriere ich mich auf intuitive UX/UI-Designs und kreative Illustrationen.",
        biographyText3: "Mein Ziel ist es, mit jedem Design zu inspirieren.",
        footerPrompt: "Bleib informiert, abonniere jetzt",
        footerDetails: "Erhalte meine neuesten Updates und exklusiven Angebote.",
        footerButton: "Join",
        footerPlaceholder: "Gib deine E-Mail ein...",
        footerSuccessToast: "Danke fürs Abonnieren! ",
        footerErrorToast: "Hat nicht geklappt, versuch's nochmal!"
      }
    },
  },
});


export default i18n;