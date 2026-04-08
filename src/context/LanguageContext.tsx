'use client';

import React, { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'de';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // ─── Global / Nav ────────────────────────────────────────────────────────
  'nav.backHome': { en: '← Back to Home', de: '← Zurück zur Startseite' },
  'nav.about': { en: 'About', de: 'Über mich' },
  'nav.skills': { en: 'Skills', de: 'Fähigkeiten' },
  'nav.certifications': { en: 'Certifications', de: 'Zertifizierungen' },
  'nav.projects': { en: 'Projects', de: 'Projekte' },

  // ─── Home page ───────────────────────────────────────────────────────────
  'home.greeting': { en: "Hello, I'm", de: 'Hallo, ich bin' },
  'home.name': { en: 'Sudarshan Awasthi', de: 'Sudarshan Awasthi' },
  'home.role': {
    en: 'Power Platform Consultant & Full-Stack Developer',
    de: 'Power-Platform-Berater & Full-Stack-Entwickler',
  },
  'home.subtitle': {
    en: 'I build intelligent business solutions with Microsoft Power Platform, craft data-driven dashboards, and develop modern web applications.',
    de: 'Ich entwickle intelligente Geschäftslösungen mit Microsoft Power Platform, erstelle datengetriebene Dashboards und entwickle moderne Webanwendungen.',
  },
  'home.cta.projects': { en: 'View Projects', de: 'Projekte ansehen' },
  'home.cta.contact': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },
  'home.cta.cv.en': { en: 'Download CV (EN)', de: 'Lebenslauf herunterladen (EN)' },
  'home.cta.cv.de': { en: 'Download CV (DE)', de: 'Lebenslauf herunterladen (DE)' },
  'home.cv.title': { en: 'My CV', de: 'Mein Lebenslauf' },
  'home.cv.subtitle': { en: 'Available in English and German', de: 'Auf Englisch und Deutsch verfügbar' },
  'home.about': { en: 'About Me', de: 'Über mich' },
  'home.aboutLead': {
    en: 'Get to know me',
    de: 'Lerne mich kennen',
  },
  'home.aboutText': {
    en: 'A software developer based in Germany with deep expertise in the Microsoft ecosystem. I specialize in Power Apps, Power Automate, Power BI, and SharePoint, while also building full-stack web applications with React and Next.js. I love turning complex business requirements into elegant, automated solutions.',
    de: 'Ein Softwareentwickler mit Sitz in Deutschland und fundierter Expertise im Microsoft-Ökosystem. Ich bin spezialisiert auf Power Apps, Power Automate, Power BI und SharePoint und entwickle gleichzeitig Full-Stack-Webanwendungen mit React und Next.js. Ich verwandle komplexe Geschäftsanforderungen gerne in elegante, automatisierte Lösungen.',
  },
  'home.skills': { en: 'Tech Stack', de: 'Tech-Stack' },
  'home.skillsLead': {
    en: 'Technologies I work with',
    de: 'Technologien, mit denen ich arbeite',
  },
  'home.cat.microsoft': { en: 'Microsoft Ecosystem', de: 'Microsoft-Ökosystem' },
  'home.cat.frontend': { en: 'Frontend', de: 'Frontend' },
  'home.cat.backend': { en: 'Backend & Data', de: 'Backend & Daten' },
  'home.cat.tools': { en: 'Tools & Others', de: 'Tools & Sonstiges' },
  'home.certificationsLead': {
    en: 'Industry recognized credentials',
    de: 'Branchenanerkannte Nachweise',
  },
  'home.certifications': { en: 'Certifications', de: 'Zertifizierungen' },
  'home.projects': { en: 'Featured Projects', de: 'Ausgewählte Projekte' },
  'home.projectsLead': {
    en: 'Things I have built',
    de: 'Was ich gebaut habe',
  },
  'home.viewProject': { en: 'View Case Study →', de: 'Fallstudie ansehen →' },
  'home.stat.certs': { en: 'Certifications', de: 'Zertifizierungen' },
  'home.stat.tech': { en: 'Technologies', de: 'Technologien' },
  'home.stat.projects': { en: 'Projects', de: 'Projekte' },
  'home.contact': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },
  'home.contactText': {
    en: "Interested in working together? Let's connect.",
    de: 'Interesse an einer Zusammenarbeit? Lassen Sie uns vernetzen.',
  },
  'home.contactBtn': { en: 'Send Email', de: 'E-Mail senden' },
  'home.footer': {
    en: 'Designed & Built by Sudarshan Awasthi',
    de: 'Entworfen & Entwickelt von Sudarshan Awasthi',
  },

  // ─── Project cards ───────────────────────────────────────────────────────
  'project.chatbot.title': { en: 'AI-Powered PDF Context Chatbot', de: 'KI-gestützter PDF-Kontext-Chatbot' },
  'project.chatbot.desc': {
    en: 'A semantic chatbot that extracts answers from PDFs using Flask, Sentence Transformers, and Power Platform.',
    de: 'Ein semantischer Chatbot, der mithilfe von Flask, Sentence Transformers und der Power Platform Antworten aus PDFs extrahiert.',
  },
  'project.sales.title': { en: 'Sales Report', de: 'Verkaufsbericht' },
  'project.sales.desc': {
    en: 'A Power BI dashboard to analyze sales trends and regional performance.',
    de: 'Ein Power-BI-Dashboard zur Analyse von Verkaufstrends und regionaler Leistung.',
  },
  'project.fifa.title': { en: 'FIFA World Cup Analysis', de: 'FIFA-WM-Analyse' },
  'project.fifa.desc': {
    en: 'Interactive Streamlit app to explore FIFA World Cup stats.',
    de: 'Interaktive Streamlit-App zur Analyse von FIFA-WM-Statistiken.',
  },
  'project.cia.title': { en: 'CIA Factbook Analysis', de: 'CIA-Factbook-Analyse' },
  'project.cia.desc': {
    en: 'Exploratory data analysis of global facts using SQLite.',
    de: 'Explorative Datenanalyse globaler Fakten mit SQLite.',
  },

  // ─── PDF Chatbot page ─────────────────────────────────────────────────────
  'chatbot.h1': {
    en: 'AI-Powered PDF Context Chatbot Using Flask & Power Platform',
    de: 'KI-gestützter PDF-Kontext-Chatbot mit Flask & Power Platform',
  },
  'chatbot.byline': { en: 'By Sudarshan Awasthi • 2025', de: 'Von Sudarshan Awasthi • 2025' },
  'chatbot.intro.lead': {
    en: 'An intelligent chatbot that semantically reads PDFs and answers natural language questions using embeddings, Flask API, and Power Apps UI.',
    de: 'Ein intelligenter Chatbot, der PDFs semantisch liest und natürlichsprachliche Fragen mithilfe von Embeddings, Flask-API und einer Power-Apps-Oberfläche beantwortet.',
  },
  'chatbot.intro.h2': { en: '📖 Introduction', de: '📖 Einführung' },
  'chatbot.intro.p': {
    en: "In today's information-heavy environments, finding specific content inside large collections of PDFs is frustrating. This project solves that problem by enabling a chatbot to semantically understand and answer user queries — not just with keyword search, but true contextual understanding.",
    de: 'In heutigen informationsreichen Umgebungen ist es mühsam, spezifische Inhalte in großen PDF-Sammlungen zu finden. Dieses Projekt löst dieses Problem, indem es einem Chatbot ermöglicht, Benutzeranfragen semantisch zu verstehen und zu beantworten – nicht nur durch Stichwortsuche, sondern durch echtes kontextuelles Verständnis.',
  },
  'chatbot.problem.h2': { en: '🎯 Problem Statement', de: '🎯 Problemstellung' },
  'chatbot.problem.p': {
    en: 'Traditional search fails when the exact wording is unknown or information is scattered across documents. This solution enables:',
    de: 'Herkömmliche Suche versagt, wenn der genaue Wortlaut unbekannt oder Informationen über mehrere Dokumente verteilt sind. Diese Lösung ermöglicht:',
  },
  'chatbot.problem.li1': { en: 'Natural language question input', de: 'Eingabe in natürlicher Sprache' },
  'chatbot.problem.li2': {
    en: 'Contextual understanding of PDF content using semantic embeddings',
    de: 'Kontextuelles Verständnis von PDF-Inhalten durch semantische Embeddings',
  },
  'chatbot.problem.li3': { en: 'AI-generated answers', de: 'KI-generierte Antworten' },
  'chatbot.problem.li4': { en: 'Seamless low-code UI with Power Platform', de: 'Nahtlose Low-Code-Oberfläche mit der Power Platform' },
  'chatbot.tech.h2': { en: '🛠️ Technologies Used', de: '🛠️ Verwendete Technologien' },
  'chatbot.tech.layer': { en: 'Layer', de: 'Schicht' },
  'chatbot.tech.tech': { en: 'Technology', de: 'Technologie' },
  'chatbot.arch.h2': { en: '🧭 Architecture Overview', de: '🧭 Architekturübersicht' },
  'chatbot.arch.p': {
    en: 'The architecture consists of five interconnected components:',
    de: 'Die Architektur besteht aus fünf miteinander verbundenen Komponenten:',
  },
  'chatbot.arch.li1': {
    en: 'Power Apps: Frontend chat UI where the user types a question.',
    de: 'Power Apps: Frontend-Chat-Oberfläche, über die der Nutzer eine Frage eingibt.',
  },
  'chatbot.arch.li2': {
    en: 'Power Automate: Middleware that sends the question to the backend and receives the final AI response.',
    de: 'Power Automate: Middleware, die die Frage an das Backend sendet und die KI-Antwort empfängt.',
  },
  'chatbot.arch.li3': {
    en: 'Flask API: Python server that extracts text from PDFs and uses semantic search to find relevant context.',
    de: 'Flask API: Python-Server, der Text aus PDFs extrahiert und semantische Suche nutzt, um relevante Kontexte zu finden.',
  },
  'chatbot.arch.li4': {
    en: 'AI Builder: Uses the reduced context + question to generate a human-readable answer.',
    de: 'AI Builder: Nutzt den reduzierten Kontext und die Frage, um eine verständliche Antwort zu generieren.',
  },
  'chatbot.arch.li5': {
    en: 'Power Apps: Displays the AI-generated answer in a user-friendly interface.',
    de: 'Power Apps: Zeigt die KI-generierte Antwort in einer benutzerfreundlichen Oberfläche an.',
  },
  'chatbot.arch.p2': {
    en: 'This flow enables end-to-end semantic search over PDF documents using natural language — without requiring the user to browse, scroll, or filter manually.',
    de: 'Dieser Ablauf ermöglicht eine durchgängige semantische Suche in PDF-Dokumenten mittels natürlicher Sprache – ohne manuelles Durchsuchen, Scrollen oder Filtern.',
  },
  'chatbot.powerapps.h2': { en: '💬 Power Apps Chat UI', de: '💬 Power Apps Chat-Oberfläche' },
  'chatbot.automate.h2': { en: '🔄 Power Automate – Orchestrating the Flow', de: '🔄 Power Automate – Orchestrierung des Ablaufs' },
  'chatbot.automate.p': {
    en: 'Power Automate plays a crucial role in connecting the user interface built in Power Apps with the backend AI system powered by Flask and Python. It acts as the middleware that sends and receives data, triggers the AI logic, and ensures that user queries are processed intelligently and efficiently.',
    de: 'Power Automate spielt eine entscheidende Rolle beim Verbinden der Power-Apps-Benutzeroberfläche mit dem Flask-basierten KI-Backend. Es fungiert als Middleware, die Daten sendet und empfängt, die KI-Logik auslöst und sicherstellt, dass Benutzeranfragen intelligent und effizient verarbeitet werden.',
  },
  'chatbot.automate.h3': { en: '📌 What Happens in Power Automate?', de: '📌 Was passiert in Power Automate?' },
  'chatbot.automate.step1': {
    en: 'Trigger: Captures the question from Power Apps via "When a Power Apps button is clicked".',
    de: 'Auslöser: Erfasst die Frage aus Power Apps über „Wenn eine Power-Apps-Schaltfläche geklickt wird".',
  },
  'chatbot.automate.step2': { en: 'Step 1: Sends HTTP POST to the Flask API hosted on Ngrok.', de: 'Schritt 1: Sendet HTTP-POST an die auf Ngrok gehostete Flask-API.' },
  'chatbot.automate.step3': { en: 'Step 2: Receives reduced context (top matching sentences) from PDFs.', de: 'Schritt 2: Empfängt reduzierten Kontext (passendste Sätze) aus PDFs.' },
  'chatbot.automate.step4': { en: 'Step 3: Sends both context and question into the AI Builder "Run a prompt" action.', de: 'Schritt 3: Sendet Kontext und Frage an die AI-Builder-Aktion „Eingabeaufforderung ausführen".' },
  'chatbot.automate.step5': { en: 'Step 4: Returns the AI-generated answer back to Power Apps and updates the UI.', de: 'Schritt 4: Gibt die KI-generierte Antwort an Power Apps zurück und aktualisiert die Oberfläche.' },
  'chatbot.sample.h2': { en: '🧪 Sample Prompt Execution – Power BI Example', de: '🧪 Beispielausführung – Power-BI-Beispiel' },
  'chatbot.sample.p': {
    en: "Here's a real-world example that demonstrates how the chatbot processes a Power Platform question using embedded content from Power BI documentation:",
    de: 'Hier ist ein reales Beispiel, das zeigt, wie der Chatbot eine Power-Platform-Frage mithilfe eingebetteter Power-BI-Dokumentation beantwortet:',
  },
  'chatbot.sample.qh': { en: '🧾 Question:', de: '🧾 Frage:' },
  'chatbot.sample.q': {
    en: '"How do I connect Power BI to SharePoint and refresh the data automatically?"',
    de: '"Wie verbinde ich Power BI mit SharePoint und aktualisiere die Daten automatisch?"',
  },
  'chatbot.sample.rch': { en: '🔍 Reduced Context:', de: '🔍 Reduzierter Kontext:' },
  'chatbot.sample.aih': { en: '🧠 Final AI Answer:', de: '🧠 Endgültige KI-Antwort:' },
  'chatbot.sample.prompth': { en: '📄 AI Builder Prompt Format:', de: '📄 AI Builder Eingabeformat:' },
  'chatbot.repo.h2': { en: '🔗 Code Repository', de: '🔗 Code-Repository' },
  'chatbot.repo.p': { en: 'Explore the backend Flask code and setup instructions here:', de: 'Den Backend-Flask-Code und Setup-Anweisungen finden Sie hier:' },
  'chatbot.repo.btn': { en: 'View on GitHub', de: 'Auf GitHub ansehen' },
  'chatbot.conclusion.h2': { en: '✅ Conclusion', de: '✅ Fazit' },
  'chatbot.conclusion.p': {
    en: "This chatbot showcases the power of combining AI, semantic search, and low-code platforms to solve real-world document analysis challenges. It's a production-ready, extensible solution for knowledge retrieval.",
    de: 'Dieser Chatbot zeigt die Stärke der Kombination von KI, semantischer Suche und Low-Code-Plattformen zur Lösung realer Dokumentenanalyseprobleme. Es ist eine produktionsreife, erweiterbare Lösung für die Wissensabfrage.',
  },

  // ─── Sales Report page ────────────────────────────────────────────────────
  'sales.h1': { en: 'Sales Insight Dashboard: Turning Data Into Action', de: 'Verkaufs-Insight-Dashboard: Daten in Aktion umwandeln' },
  'sales.byline': { en: 'By Sudarshan Awasthi • November 27, 2022', de: 'Von Sudarshan Awasthi • 27. November 2022' },
  'sales.lead': {
    en: 'A business-driven Power BI solution to help Sales, Product, and Customer teams make smarter decisions using real-time insights.',
    de: 'Eine geschäftsorientierte Power-BI-Lösung, die Vertriebs-, Produkt- und Kundenteams dabei unterstützt, mit Echtzeit-Einblicken klügere Entscheidungen zu treffen.',
  },
  'sales.jumpBtn': { en: '↓ Jump to Interactive Preview', de: '↓ Zur interaktiven Vorschau springen' },
  'sales.glance.h2': { en: 'Project at a Glance', de: 'Projekt auf einen Blick' },
  'sales.need.h2': { en: 'Understanding the Business Need', de: 'Geschäftsbedarf verstehen' },
  'sales.need.p': {
    en: 'I collaborated with key stakeholders to gather insights into what information would drive impact. This helped define KPIs and visual structure.',
    de: 'Ich arbeitete mit wichtigen Stakeholdern zusammen, um zu ermitteln, welche Informationen den größten Einfluss haben. Dies half bei der Definition von KPIs und der visuellen Struktur.',
  },
  'sales.need.stakeholder': { en: 'Stakeholder', de: 'Stakeholder' },
  'sales.need.request': { en: 'Request', de: 'Anfrage' },
  'sales.need.purpose': { en: 'Purpose', de: 'Zweck' },
  'sales.need.r1a': { en: 'Sales Manager', de: 'Vertriebsleiter' },
  'sales.need.r1b': { en: 'Overview of sales', de: 'Überblick über den Vertrieb' },
  'sales.need.r1c': { en: 'Track performance, top products', de: 'Leistung verfolgen, Top-Produkte' },
  'sales.need.r2a': { en: 'Customer Team', de: 'Kundenteam' },
  'sales.need.r2b': { en: 'Customer-wise breakdown', de: 'Kundenbezogene Aufschlüsselung' },
  'sales.need.r2c': { en: 'Personalized targeting', de: 'Personalisiertes Targeting' },
  'sales.need.r3a': { en: 'Product Manager', de: 'Produktmanager' },
  'sales.need.r3b': { en: 'Subcategory trends', de: 'Unterkategorietrends' },
  'sales.need.r3c': { en: 'Optimize inventory', de: 'Lagerbestand optimieren' },
  'sales.data.h2': { en: 'Data Collection & Preparation', de: 'Datenerhebung & Aufbereitung' },
  'sales.data.p': {
    en: 'Using SQL Server, I wrote custom queries to pull relevant data, and cleaned it using Power Query. Key dimensions included Customers, Products, and Dates.',
    de: 'Mit SQL Server schrieb ich benutzerdefinierte Abfragen, um relevante Daten abzurufen, und bereinigt sie mit Power Query. Zu den wichtigsten Dimensionen gehörten Kunden, Produkte und Daten.',
  },
  'sales.model.h2': { en: 'Data Model Design', de: 'Datenmodell-Design' },
  'sales.model.p': {
    en: 'I built a star schema with Sales as the fact table and Date, Customer, Product as dimension tables. Relationships were configured using primary/foreign keys.',
    de: 'Ich erstellte ein Sternschema mit Vertrieb als Faktentabelle und Datum, Kunde und Produkt als Dimensionstabellen. Beziehungen wurden über Primär- und Fremdschlüssel konfiguriert.',
  },
  'sales.dashboards.h2': { en: 'Final Dashboards & Key Insights', de: 'Finale Dashboards & Kernerkenntnisse' },
  'sales.dash.sales.h3': { en: '📈 Sales Dashboard', de: '📈 Vertriebs-Dashboard' },
  'sales.dash.sales.p': {
    en: 'Sales exceeded the target by 126.6%. North America led performance. Insights by category and time helped identify seasonality and key contributors.',
    de: 'Der Umsatz übertraf das Ziel um 126,6 %. Nordamerika führte die Leistung an. Einblicke nach Kategorie und Zeit halfen, Saisonalität und wichtige Treiber zu identifizieren.',
  },
  'sales.dash.customer.h3': { en: '👥 Customer Dashboard', de: '👥 Kunden-Dashboard' },
  'sales.dash.customer.p': {
    en: 'Repeat buyers and specific demographics contributed heavily to sales. Gender and marital filters uncovered unique patterns in customer behavior.',
    de: 'Stammkäufer und bestimmte demografische Gruppen trugen erheblich zum Umsatz bei. Geschlechts- und Familienstandsfilter deckten einzigartige Muster im Kundenverhalten auf.',
  },
  'sales.dash.product.h3': { en: '📦 Product Dashboard', de: '📦 Produkt-Dashboard' },
  'sales.dash.product.p': {
    en: 'Only a few subcategories made up most of the sales. Visuals helped identify underperforming items to review for promotion or removal.',
    de: 'Nur wenige Unterkategorien machten den Großteil des Umsatzes aus. Visualisierungen halfen, leistungsschwache Artikel für Aktionen oder die Entfernung zu identifizieren.',
  },
  'sales.preview.h2': { en: 'Interactive Preview', de: 'Interaktive Vorschau' },
  'sales.preview.btn': { en: '🔗 View Full Dashboard on Power BI', de: '🔗 Vollständiges Dashboard auf Power BI ansehen' },

  // ─── FIFA page ────────────────────────────────────────────────────────────
  'fifa.h1': { en: 'FIFA World Cup Analysis (1930 - 2018)', de: 'FIFA-WM-Analyse (1930 – 2018)' },
  'fifa.byline': { en: 'By Sudarshan Awasthi • December 14, 2022', de: 'Von Sudarshan Awasthi • 14. Dezember 2022' },
  'fifa.lead': {
    en: 'A historical data analysis project built with Python, Streamlit, and Plotly to visualize insights across World Cup events, years, and countries.',
    de: 'Ein historisches Datenanalyseprojekt, das mit Python, Streamlit und Plotly erstellt wurde, um Erkenntnisse über WM-Ereignisse, Jahre und Länder zu visualisieren.',
  },
  'fifa.jumpBtn': { en: '↓ Jump to Hosting & Code', de: '↓ Zu Hosting & Code springen' },
  'fifa.overview.h2': { en: 'Project Overview', de: 'Projektübersicht' },
  'fifa.overview.p': {
    en: 'The goal of this project was to analyze the FIFA World Cup data from 1930–2018 using public sources and generate insights in three layers:',
    de: 'Ziel dieses Projekts war die Analyse der FIFA-WM-Daten von 1930–2018 aus öffentlichen Quellen und die Generierung von Erkenntnissen in drei Ebenen:',
  },
  'fifa.overview.li1': { en: 'Overall trends (events, wins, goals, scorers)', de: 'Allgemeine Trends (Ereignisse, Siege, Tore, Torschützen)' },
  'fifa.overview.li2': { en: 'Year-wise statistics (host, winner, scoring)', de: 'Jahresstatistiken (Gastgeber, Sieger, Tore)' },
  'fifa.overview.li3': { en: 'Country-wise breakdown (performance & players)', de: 'Länderbezogene Aufschlüsselung (Leistung & Spieler)' },
  'fifa.overall.h2': { en: 'Overall Analysis', de: 'Gesamtanalyse' },
  'fifa.year.h2': { en: 'Year-Wise Analysis', de: 'Jahresbezogene Analyse' },
  'fifa.year.p': { en: 'Sample analysis for the year 1930:', de: 'Beispielanalyse für das Jahr 1930:' },
  'fifa.country.h2': { en: 'Country-Wise Analysis', de: 'Länderbezogene Analyse' },
  'fifa.country.p': { en: "Example: Germany's participation and stats over the years.", de: 'Beispiel: Deutschlands Teilnahme und Statistiken im Laufe der Jahre.' },
  'fifa.hosting.h2': { en: 'Hosting & Source Code', de: 'Hosting & Quellcode' },
  'fifa.hosting.p1': { en: 'The project is deployed using Streamlit and hosted at:', de: 'Das Projekt ist mit Streamlit bereitgestellt und gehostet unter:' },
  'fifa.hosting.streamlit': { en: 'Streamlit Live App', de: 'Streamlit Live-App' },
  'fifa.hosting.p2': { en: 'GitHub Repository:', de: 'GitHub-Repository:' },
  'fifa.hosting.github': { en: 'View on GitHub', de: 'Auf GitHub ansehen' },

  // ─── CIA Factbook page ────────────────────────────────────────────────────
  'cia.h1': { en: 'CIA World Factbook Analysis', de: 'CIA-Weltfactbook-Analyse' },
  'cia.subtitle': { en: 'Data-driven insights using SQL + Jupyter Notebook', de: 'Datengestützte Erkenntnisse mit SQL + Jupyter Notebook' },
  'cia.notebook.h3': { en: '📘 Want to explore the full code and analysis?', de: '📘 Möchten Sie den vollständigen Code und die Analyse erkunden?' },
  'cia.notebook.btn': { en: 'View Full Notebook on GitHub', de: 'Vollständiges Notebook auf GitHub ansehen' },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? translations[key]?.['en'] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
