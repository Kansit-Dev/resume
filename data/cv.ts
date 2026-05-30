// data/cv.ts — ข้อมูล CV ทั้งหมด รองรับ 2 ภาษา (EN / TH)

const baseProfile = {
  email: "t.jet.kantasit@gmail.com",
  phone: "083-715-8541",
  github: "https://github.com/kantasit",
  linkedin: "https://linkedin.com/in/kantasit",
};

const baseSkills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "C#", "HTML5", "CSS3"],
  frameworks: ["Next.js (App Router)", "React", "Tailwind CSS"],
  backend: ["FastAPI", "Node.js", "REST API", "Docker", "CI/CD"],
  databases: ["MariaDB", "PostgreSQL", "Redis", "OpenSearch"],
  tools: ["Git", "Git Flow", "Postman", "Figma"],
  testing: ["Pytest", "Playwright"],
};

export const cvData = {
  en: {
    profile: {
      ...baseProfile,
      name: "Kantasit Tipsapapkul",
      title: "Full Stack Developer",
      location: "Bangkok, Thailand 10230",
      summary: "Mathematics with Computer Science graduate with hands-on full-stack development experience building production-ready healthcare applications. Proven ability to architect end-to-end solutions — from database design to responsive frontends — with a methodical, problem-solving mindset. Skilled at translating complex user requirements into clean, scalable technical solutions and bridging the gap between stakeholders and development teams.",
    },
    experiences: [
      {
        company: "RAX Interdiagnostic Co., Ltd.",
        role: "Full Stack Developer Intern",
        location: "Bangkok, Thailand",
        period: "May 2025 – March 2026",
        bullets: [
          "Architected and built a full-stack laboratory web application using Next.js (App Router) and FastAPI, migrating a legacy desktop system to a modern platform integrating external lab services with hospital systems, backed by MariaDB",
          "Engineered a real-time data integration pipeline using Next.js and FastAPI to automate transfer of medical instrument data into Hospital Information Systems (HIS), backed by PostgreSQL",
          "Built reusable React component libraries and designed responsive UX/UI with Tailwind CSS and Figma, focused on usability and clinical workflow efficiency; integrated frontend with RESTful APIs",
          "Implemented Redis caching and OpenSearch for performance optimization across the data layer",
          "Containerized full application stack with Docker, ensuring consistent environments across development and deployment",
          "Collaborated in an Agile team with regular stakeholder updates and iterative feature delivery",
          "Conducted system testing, debugging, and performance optimization to maintain application reliability",
        ],
      },
    ],
    projects: [
      {
        name: "Data to Data System (D2D)",
        subtitle: "Capstone Project",
        period: "2025 – 2026",
        stack: ["Next.js", "FastAPI", "MariaDB", "Docker", "Redis"],
        bullets: [
          "Migrated a legacy desktop laboratory data management system to a full-stack web application with role-based access control and real-time data synchronization",
          "Designed system architecture, UML diagrams, ERD, and full technical documentation in Thai academic format",
        ],
        github: "",
        demo: "",
      },
      {
        name: "RaxGeniusPOCT-mini LIS",
        subtitle: "Laboratory Information System",
        period: "2025 – 2026",
        stack: ["React", "FastAPI", "PostgreSQL", "Redis"],
        bullets: [
          "Built a Point-of-Care Testing (POCT) laboratory information system with automated device interfacing and result reporting",
        ],
        github: "",
        demo: "",
      },
    ],
    education: [
      {
        institution: "King Mongkut's University of Technology North Bangkok",
        degree: "B.Sc. Mathematics with Computer Science",
        period: "2022 – 2026",
        details: [
          "Capstone: Data to Data System — web migration of legacy lab data system (Next.js · FastAPI · MariaDB)",
          "Relevant coursework: Data Structures, Database Systems, Software Engineering, Web Application Development",
        ],
      },
    ],
    skills: {
      ...baseSkills,
      spoken: ["Thai (Native)", "English (Working Proficiency)"],
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    ui: {
      downloadPdf: "Download PDF",
      aboutMe: "About Me",
      professionalJourney: "Professional Journey",
      workExperience: "Work Experience",
      technicalExpertise: "Technical Expertise",
      featuredProjects: "Featured Projects",
      recentWork: "Recent Work",
      academicBackground: "Academic Background",
      education: "Education",
      getInTouch: "Get In Touch",
      contactInformation: "Contact Information",
      sayHello: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
      developedWith: "Designed and developed with",
      by: "by",
    }
  },
  th: {
    profile: {
      ...baseProfile,
      name: "กัณฑศิษฎ ทิพยสภาพกุล",
      title: "Full Stack Developer",
      location: "กรุงเทพมหานคร, ประเทศไทย 10230",
      summary: "บัณฑิตสาขาคณิตศาสตร์ประยุกต์และวิทยาการคอมพิวเตอร์ มีประสบการณ์ในการพัฒนาเว็บไซต์แบบ Full-stack โดยเฉพาะการพัฒนาระบบสำหรับใช้จริงในโรงพยาบาล สามารถออกแบบสถาปัตยกรรมระบบตั้งแต่ฐานข้อมูลจนถึง Frontend ได้อย่างครบวงจร มีทักษะในการแก้ปัญหาอย่างเป็นระบบ และสามารถแปลงความต้องการที่ซับซ้อนให้กลายเป็นโซลูชันที่ใช้งานได้จริง รวมถึงเป็นสื่อกลางระหว่างผู้ใช้งานและทีมพัฒนาได้เป็นอย่างดี",
    },
    experiences: [
      {
        company: "บริษัท แร็กซ์ อินเตอร์ไดแอกนอสติก จำกัด",
        role: "นักศึกษาฝึกงานตำแหน่ง Full Stack Developer",
        location: "กรุงเทพมหานคร, ประเทศไทย",
        period: "พฤษภาคม 2025 – มีนาคม 2026",
        bullets: [
          "ออกแบบและพัฒนาเว็บแอปพลิเคชันสำหรับห้องปฏิบัติการทางการแพทย์โดยใช้ Next.js และ FastAPI เปลี่ยนระบบเดสก์ท็อปแบบเดิมเป็นแพลตฟอร์มที่ทันสมัย เชื่อมต่อบริการจากภายนอกกับระบบโรงพยาบาล โดยมี MariaDB เป็นฐานข้อมูล",
          "สร้างระบบเชื่อมต่อข้อมูลแบบเรียลไทม์เพื่อรับส่งข้อมูลจากเครื่องมือแพทย์เข้าสู่ระบบสารสนเทศโรงพยาบาล (HIS) โดยอัตโนมัติ ใช้งานคู่กับ PostgreSQL",
          "สร้าง React component library และออกแบบ UX/UI ที่รองรับทุกหน้าจอด้วย Tailwind CSS และ Figma โดยเน้นความสะดวกในการใช้งานของบุคลากรทางการแพทย์ เชื่อมต่อ frontend กับ RESTful APIs",
          "นำ Redis และ OpenSearch มาใช้เพื่อเพิ่มประสิทธิภาพการทำงานของระบบในการจัดการข้อมูลจำนวนมาก",
          "นำ Docker มาใช้ในการจัดการ Container ของแอปพลิเคชันทั้งระบบ เพื่อให้สภาพแวดล้อมเหมือนกันทั้งตอนพัฒนาและนำไปใช้งานจริง",
          "ทำงานร่วมกับทีมในรูปแบบ Agile นำเสนองานและส่งมอบฟีเจอร์อย่างต่อเนื่อง",
          "ทดสอบระบบ ตรวจสอบและแก้ไขข้อผิดพลาด เพื่อให้แอปพลิเคชันทำงานได้อย่างมีเสถียรภาพ",
        ],
      },
    ],
    projects: [
      {
        name: "ระบบการจัดการข้อมูล Data to Data (D2D)",
        subtitle: "โครงงานปริญญานิพนธ์",
        period: "2025 – 2026",
        stack: ["Next.js", "FastAPI", "MariaDB", "Docker", "Redis"],
        bullets: [
          "เปลี่ยนระบบการจัดการข้อมูลห้องปฏิบัติการแบบเดสก์ท็อป เป็นเว็บแอปพลิเคชันที่มีการควบคุมสิทธิ์การเข้าถึง และการซิงค์ข้อมูลแบบเรียลไทม์",
          "ออกแบบสถาปัตยกรรมระบบ สร้าง UML diagrams, ERD และจัดทำเอกสารประกอบโครงงานแบบวิชาการภาษาไทยครบถ้วน",
        ],
        github: "",
        demo: "",
      },
      {
        name: "ระบบ RaxGeniusPOCT-mini LIS",
        subtitle: "ระบบสารสนเทศห้องปฏิบัติการ",
        period: "2025 – 2026",
        stack: ["React", "FastAPI", "PostgreSQL", "Redis"],
        bullets: [
          "พัฒนาระบบสารสนเทศสำหรับห้องปฏิบัติการ ณ จุดดูแลผู้ป่วย (POCT) พร้อมระบบเชื่อมต่อเครื่องมืออัตโนมัติและรายงานผล",
        ],
        github: "",
        demo: "",
      },
    ],
    education: [
      {
        institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
        degree: "วิทยาศาสตรบัณฑิต สาขาคณิตศาสตร์ประยุกต์และวิทยาการคอมพิวเตอร์",
        period: "2022 – 2026",
        details: [
          "ปริญญานิพนธ์: ระบบ Data to Data — การเปลี่ยนระบบข้อมูลห้องปฏิบัติการเดิมสู่เว็บไซต์ (Next.js · FastAPI · MariaDB)",
          "วิชาที่เกี่ยวข้อง: โครงสร้างข้อมูล, ระบบฐานข้อมูล, วิศวกรรมซอฟต์แวร์, การพัฒนาเว็บแอปพลิเคชัน",
        ],
      },
    ],
    skills: {
      ...baseSkills,
      spoken: ["ไทย (เจ้าของภาษา)", "อังกฤษ (ระดับใช้ทำงานได้)"],
    },
    nav: {
      home: "หน้าแรก",
      about: "เกี่ยวกับ",
      experience: "ประสบการณ์",
      skills: "ทักษะ",
      projects: "ผลงาน",
      education: "การศึกษา",
      contact: "ติดต่อ",
    },
    ui: {
      downloadPdf: "ดาวน์โหลด PDF",
      aboutMe: "เกี่ยวกับฉัน",
      professionalJourney: "เส้นทางการทำงาน",
      workExperience: "ประสบการณ์ทำงาน",
      technicalExpertise: "ความเชี่ยวชาญทางเทคนิค",
      featuredProjects: "ผลงานที่โดดเด่น",
      recentWork: "ผลงานล่าสุด",
      academicBackground: "ประวัติการศึกษา",
      education: "การศึกษา",
      getInTouch: "ช่องทางการติดต่อ",
      contactInformation: "ข้อมูลติดต่อ",
      sayHello: "ผมเปิดรับโอกาสใหม่ๆ โปรเจกต์ หรือการพูดคุยเพื่อร่วมเป็นส่วนหนึ่งในวิสัยทัศน์ของคุณเสมอ",
      developedWith: "ออกแบบและพัฒนาด้วย",
      by: "โดย",
    }
  }
};
