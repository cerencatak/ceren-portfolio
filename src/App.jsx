import { useState } from "react";
import "./index.css";
import profilePhoto from "./assets/cerenfoto.jpg";
import ceroAvatar from "./assets/cero-avatar.png";

const projectsData = {
  en: [
    {
      title: "Turkey Lakes Monitoring Platform",
      type: "Graduation Project",
      text: "A Web GIS-based environmental monitoring platform developed to analyze long-term lake area changes in Türkiye using satellite imagery and geospatial data. Landsat and Sentinel-2 datasets were processed through Google Earth Engine, and NDWI/MNDWI indices were used for surface water extraction and temporal change detection.",
      tags: ["Web GIS", "Remote Sensing", "Google Earth Engine", "NDWI", "Leaflet"],
      link: "https://turkiyelake.com",
      linkText: "Visit Project",
    },
    {
      title: "FIG Web GIS Project",
      type: "Full-Stack Web GIS Application",
      status: "Ongoing",
      text: "A full-stack Web GIS project involving spatial data management, route analysis, backend API services, and interactive map-based visualization. I contributed especially to the deployment stage, including server-side setup, build processes, Nginx configuration, application publishing, and live environment testing.",
      tags: ["FastAPI", "PostGIS", "Nginx", "Deployment", "Web GIS"],
    },
    {
      title: "Hacettepe Social",
      type: "Full-Stack Web GIS Project",
      text: "A full-stack Web GIS application designed for campus-based spatial and social interaction at Hacettepe University. The project includes interactive mapping, location-based data management, backend services, database workflows, and deployment experience.",
      tags: ["JavaScript", "Web GIS", "GitHub", "Backend", "Campus Mapping"],
      link: "https://github.com/GMT-458-Web-GIS/full-stack-web-gis-cerencatak",
      linkText: "View Project",
    },
    {
      title: "Omni Monitor",
      type: "Web GIS Monitoring Project",
      text: "A Web GIS-based monitoring and visualization project focused on presenting spatial information through interactive maps, analytical panels, and user-oriented dashboard components. The project strengthened practical experience in map-based visualization and GIS-oriented interface design.",
      tags: ["Dashboard", "Monitoring", "GIS", "UI/UX", "Visualization"],
      link: `${import.meta.env.BASE_URL}omni.pdf`,
      linkText: "View Project",
    },
  ],

  tr: [
    {
      title: "Turkey Lakes Monitoring Platform",
      type: "Bitirme Projesi",
      text: "Türkiye’deki göllerin uzun dönemli alan değişimlerini uydu görüntüleri ve coğrafi veriler kullanarak analiz etmek amacıyla Web GIS tabanlı bir çevresel izleme platformu geliştirildi. Landsat ve Sentinel-2 verileri Google Earth Engine üzerinden işlendi; NDWI/MNDWI su indeksleri kullanılarak su yüzeyi çıkarımı ve zamansal değişim analizi yapıldı.",
      tags: ["Web GIS", "Uzaktan Algılama", "Google Earth Engine", "NDWI", "Leaflet"],
      link: "https://turkiyelake.com",
      linkText: "Projeyi Gör",
    },
    {
      title: "FIG Web GIS Projesi",
      type: "Full-Stack Web GIS Uygulaması",
      status: "Devam Ediyor",
      text: "Mekânsal veri yönetimi, rota analizi, backend API servisleri ve interaktif harita tabanlı görselleştirme bileşenlerini içeren devam eden bir full-stack Web GIS projesidir. Bu projede özellikle deployment sürecinde yer aldım; sunucu tarafı kurulum, build işlemleri, Nginx yapılandırması, uygulamanın yayına alınması ve canlı ortam testleri üzerinde çalıştım.",
      tags: ["FastAPI", "PostGIS", "Nginx", "Deployment", "Web GIS"],
    },
    {
      title: "Hacettepe Social",
      type: "Full-Stack Web GIS Projesi",
      text: "Hacettepe Üniversitesi için kampüs tabanlı mekânsal ve sosyal etkileşimi desteklemek amacıyla geliştirilen full-stack Web GIS uygulamasıdır. Proje; interaktif haritalama, konum tabanlı veri yönetimi, backend servisleri, veri tabanı iş akışları ve deployment deneyimini içermektedir.",
      tags: ["JavaScript", "Web GIS", "GitHub", "Backend", "Kampüs Haritalama"],
      link: "https://github.com/GMT-458-Web-GIS/full-stack-web-gis-cerencatak",
      linkText: "Projeyi Gör",
    },
    {
      title: "Omni Monitor",
      type: "Web GIS İzleme Projesi",
      text: "Mekânsal bilgilerin interaktif haritalar, analitik paneller ve kullanıcı odaklı dashboard bileşenleriyle sunulmasına odaklanan Web GIS tabanlı bir izleme ve görselleştirme projesidir. Proje; harita tabanlı görselleştirme, GIS odaklı arayüz tasarımı ve mekânsal verinin anlaşılır şekilde sunulması konularındaki deneyimimi güçlendirdi.",
      tags: ["Dashboard", "İzleme", "GIS", "UI/UX", "Görselleştirme"],
      link: "/omni-monitor.pdf",
      linkText: "Projeyi Gör",
    },
  ],
};

