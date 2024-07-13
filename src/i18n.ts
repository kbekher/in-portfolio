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
        heroTitle: "Unlocking Creativity Through Design and Illustration",
        heroParagraph: "Hi! My name is Ivan. I'm a UX/UI designer, graphic designer, and illustrator. I love creating beautiful and user-friendly designs. Let's create something amazing together!",
        viewBehanceBtn: "View on Behance",
        viewWebsiteBtn: "View Website",
        webProjectTitle: "Reflecting Style: Web Design for Ace and Tate",
        webProjectDescription: "Designed with the latest trends in design and user interface in mind, our web design transforms Ace and Tate's online presence into a source of inspiration and comfort for visitors.",
        appProjectTitle: "Xtrafit: Effective Design for Optimal Workout Experience",
        appProjectDescription: "Designed a new look for the Xtrafit gym app to make it easier to use, with a modern and easy-to-understand layout. Added colorful images and made it simple to find workouts and other gym services, making it more enjoyable for users.",
        illustrationTitle: "Illustrations bringing ideas to life",
        illustrationParagraph: "Illustrations embody unique visuals. I create illustrations that depict the essence of your idea or product.",
        aboutMe: "About me",
        aboutMeText1: "Hi there! I'm Ivan, a UX/UI designer, graphic designer, and illustrator with extensive experience in creating unique and effective visual solutions. I specialize in making brands and products stand out by designing user-friendly interfaces that are both intuitive and eye-catching.",
        aboutMeText2: "I started my career in graphic design, crafting attractive logos and corporate identities for various companies. Over time, I shifted my focus to UX/UI design, where I design interfaces that are not only easy to use but also visually appealing. I'm also passionate about illustration, which allows me to express my creativity and inspiration through visual art.",
        aboutMeText3: "My goal is to not just complete projects, but to inspire my clients and users alike with each design I create.",
        footerPrompt: "Stay informed, subscribe",
        footerDetails: "Receive our latest updates and exclusive offers."
      }
    },
    de: {
      translation: {
        title: 'Kreative visuelle Lösungen, die die Welt inspirieren',
        about: "Über mich",
        portfolio: "Portfolio",
        connect: "Verbinden",
        contact: "Sag hallo",
        heroTitle: "Kreativität freisetzen durch Design und Illustration",
        heroParagraph: "Hallo! Mein Name ist Ivan. Ich bin UX/UI-Designer, Grafikdesigner und Illustrator. Ich liebe es, schöne und benutzerfreundliche Designs zu erstellen. Lassen Sie uns gemeinsam etwas Großartiges schaffen!",
        viewBehanceBtn: "Ansehen auf Behance",
        viewWebsiteBtn: "Webseite anzeigen",
        webProjectTitle: "Reflektierender Stil: Webdesign für Ace and Tate",
        webProjectDescription: "Mit den neuesten Trends im Design und der Benutzeroberfläche im Blick, verwandelt unser Webdesign die Online-Präsenz von Ace and Tate in eine Inspirationsquelle und einen Ort des Komforts für Besucher.",
        appProjectTitle: "Xtrafit: Effektives Design für ein optimales Trainingserlebnis",
        appProjectDescription: "Wir haben einen neuen Look für die Xtrafit Gym-App entworfen, um sie benutzerfreundlicher zu gestalten, mit einem modernen und leicht verständlichen Layout. Wir haben farbenfrohe Bilder hinzugefügt und es einfach gemacht, Workouts und andere Fitnessstudio-Dienstleistungen zu finden, was die Nutzung für die Benutzer angenehmer macht.",
        illustrationTitle: "Illustrationen, die Ideen zum Leben erwecken",
        illustrationParagraph: "Illustrationen verkörpern einzigartige visuelle Darstellungen. Ich erstelle Illustrationen, die die Essenz Ihrer Idee oder Ihres Produkts abbilden.",
        aboutMe: "Über mich",
        aboutMeText1: "Hallo! Ich bin Ivan, ein UX/UI-Designer, Grafikdesigner und Illustrator mit umfangreicher Erfahrung in der Entwicklung einzigartiger und effektiver visueller Lösungen. Ich spezialisiere mich darauf, Marken und Produkte durch benutzerfreundliche Interfaces zu präsentieren, die intuitiv und ansprechend sind.",
        aboutMeText2: "Meine Karriere begann im Bereich Grafikdesign, wo ich attraktive Logos und Corporate Identities für verschiedene Unternehmen entworfen habe. Im Laufe der Zeit habe ich meinen Fokus auf UX/UI-Design verschoben, wo ich Interfaces gestalte, die nicht nur einfach zu bedienen, sondern auch visuell ansprechend sind. Außerdem liebe ich Illustration, durch die ich meine Kreativität und Inspiration ausdrücken kann.",
        aboutMeText3: "Mein Ziel ist es, nicht nur Projekte abzuschließen, sondern meine Kunden und Nutzer gleichermaßen mit jedem meiner Designs zu inspirieren.",
        footerPrompt: " ",
        footerDetails: "Erhalte meine neuesten Updates und exklusiven Angebote."
      }
    },
  },
});


export default i18n;