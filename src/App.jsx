import React, { useState } from "react";
import { Mail, Linkedin, Code, Database, Cloud, Cpu } from "lucide-react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  const content = {
    fr: {
      headerTitle: "Hélène CAKPOSSE",
      headerSubtitle: "Étudiante Mastère 2 Data Engineer – ECE Paris",
      heroTitle: "Profil",
      heroText: [
        "Étudiante en Mastère 2 Data Engineer à l’École Centrale d’Électronique, je suis actuellement à la recherche d’une alternance en Data Engineering ou gestion de projet Data à partir de septembre 2025, au rythme de 2 semaines en formation / 3 semaines en entreprise.",
        "Au cours de mon parcours, j’ai mené des projets concrets, conçu des tableaux de bord avec Power BI et optimisé des indicateurs clés pour accompagner la prise de décision. Compétences solides en Python, SQL, Hadoop et Spark. Sérieuse, orientée résultats et guidée par les données, j’ai à cœur de mettre mes compétences d’analyse au service de projets qui apportent une réelle valeur."
      ],
      softSkills: [
        "Excellente communication et collaboration interdisciplinaire",
        "Leadership d’équipe et gestion de projet agile",
        "Analyse et résolution de problèmes complexes",
        "Grande capacité d’adaptation et apprentissage continu des nouvelles technologies",
      ],
      experiences: [
        {
          title: "Chef de projet technique",
          company: "HESTIM, Casablanca, Maroc",
          date: "Mai–Juil. 2024",
          details: [
            "Conception d’un chatbot automatisé pour le service admissions (WhatsApp, Twilio, Python).",
            "Recueil des besoins, rédaction du cahier des charges, développement du POC.",
            "Coordination des tests, présentation et formation des utilisateurs."
          ]
        },
        {
          title: "Consultante junior",
          company: "Informa Plus, Fès, Maroc",
          date: "Août–Sept. 2023",
          details: [
            "Analyse et visualisation de données démographiques.",
            "Développement front-end (HTML/CSS/JS) et déploiement via Odoo."
          ]
        }
      ],
      formations: [
        { title: "MSc 2 Data Engineer", school: "École Centrale d’Électronique (ECE), Paris", year: "2025–2026" },
        { title: "MSc 1 Data Engineer", school: "École Centrale d’Électronique (ECE), Paris", year: "2024–2025" },
        { title: "Ingénierie Informatique et IA", school: "HESTIM, Casablanca, Maroc", year: "2023–2024" }
      ],
      certifications: [
        "Machine Learning Techaway niv3 – DataScientest (2025)",
        "Python pour Data Scientists – Datascientest (2024)",
        "Introduction to Data Science – IBM (2024)",
        "SQL Databases – LearnQuest (2024)"
      ],
      interests: [
        "Art", "Musique", "Voyage", "Cuisine", "Lecture"
      ],
      languages: [
        "Français : C2", "Anglais : B2"
      ]
    },
    en: {
      headerTitle: "Hélène CAKPOSSE",
      headerSubtitle: "MSc 2 Data Engineer Student – ECE Paris",
      heroTitle: "Profile",
      heroText: [
        "Currently a MSc 2 Data Engineer student at ECE Paris, I am looking for a work-study position in Data Engineering or Data Project Management starting September 2025 (2 weeks school / 3 weeks company).",
        "I have led concrete projects, designed Power BI dashboards, and optimized key indicators for decision-making. Strong skills in Python, SQL, Hadoop, and Spark. Serious, results-oriented, and data-driven, I am committed to using my analytical skills for impactful projects."
      ],
      softSkills: [
        "Clear communication and ability to collaborate with diverse teams",
        "Team spirit and effective project management",
        "Solving complex problems with an analytical approach",
        "Adaptability and willingness to learn new technologies",
      ],
      experiences: [
        {
          title: "Technical Project Manager",
          company: "HESTIM, Casablanca, Morocco",
          date: "May–Jul. 2024",
          details: [
            "Designed an automated chatbot for the admissions service (WhatsApp, Twilio, Python).",
            "Requirements gathering, specifications, POC development.",
            "Test coordination, user training and presentation."
          ]
        },
        {
          title: "Junior Consultant",
          company: "Informa Plus, Fès, Morocco",
          date: "Aug–Sept. 2023",
          details: [
            "Demographic data analysis and visualization.",
            "Front-end development (HTML/CSS/JS) and deployment via Odoo."
          ]
        }
      ],
      formations: [
        { title: "MSc 2 Data Engineer", school: "ECE Paris", year: "2025–2026" },
        { title: "MSc 1 Data Engineer", school: "ECE Paris", year: "2024–2025" },
        { title: "Computer Engineering & AI", school: "HESTIM, Casablanca, Morocco", year: "2023–2024" }
      ],
      certifications: [
        "Machine Learning Techaway lvl3 – DataScientest (2025)",
        "Python for Data Scientists – Datascientest (2024)",
        "Introduction to Data Science – IBM (2024)",
        "SQL Databases – LearnQuest (2024)"
      ],
      interests: [
        "Art", "Music", "Travel", "Cooking", "Reading"
      ],
      languages: [
        "French: C2", "English: B2"
      ]
    },
  };

  const { headerTitle, headerSubtitle, heroTitle, heroText } = content[language];

  const projets = [
    {
      icon: "🤖",
      title: "Chatbot automatisé admissions",
      desc: "Conception d’un chatbot WhatsApp (Twilio, Python) pour le service admissions de HESTIM. Recueil des besoins, développement du POC, formation des utilisateurs.",
      link: null,
    },
    {
      icon: "🚢",
      title: "Analyse prédictive Titanic",
      desc: "Modélisation de la survie des passagers (Scikit-Learn, K-Means, Pandas, Jupyter).",
      link: "https://github.com/Eriyomi2802/Titanic-MachineLearning.git",
    },
    {
      icon: "❤️",
      title: "Détection de maladies cardiaques",
      desc: "Implémentation d’algorithmes de classification (SVM, Forêt Aléatoire, AdaBoost).",
      link: "https://github.com/Eriyomi2802/CardioMind.git",
    },
    {
      icon: "💬",
      title: "Chatbot IA générative",
      desc: "Assistant intelligent basé sur LangChain et Llama, développé sous Jupyter.",
      link: null,
    },
    {
      icon: "⚡",
      title: "Pipeline temps réel",
      desc: "Intégration de données via Kafka et Spark, stockage PostgreSQL, visualisation Power BI.",
      link: "https://github.com/Eriyomi2802/fraude-temps-reel.git",
    },
    {
      icon: "🗄️",
      title: "Entrepôt de données",
      desc: "Mise en place d’un DWH avec Snowflake, DBT, orchestration Airflow.",
      link: "https://github.com/Eriyomi2802/BIG-DATA.git",
    },
    {
      icon: "🌊",
      title: "Data Lake et transformation",
      desc: "Architecture de traitement de données avec MinIO, Spark et Airflow, conteneurisation Docker.",
      link: null,
    },
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">{headerTitle}</h1>
          <p className="header-subtitle">{headerSubtitle}</p>
          <a
            href="https://drive.google.com/file/d/1owPKtdDaYkdI2FPsiVkqAByYLqHCCR7m/view?usp=sharing"
            className="cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
          </a>
        </div>
        <button
          onClick={toggleLanguage}
          className="language-toggle"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: '#FADCD9',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 15px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {language === "fr" ? "🇫🇷 Français" : "🇺🇸 English"}
        </button>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <img
          src={`${import.meta.env.BASE_URL}H-hero.png`}
          alt="Hélène CAKPOSSE portrait"
          className="hero-avatar"
        />
        <h2 className="hero-title">{heroTitle}</h2>
        {heroText.map((paragraph, index) => (
          <p key={index} className="hero-text">
            {paragraph}
          </p>
        ))}
      </section>
      {/* (Sections Expériences, Formations supprimées) */}
      {/* Certifications */}
      <section className="certifications-section">
        <h2 className="section-title">Certifications</h2>
        <ul>
          {content[language].certifications && content[language].certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {/* (Sections Centres d'intérêt et Langues supprimées) */}

      {/* Projets */}
      <section className="projects-section">
        <h2 className="section-title">Projets académiques & professionnels</h2>
        <div className="projects-grid">
          {projets.map(({ icon, title, desc, link }) => (
            <div
              key={title}
              className="project-card"
            >
              <div className="project-icon">{icon}</div>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                  Voir sur GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="stack-section">
        <h2 className="section-title">Stack & outils</h2>
        <div className="stack-grid">
          <div className="stack-item">
            <Code size={32} className="stack-icon" />
            <h4>Big Data</h4>
            <p>Spark, Hadoop, Power BI, Jupyter, PostgreSQL</p>
          </div>
          <div className="stack-item">
            <Database size={32} className="stack-icon" />
            <h4>Développement</h4>
            <p>Python, Java, C/C++, SQL, MySQL, Oracle</p>
          </div>
          <div className="stack-item">
            <Cloud size={32} className="stack-icon" />
            <h4>Outils & DevOps</h4>
            <p>Git, Docker, ERP, Linux, Visualisation</p>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="skills-section">
        <h2 className="section-title">Compétences</h2>
        <div className="badges-grid">
          <span className="badge">Python</span>
          <span className="badge">Java</span>
          <span className="badge">C/C++</span>
          <span className="badge">SQL</span>
          <span className="badge">MySQL</span>
          <span className="badge">Oracle</span>
          <span className="badge">Spark</span>
          <span className="badge">Hadoop</span>
          <span className="badge">Power BI</span>
          <span className="badge">Jupyter</span>
          <span className="badge">PostgreSQL</span>
          <span className="badge">Git</span>
          <span className="badge">Docker</span>
          <span className="badge">ERP</span>
          <span className="badge">Linux</span>
          <span className="badge">Visualisation</span>
        </div>

        {/* Soft Skills */}
        <div className="softskills-list">
          <h3>Soft Skills</h3>
          <ul>
            {content[language].softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <footer className="footer">
        <div className="contact-links">
          <a href="mailto:cakpossehelene@gmail.com" className="contact-link">
            <Mail size={20} /> <span>cakpossehelene@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-cakposs%C3%A8-923981276/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Linkedin size={20} /> <span>LinkedIn</span>
          </a>
          <p className="contact-phone">Téléphone : 06 51 25 34 98</p>
        </div>
        © {new Date().getFullYear()} Hélène CAKPOSSE – Portfolio conçu avec React & Vite
      </footer>
    </div>
  );
}

export default App;