const skillGroups = [
  {
    title: "Programming & Development",
    items: ["Python", "JavaScript", "HTML", "CSS", "FastAPI", "Git/GitHub"],
  },
  {
    title: "Web GIS & Mapping",
    items: ["Web GIS", "Leaflet", "GeoJSON", "Interactive Maps", "Spatial Visualization"],
  },
  {
    title: "GIS & Remote Sensing",
    items: ["QGIS", "ArcGIS", "Google Earth Engine", "Landsat", "Sentinel-2", "NDWI/MNDWI"],
  },
  {
  title: "Spatial Database & Deployment",
  items: ["PostgreSQL", "PostGIS", "Nginx", "AWS", "Vite", "Server Deployment", "API Workflows"],
  },
  {
    title: "Surveying & Photogrammetry",
    items: ["UAV Mapping", "GNSS", "Photogrammetry", "Agisoft Metashape", "Netcad", "AutoCAD"],
  },
];

const experiencesData = {
  en: [
    {
      title: "Intern — BMD Surveying Engineering Consultancy",
      date: "July 2025 – August 2025",
      text: "Worked on photogrammetry and stereo mapping workflows for engineering projects with a focus on data accuracy, production quality, and technical compliance.",
    },
    {
      title: "Intern — General Directorate of Turkish Coal Enterprises",
      date: "July 2024 – August 2024",
      text: "Processed large-scale mining license data with Netcad and participated in UAV-based field data collection for topographic mapping workflows.",
    },
    {
      title: "HKMO Software Development Camp",
      date: "February 2026",
      text: "Developed a full-stack Web GIS application for micro-scale flood risk analysis using PostgreSQL/PostGIS, interactive map visualization, and collaborative development workflows.",
    },
  ],

  tr: [
    {
      title: "Stajyer — BMD Harita Mühendislik Müşavirlik",
      date: "Temmuz 2025 – Ağustos 2025",
      text: "Mühendislik projeleri için fotogrametri ve stereo haritalama iş akışlarında görev aldım. Veri doğruluğu, üretim kalitesi ve teknik uygunluk süreçlerine odaklandım.",
    },
    {
      title: "Stajyer — Türkiye Kömür İşletmeleri Genel Müdürlüğü",
      date: "Temmuz 2024 – Ağustos 2024",
      text: "Netcad kullanarak büyük ölçekli maden ruhsat verilerinin işlenmesi üzerinde çalıştım ve topografik haritalama süreçleri için İHA tabanlı saha veri toplama çalışmalarına katıldım.",
    },
    {
      title: "HKMO Yazılım Geliştirme Kampı",
      date: "Şubat 2026",
      text: "Mikro ölçekte taşkın risk analizi için PostgreSQL/PostGIS, interaktif harita görselleştirme ve ekip çalışmasına dayalı geliştirme süreçlerini içeren full-stack Web GIS uygulaması geliştirdim.",
    },
  ],
};

const content = {
  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      hello: "Hello, I’m",
      name: "Ceren Çatak",
      role: "Geomatics Engineering Student | Web GIS & Geospatial Developer",
      description:
        "I am a final-year Geomatics Engineering student at Hacettepe University, focused on Web GIS, remote sensing, spatial data analysis, UAV mapping, and geospatial software development. I have experience in building interactive map-based applications, working with spatial databases, developing frontend interfaces, and designing user-oriented UI/UX workflows for geospatial projects. I enjoy transforming geographic data into clear, accessible, and decision-support-oriented digital systems.",
      tags: [
        "Web GIS",
        "Geospatial Development",
        "Remote Sensing",
        "Spatial Data Analysis",
        "Frontend Development",
        "UI/UX Design",
        "Spatial Databases",
        "UAV Mapping",
      ],
      viewProjects: "View Projects",
      contact: "Contact",
    },
    about: {
      eyebrow: "About Me",
      title: "A short introduction",
      p1: "My academic and project-based work focuses on geospatial technologies, interactive mapping systems, geospatial analysis, remote sensing workflows, and spatial database applications. I am especially interested in projects that combine software development with mapping, spatial analysis, data visualization, and user-oriented digital interfaces.",
      p2: "Through internships and project experience, I have worked on Web GIS, photogrammetry, geospatial data processing, deployment workflows, and environmental monitoring applications. I am also curious about artificial intelligence and its potential use in geospatial data analysis, image processing, decision-support systems, and smarter mapping applications.",
    },
    map: {
      eyebrow: "Location",
      title: "Cankaya, Ankara",
      caption: "OpenStreetMap view of Hacettepe University Beytepe Campus, Ankara.",
    },
    projectsTitle: {
      eyebrow: "Selected Projects",
      title: "Project-Based Geospatial Engineering Work",
      text: "A selection of projects focused on Web GIS, mapping technologies, remote sensing, visualization and deployment-oriented development.",
    },
    skillsTitle: {
      eyebrow: "Technical Skills",
      title: "Tools and Technologies",
      text: "A categorized overview of the tools and technologies I use in geospatial analysis, Web GIS development, remote sensing, spatial databases and deployment workflows.",
    },
    experienceTitle: {
      eyebrow: "Experience",
      title: "Field, Mapping and Software Experience",
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Let’s Connect",
      text: "I am open to opportunities in Web GIS, remote sensing, mapping systems, spatial data processing and geospatial software development.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "CV",
    },
    footer: "© 2026 Ceren Çatak — Geomatics Engineering Portfolio",
  },

  tr: {
    nav: {
      projects: "Projeler",
      skills: "Yetkinlikler",
      experience: "Deneyim",
      contact: "İletişim",
    },
    hero: {
      hello: "Merhaba, ben",
      name: "Ceren Çatak",
      role: "Geomatik Mühendisliği Öğrencisi | Web GIS & Geospatial Developer",
      description:
        "Hacettepe Üniversitesi Geomatik Mühendisliği son sınıf öğrencisiyim. Web GIS, uzaktan algılama, mekânsal veri analizi, İHA tabanlı haritalama ve coğrafi yazılım geliştirme alanlarına odaklanıyorum. İnteraktif harita tabanlı uygulamalar geliştirme, mekânsal veri tabanlarıyla çalışma, frontend arayüzler oluşturma ve coğrafi projeler için kullanıcı odaklı UI/UX süreçleri tasarlama konularında deneyim sahibiyim. Coğrafi veriyi anlaşılır, erişilebilir ve karar destek odaklı dijital sistemlere dönüştürmeyi seviyorum.",
      tags: [
        "Web GIS",
        "Coğrafi Yazılım Geliştirme",
        "Uzaktan Algılama",
        "Mekânsal Veri Analizi",
        "Frontend Development",
        "UI/UX Tasarımı",
        "Mekânsal Veri Tabanları",
        "İHA Haritalama",
      ],
      viewProjects: "Projeleri Gör",
      contact: "İletişim",
    },
    about: {
      eyebrow: "Hakkımda",
      title: "Kısa tanıtım",
      p1: "Akademik ve proje tabanlı çalışmalarım; coğrafi teknolojiler, interaktif haritalama sistemleri, mekânsal analiz, uzaktan algılama iş akışları ve mekânsal veri tabanı uygulamaları üzerine odaklanmaktadır. Özellikle yazılım geliştirme, haritalama, mekânsal analiz, veri görselleştirme ve kullanıcı odaklı dijital arayüzleri bir araya getiren projelere ilgi duyuyorum.",
      p2: "Stajlarım ve proje deneyimlerim kapsamında Web GIS, fotogrametri, coğrafi veri işleme, deployment süreçleri ve çevresel izleme uygulamaları üzerinde çalıştım. Ayrıca yapay zekânın coğrafi veri analizi, görüntü işleme, karar destek sistemleri ve daha akıllı haritalama uygulamalarında nasıl kullanılabileceğine ilgi duyuyor ve bu alanda kendimi geliştirmeyi hedefliyorum.",
    },

    map: {
      eyebrow: "Konum",
      title: "Çankaya, Ankara",
      caption: "Hacettepe Üniversitesi Beytepe Kampüsü, Ankara için OpenStreetMap görünümü.",
    },
    projectsTitle: {
      eyebrow: "Seçili Projeler",
      title: "Proje Tabanlı Geomatik ve Web GIS Çalışmaları",
      text: "Web GIS, haritalama teknolojileri, uzaktan algılama, görselleştirme ve deployment odaklı geliştirme süreçlerini içeren proje seçkisi.",
    },
    skillsTitle: {
      eyebrow: "Teknik Yetkinlikler",
      title: "Araçlar ve Teknolojiler",
      text: "Mekânsal analiz, Web GIS geliştirme, uzaktan algılama, mekânsal veri tabanları ve deployment süreçlerinde kullandığım araç ve teknolojilerin kategorize edilmiş özeti.",
    },
    experienceTitle: {
      eyebrow: "Deneyim",
      title: "Saha, Haritalama ve Yazılım Deneyimi",
    },
    contactSection: {
      eyebrow: "İletişim",
      title: "Bağlantı Kuralım",
      text: "Web GIS, uzaktan algılama, haritalama sistemleri, mekânsal veri işleme ve coğrafi yazılım geliştirme alanlarındaki fırsatlara açığım.",
      email: "E-posta",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "CV",
    },
    footer: "© 2026 Ceren Çatak — Geomatik Mühendisliği Portfolyosu",
  },
};

const assistantAnswers = [
  {
    keywords: ["project", "projects", "proje", "projeler"],
    answer:
      "Ceren has worked on Web GIS and geospatial projects such as Turkey Lakes Monitoring Platform, FIG Web GIS Project, Hacettepe Social, and Omni Monitor.",
  },
  {
    keywords: ["skills", "skill", "yetkinlik", "yetenek", "tools", "technologies"],
    answer:
      "Her main skills include Web GIS, Remote Sensing, Python, JavaScript, PostgreSQL/PostGIS, FastAPI, QGIS, Google Earth Engine, UAV mapping, AWS, and deployment workflows.",
  },
  {
    keywords: ["education", "university", "school", "hacettepe", "eğitim", "üniversite", "okul"],
    answer:
      "Ceren is a final-year Geomatics Engineering student at Hacettepe University.",
  },
  {
    keywords: ["internship", "intern", "staj", "stajyer"],
    answer:
      "Ceren completed internships at BMD Surveying Engineering Consultancy and the General Directorate of Turkish Coal Enterprises. Her internship experience includes photogrammetry, stereo mapping, UAV-based data collection, Netcad workflows, and geospatial data processing.",
  },
  {
    keywords: ["uav", "drone", "iha", "İHA", "uav mapping", "drone mapping"],
    answer:
      "Ceren has experience in UAV-based data collection and mapping workflows. She also holds an SHGM UAV Pilot Certificate, supporting her work in aerial data collection and photogrammetry.",
  },
  {
    keywords: ["remote sensing", "uzaktan algılama", "satellite", "satellite imagery", "uydu", "landsat", "sentinel"],
    answer:
      "Ceren has remote sensing experience through projects using Landsat and Sentinel-2 satellite imagery. In her Turkey Lakes Monitoring Platform project, she used Google Earth Engine and NDWI/MNDWI indices for surface water extraction and temporal change analysis.",
  },
  {
    keywords: ["python", "programming", "coding", "kodlama", "yazılım"],
    answer:
      "Ceren uses Python for geospatial data processing, analysis workflows, and Web GIS-related development tasks. She also has experience with JavaScript, HTML, CSS, and FastAPI.",
  },
  {
    keywords: ["postgis", "postgresql", "database", "spatial database", "mekânsal veri tabanı", "veri tabanı"],
    answer:
      "Ceren has experience with PostgreSQL and PostGIS for spatial database management, spatial queries, GeoJSON workflows, and Web GIS backend integration.",
  },
  {
    keywords: ["deployment", "deploy", "server", "nginx", "production", "yayına alma", "sunucu"],
    answer:
      "Ceren has deployment experience through the FIG Web GIS Project. She contributed to server-side setup, build processes, Nginx configuration, application publishing, and live environment testing.",
  },
  {
    keywords: ["aws", "amazon web services", "cloud", "bulut"],
    answer:
      "Ceren has experience with AWS-related deployment workflows through Web GIS project work, including publishing and managing web-based geospatial applications in a server/cloud environment.",
  },
  {
    keywords: ["cv", "resume", "curriculum vitae", "özgeçmiş"],
    answer:
      "Ceren’s CV highlights her Geomatics Engineering background, Web GIS projects, remote sensing experience, UAV mapping skills, internships, and geospatial software development experience.",
  },
  {
    keywords: ["language", "languages", "english", "german", "dil", "ingilizce", "almanca"],
    answer:
      "Ceren’s language skills include English at B2 level and German at A1 level.",
  },
  {
    keywords: ["location", "where", "based", "ankara", "turkey", "türkiye", "konum", "nerede"],
    answer:
      "Ceren is based in Ankara, Türkiye. Her portfolio also highlights Hacettepe University Beytepe Campus on the map section.",
  },
  {
    keywords: ["turkey lakes", "turkiyelake", "lake", "göl", "göller"],
    answer:
      "Turkey Lakes Monitoring Platform is Ceren’s graduation project. It analyzes long-term lake area changes in Türkiye using satellite imagery, Google Earth Engine, NDWI/MNDWI indices, and Web GIS visualization tools. The live website is available from the project card.",
  },
  {
    keywords: ["fig", "fig web gis", "route", "routing"],
    answer:
      "FIG Web GIS Project is an ongoing full-stack Web GIS application involving spatial data management, route analysis, backend API services, and interactive map-based visualization. Ceren especially contributed to the deployment stage.",
  },
  {
    keywords: ["hacettepe social", "github", "repository"],
    answer:
      "Hacettepe Social is a full-stack Web GIS project developed for campus-based spatial and social interaction at Hacettepe University. The GitHub repository is available from the project card.",
  },
  {
    keywords: ["omni", "omni monitor", "monitoring", "dashboard"],
    answer:
      "Omni Monitor is a Web GIS-based monitoring and visualization project focused on interactive maps, analytical panels, dashboard components, and user-oriented spatial data visualization.",
  },
  {
    keywords: ["contact", "email", "linkedin", "iletişim", "mail"],
    answer:
      "You can contact Ceren through the contact section of this portfolio via email, LinkedIn, or GitHub.",
  },
];

function getAssistantResponse(question) {
  const lowerQuestion = question.toLowerCase();

  const matchedAnswer = assistantAnswers.find((item) =>
    item.keywords.some((keyword) => lowerQuestion.includes(keyword))
  );

  if (matchedAnswer) {
    return matchedAnswer.answer;
  }

  return "I can answer questions about Ceren’s projects, skills, education, Web GIS experience, deployment work, and contact information.";
}


function App() {
  const [language, setLanguage] = useState("en");
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantInput, setAssistantInput] = useState("");
  const [assistantMessages, setAssistantMessages] = useState([
    {
      sender: "assistant",
      text: "Hi, I’m Cero. I can answer questions about Ceren’s projects, skills, education, and contact information.",
    },
  ]);

  const t = content[language];
  const projects = projectsData[language];
  const experiences = experiencesData[language];

  const handleAssistantSubmit = (e) => {
    e.preventDefault();

    if (!assistantInput.trim()) return;

    const userQuestion = assistantInput;
    const response = getAssistantResponse(userQuestion);

    setAssistantMessages((prev) => [
      ...prev,
      { sender: "user", text: userQuestion },
      { sender: "assistant", text: response },
    ]);

    setAssistantInput("");
  };

  return (
    <div className="page">
      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>
      <div className="background-orb orb-three"></div>

      <header className="navbar glass">
        <div className="logo">Ceren Çatak</div>

        <nav>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <div className="language-switch">
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            className={language === "tr" ? "active" : ""}
            onClick={() => setLanguage("tr")}
          >
            TR
          </button>
        </div>
      </header>

      <main>
        <section className="hero intro-hero">
          <div className="intro-text glass">
            <p className="eyebrow">{t.hero.hello}</p>
            <h1 className="intro-name">{t.hero.name}</h1>
            <h2 className="intro-role">{t.hero.role}</h2>

            <p className="intro-description">
              {t.hero.description}
            </p>

            <div className="intro-mini-tags">
              {t.hero.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                {t.hero.viewProjects}
              </a>
              <a href="#contact" className="secondary-btn">
                {t.hero.contact}
              </a>
            </div>
          </div>

          <div className="intro-photo glass">
            <div className="photo-placeholder real-photo">
              <img src={profilePhoto} alt="Ceren Çatak" />
            </div>
          </div>
        </section>

        <section className="section about-map-section">
        <div className="about-map-grid">
          <div className="about-card glass">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>

          <div className="map-card glass">
            <p className="eyebrow">{t.map.eyebrow}</p>
            <h2>{t.map.title}</h2>

            <div className="map-frame">
              <iframe
                title="Cankaya Ankara"
                src="https://www.openstreetmap.org/export/embed.html?bbox=32.70%2C39.84%2C32.77%2C39.89&layer=mapnik&marker=39.8673%2C32.7346"
                loading="lazy"
              ></iframe>
            </div>

            <p className="map-caption">{t.map.caption}</p>
          </div>
        </div>
      </section>

          <section id="projects" className="section">
            <div className="section-title">
             <p className="eyebrow">{t.projectsTitle.eyebrow}</p>
             <h2>{t.projectsTitle.title}</h2>
             <p>{t.projectsTitle.text}</p>
            </div>

  <div className="project-grid">
    {projects.map((project) => (
      <article className="project-card glass" key={project.title}>
        <div className="project-top-line">
          <span className="project-type">{project.type}</span>

          {project.status && (
            <span className="ongoing-badge">{project.status}</span>
          )}
        </div>

        <h3>{project.title}</h3>
        <p>{project.text}</p>

        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            {project.linkText || "Visit Project"}
          </a>
        )}
      </article>
    ))}
  </div>
</section>

  <section id="skills" className="section">
    <div className="section-title">
    <p className="eyebrow">{t.skillsTitle.eyebrow}</p>
    <h2>{t.skillsTitle.title}</h2>
    <p>{t.skillsTitle.text}</p>
    </div>

    <div className="skill-group-grid">
      {skillGroups.map((group) => (
        <div className="skill-group-card glass" key={group.title}>
          <h3>{group.title}</h3>

          <div className="skill-tags">
            {group.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>

        <section id="experience" className="section">
          <div className="section-title">
            <p className="eyebrow">{t.experienceTitle.eyebrow}</p>
            <h2>{t.experienceTitle.title}</h2>
          </div>

          <div className="timeline">
            {experiences.map((item) => (
              <div className="timeline-item glass" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <span>{item.date}</span>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

          <section id="contact" className="contact glass">
            
            <p className="eyebrow">{t.contactSection.eyebrow}</p>
            <h2>{t.contactSection.title}</h2>
            <p>{t.contactSection.text}</p>

            <div className="contact-links">
              <a href="mailto:cerencatak00@gmail.com">
                {t.contactSection.email}
              </a>

              <a
                href="https://www.linkedin.com/in/ceren-catak"
                target="_blank"
                rel="noreferrer"
              >
                {t.contactSection.linkedin}
              </a>

              <a
                href="https://github.com/cerencatak"
                target="_blank"
                rel="noreferrer"
              >
                {t.contactSection.github}
              </a>

              <a
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                {t.contactSection.cv}
              </a>
        
            </div>
          </section>


            <div className={`assistant-widget ${assistantOpen ? "open" : ""}`}>
              {assistantOpen && (
                <div className="assistant-panel glass">
                  <div className="assistant-header">
                    <div className="assistant-title">
                      <img
                        src={ceroAvatar}
                        alt="Cero assistant avatar"
                        className="assistant-title-avatar-img"
                      />

                      <div>
                        <strong>Cero</strong>
                        <span>Portfolio Assistant</span>
                      </div>
                    </div>

                    <button onClick={() => setAssistantOpen(false)}>×</button>
                  </div>

                  <div className="assistant-messages">
                    {assistantMessages.map((message, index) => (
                      <div
                        key={index}
                        className={`assistant-message ${message.sender}`}
                      >
                        {message.text}
                      </div>
                    ))}
                  </div>

                  <form className="assistant-form" onSubmit={handleAssistantSubmit}>
                    <input
                      type="text"
                      value={assistantInput}
                      onChange={(e) => setAssistantInput(e.target.value)}
                      placeholder="Ask Cero a question..."
                    />
                    <button type="submit">Send</button>
                  </form>
                </div>
              )}

              <button
                className="assistant-toggle"
                onClick={() => setAssistantOpen(!assistantOpen)}
                aria-label="Open Cero assistant"
              >
                <img
                  src={ceroAvatar}
                  alt="Cero assistant avatar"
                  className="assistant-avatar-img"
                />
              </button>
            </div>
          </main>

            

          <footer>{t.footer}</footer>
      </div>
    );
  }

export default App;