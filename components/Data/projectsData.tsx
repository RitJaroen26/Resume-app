import {
    // ChevronLeft,
    // ChevronRight,
    // ExternalLink,
    // Github,
    // Calendar,
    // Tag,
    // X,
    // Eye,
    Code,
    Smartphone,
    Globe,
    // Database,
    Palette,
    Camera,
    // ChevronDown,
    // Check
} from 'lucide-react';
import { JSX } from "react";

export type Project = {
    id: number;
    title: string;
    category: string;
    categoryName: string;
    categorieNameTh: string;
    image: string;
    technologies: string[];
    date: string;
    description: string;
    descriptionTh: string;
    longDescription: string;
    longDescriptionTh: string;
    features: string[];
    featuresTh: string[];
    demoUrl: string;
    githubUrl: string;
    icon: JSX.Element;
};

export type MiniProject = {
    id: number;
    title: string;
    category: string;
    categoryName: string;
    categorieNameTh: string;
    image: string;
    technologies: string[];
    date: string;
    description: string;
    descriptionTh: string;
    longDescription: string;
    longDescriptionTh: string;
    features: string[];
    featuresTh: string[];
    demoUrl: string;
    githubUrl: string;
    icon: JSX.Element;
}


export const projects: Project[] = [
    {
        id: 1,
        title: "Personal Portfolio",
        category: "Web & Mobile",
        categoryName: "Web Application",
        categorieNameTh: "เว็บแอปพลิเคชัน",
        image: "/images/portfolio.png",
        technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        date: "2025",
        description: "A portfolio website designed and developed by myself, showcasing real work, skills and experience to serve as a sample of work for job search and freelance work.",
        descriptionTh: "เว็บไซต์พอร์ตโฟลิโอที่ออกแบบและพัฒนาโดยตัวผมเอง เพื่อนำเสนอผลงาน ทักษะ และประสบการณ์จริง เพื่อเป็นตัวอย่างงานสำหรับการหางานและงานอิสระ",
        longDescription: "This website is an online portfolio I designed and developed myself. It's intended to serve as a platform for showcasing my work, skills, and experience in full-stack development and beyond. On this website, you'll find examples of my web development coding and past work, which honestly reflect my capabilities. Creating this website not only showcases my work, but also demonstrates my understanding of the real world, from planning and designing to development and customization for users.",
        longDescriptionTh: "เว็บไซต์นี้คือพอร์ตโฟลิโอออนไลน์ที่ฉันออกแบบและพัฒนาเอง มีวัตถุประสงค์เพื่อเป็นแพลตฟอร์มสำหรับแสดงผลงาน ทักษะ และประสบการณ์ด้านการพัฒนาแบบฟูลสแตกและอื่นๆ ในเว็บไซต์นี้ คุณจะพบกับตัวอย่างการเขียนโค้ดและผลงานที่ผ่านมา ซึ่งสะท้อนถึงศักยภาพของฉันอย่างแท้จริง การสร้างเว็บไซต์นี้ไม่เพียงแต่แสดงให้เห็นถึงผลงานของฉันเท่านั้น แต่ยังแสดงให้เห็นถึงความเข้าใจในโลกแห่งความเป็นจริง ตั้งแต่การวางแผน การออกแบบ ไปจนถึงการพัฒนาและการปรับแต่งให้เหมาะกับผู้ใช้",
        features: [
            "Includes all examples of work that has been done.",
            "Reflects the owner's skills and working style",
            "This website is designed and developed by us.",
            "Employers can conveniently view their work on any device.",
            "Visitors can easily navigate to various works or information.",
            "Responsive design for all devices"
        ],
        featuresTh: [
            "รวบรวมผลงานที่ทำสำเร็จไปแล้ว",
            "สะท้อนถึงทักษะและสไตล์การทำงานของเจ้าของ",
            "เว็บไซต์นี้ได้รับการออกแบบและพัฒนาโดยผม",
            "สามารถดูงานของผมได้อย่างสะดวกบนอุปกรณ์ใดก็ได้",
            "ผู้เยี่ยมชมสามารถนำทางไปยังงานหรือข้อมูลต่างๆ ได้อย่างง่ายดาย",
            "การออกแบบที่ตอบสนองสำหรับทุกอุปกรณ์"
        ],
        demoUrl: "https://leafmeat-food.onrender.com/",
        githubUrl: "https://github.com/RitJaroen26/Resume-app",
        icon: <Globe size={24} />
    },
    {
        id: 2,
        title: "Wat Thang Luang Website Official",
        category: "Web & Mobile",
        categoryName: "Web Application",
        categorieNameTh: "เว็บแอปพลิเคชัน",
        image: "/images/Project_Wat.png",
        technologies: ["TypeScript, Next.js, Tailwind CSS"],
        date: "2026",
        description: "The official mobile-first website for Wat Thang Luang Buddhist Sunday School, dynamic PR content, and a seamless online donation gateway.",
        descriptionTh: "เว็บไซต์อย่างเป็นทางการของศูนย์ศึกษาพระพุทธศาสนาวันอาทิตย์ วัดทางหลวง ออกแบบด้วยแนวคิด Mobile-First เพื่อการประชาสัมพันธ์ข่าวสาร และมีระบบรับแจ้งการบริจาคออนไลน์ที่ใช้งานง่าย",
        longDescription: "A modern, public-facing portal designed to bridge the gap between the institution and the community. Built with a focus on UI/UX and accessibility, the website revitalizes the organization's digital presence, making it effortless for users to access news, schedules, and interact with the center on any device.",
        longDescriptionTh: "เว็บไซต์สาธารณะที่ทำหน้าที่เป็นประตูเชื่อมระหว่างศูนย์ศึกษาฯ และบุคคลทั่วไป ถูกออกแบบใหม่ทั้งหมดให้มีความทันสมัย สวยงาม และเข้าถึงข้อมูลได้ง่ายบนทุกอุปกรณ์ (Responsive Design) เพื่อยกระดับภาพลักษณ์ขององค์กร",
        features: [
            "An intuitive e-slip submission system for digital donations, complete with strict frontend validation to ensure data integrity and proper file handling.",
            "An intelligent virtual assistant configured to handle public inquiries and FAQs 24/7, improving user engagement.",
            "A responsive news and activity feed dynamically populated from the back-office database.",
            "Show infomation of Watthangluang",
        ],
        featuresTh: [
            "ระบบรับแจ้งโอนเงินบริจาคออนไลน์ พร้อมฟังก์ชันอัปโหลดหลักฐาน (E-Slip) ที่มีการตรวจสอบขนาดและประเภทไฟล์ (Frontend Validation) เพื่อป้องกันข้อผิดพลาด",
            "บูรณาการระบบแชทบอทอัจฉริยะสำหรับตอบคำถามที่พบบ่อย (FAQ) แก่ผู้ปกครองและนักเรียนได้ตลอด 24 ชั่วโมง",
            "แสดงผลข่าวสาร กิจกรรม และปฏิทินกำหนดการต่างๆ ที่เชื่อมโยงข้อมูลตรงจากฐานข้อมูลหลังบ้าน",
            "แสดงข้อมูลของสถานที่",
        ],
        demoUrl: "https://wat.chesster.net/wat/",
        githubUrl: "https://github.com/RitJaroen26/Wat-Thang-Luang-Frontend",
        icon: <Globe size={24} />
    },
    {
        id: 3,
        title: "Academic Registration & Admin Dashboard of Wat Thang Luang",
        category: "Web & Mobile",
        categoryName: "Web Application",
        categorieNameTh: "เว็บแอปพลิเคชัน",
        image: "/images/Project_Wat2.png",
        technologies: ["TypeScript, Next.js, Tailwind CSS, PHP, Laravel, MySQL, RESTful API"],
        date: "2026",
        description: "A comprehensive full-stack web application driving the digital transformation of academic registrations, featuring a data-driven Admin Dashboard and AI-powered workflow automation.",
        descriptionTh: "ระบบเว็บแอปพลิเคชันแบบ Full-Stack สำหรับจัดการงานทะเบียนนักเรียน พร้อมแดชบอร์ดอัจฉริยะสำหรับผู้ดูแลระบบ ที่นำเทคโนโลยี AI มาช่วยวิเคราะห์ข้อมูลและจัดลำดับความสำคัญของงาน",
        longDescription: "A robust internal platform built to replace legacy paper-based workflows with a fully digitized system. It encompasses a self-service academic portal for students and a powerful, data-driven back-office application designed to optimize administrative efficiency and operational management.",
        longDescriptionTh: "แพลตฟอร์มที่เข้ามาทำ Digital Transformation เปลี่ยนกระบวนการทำงานของศูนย์ฯ จากระบบเอกสารกระดาษ สู่ระบบดิจิทัลแบบ 100% ประกอบด้วยพอร์ทัลสำหรับนักเรียนในการลงทะเบียนเรียนด้วยตนเอง และระบบหลังบ้าน (Back-office) ที่ทรงประสิทธิภาพสำหรับบุคลากร",
        features: [
            "A real-time analytics command center utilizing complex data visualization (Recharts) to track enrollment trends and financial metrics. Includes a personalized 'Quick Actions' panel tailored to individual administrators.",
            "A highly secure permission management system ensuring granular access levels across Students, Staff, and Super Administrators.",
            "Centralized verification pipelines for processing student enrollments and auditing financial donation slips.",
            "Register to study for students.",
            "Manage the various teaching and learning activities at the center."
        ],
        featuresTh: [
            "ระบบจัดการโปรไฟล์นักเรียน การสมัครเรียนในรายวิชา/กิจกรรมต่างๆ และการตรวจสอบสถานะการอนุมัติแบบออนไลน์",
            "ระบบรักษาความปลอดภัยและจำกัดสิทธิ์ผู้ใช้งานที่รัดกุม แบ่งแยกระดับการเข้าถึงข้อมูลระหว่าง นักเรียน, บุคลากรทั่วไป, และผู้ดูแลระบบระดับสูง",
            "ระบบตรวจสอบและอนุมัติการลงทะเบียนและสลิปเงินบริจาค ที่ทำงานได้อย่างรวดเร็วและแม่นยำ",
            "ลงทะเบียนการศึกษาสำหรับนักเรียน",
            "จัดการการเรียนการสอนต่างๆของทางศูนย์"
        ],
        demoUrl: "https://registration-wat-thang-luang.vercel.app/registrar/home",
        githubUrl: "https://github.com/RitJaroen26/Wat-Thang-Luang-Reg",
        icon: <Globe size={24} />
    },
];

export const miniProjects: MiniProject[] = [
    {
        id: 1,
        title: "Food Ordering System",
        category: "Web & Mobile",
        categoryName: "Web Application",
        categorieNameTh: "เว็บแอปพลิเคชัน",
        image: "/images/food-ordering.png",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        date: "2024",
        description: "I learned and experimented with creating a web application about food ordering system using React.js and Node.js. to build new skills in using frameworks.",
        descriptionTh: "ผมได้เรียนรู้และทดลองสร้างแอปพลิเคชันเว็บเกี่ยวกับระบบสั่งอาหารโดยใช้ React.js และ Node.js เพื่อสร้างทักษะใหม่ในการใช้เฟรมเวิร์ก",
        longDescription: "This comprehensive food ordering platform features a modern React frontend with a responsive design, robust Node.js backend API, and MongoDB database. The platform includes user authentication, shopping cart functionality, secure payment processing through Stripe, order management, and an admin dashboard for inventory and order management. The application is optimized for performance and includes features like product search, filtering, and user reviews.",
        longDescriptionTh: "แพลตฟอร์มระบบสั่งอาหารที่ครอบคลุมนี้มาพร้อมกับส่วนหน้า React ที่ทันสมัยพร้อมดีไซน์แบบ Responsive, API แบ็กเอนด์ Node.js ที่แข็งแกร่ง และฐานข้อมูล MongoDB แพลตฟอร์มนี้ประกอบด้วยการตรวจสอบสิทธิ์ผู้ใช้ ฟังก์ชันตะกร้าสินค้า การประมวลผลการชำระเงินที่ปลอดภัยผ่าน Stripe การจัดการคำสั่งซื้อ และแดชบอร์ดผู้ดูแลระบบสำหรับการจัดการสินค้าคงคลังและคำสั่งซื้อ แอปพลิเคชันนี้ได้รับการปรับแต่งเพื่อประสิทธิภาพการทำงานสูงสุด พร้อมฟีเจอร์ต่างๆ เช่น การค้นหาสินค้า การกรองข้อมูล และรีวิวจากผู้ใช้",
        features: [
            "Shopping cart and checkout process",
            "Payment integration with Stripe",
            "Admin dashboard for product management",
            "Order tracking and history",
        ],
        featuresTh: [
            "มีตะกร้าสินค้าและขั้นตอนการชำระเงิน",
            "การชำระเงินกับ Stripe",
            "แผงควบคุมผู้ดูแลระบบสำหรับการจัดการผลิตภัณฑ์",
            "การติดตามคำสั่งซื้อและประวัติ",
        ],
        demoUrl: "https://leafmeat-food.onrender.com/",
        githubUrl: "https://github.com/RitJaroen26/LeafMeat",
        icon: <Globe size={24} />
    },
    {
        id: 2,
        title: "Travel Recommendation Mobile App",
        category: "Web & Mobile",
        categoryName: "Mobile Application",
        categorieNameTh: "โมบายด์แอปพลิเคชัน",
        image: "/images/TravelApp.png",
        technologies: ["React Native", "Expo"],
        date: "2024",
        description: "Develop a mobile app with React Native that introduces the location of Phra Pathom Chedi Temple in Nakhon Pathom.",
        descriptionTh: "พัฒนาโมบายด์ด้วย React Native แนะนำสถานที่ตั้ง วัดพระปฐมเจดีย์ จ.นครปฐม",
        longDescription: "A comprehensive task management mobile application built with React Native, featuring real-time synchronization across devices using Firebase. The app includes project organization, team collaboration, deadline tracking, and push notifications. Users can create projects, assign tasks to team members, set priorities, and track progress with intuitive charts and statistics.",
        longDescriptionTh: "แอปพลิเคชันมือถือสำหรับจัดการงานที่ครอบคลุม สร้างขึ้นด้วย React Native พร้อมการซิงโครไนซ์แบบเรียลไทม์ข้ามอุปกรณ์ต่างๆ ด้วย Firebase แอปนี้ประกอบด้วยการจัดการโครงการ การทำงานร่วมกันเป็นทีม การติดตามกำหนดเวลา และการแจ้งเตือนแบบพุช ผู้ใช้สามารถสร้างโครงการ มอบหมายงานให้กับสมาชิกในทีม กำหนดลำดับความสำคัญ และติดตามความคืบหน้าด้วยแผนภูมิและสถิติที่ใช้งานง่าย",
        features: [
            "Real-time task synchronization",
            "Team collaboration and assignment",
            "Project organization and categorization",
            "Deadline tracking with notifications",
            "Progress analytics and reporting",
            "Offline functionality with sync"
        ],
        featuresTh: [],
        demoUrl: "#",
        githubUrl: "https://github.com/RitJaroen26/Travel2",
        icon: <Smartphone size={24} />
    },
    {
        id: 3,
        title: "Basic Kanban Boards",
        category: "Web & Mobile",
        categoryName: "Web Application",
        categorieNameTh: "เว็บแอปพลิเคชัน",
        image: "/images/Kanban1.png",
        technologies: ["React"],
        date: "2023",
        description: "Development a kanban boards with design and critical thinking.",
        descriptionTh: "",
        longDescription: "An interactive weather dashboard built with Vue.js that provides current weather conditions, 5-day forecasts, and historical weather data visualization. The application integrates with the OpenWeather API to fetch real-time weather data and uses Chart.js for beautiful data visualization. Features include geolocation support, multiple city tracking, and weather alerts.",
        longDescriptionTh: "",
        features: [
            "Real-time weather data from OpenWeather API",
            "5-day weather forecast",
            "Interactive charts and data visualization",
            "Geolocation-based weather detection",
            "Multiple city weather tracking",
            "Weather alerts and notifications"
        ],
        featuresTh: [

        ],
        demoUrl: "https://basic-kanban-board.vercel.app/",
        githubUrl: "https://github.com/RitJaroen26/basic-kanban-board",
        icon: <Globe size={24} />
    }
]


export const categories = [
    { value: "All", label: "All Projects", icon: <Globe size={16} /> },
    { value: "Web & Mobile", label: 'Web & Mobile Application', icon: <Code size={16} /> },
    { value: 'Graphic Design', label: 'Graphic Design', icon: <Palette size={16} /> },
    { value: 'Photography', label: 'Photography', icon: <Camera size={16} /> }
]

export const categoriesMini = [
    { value: "All", label: "All Projects", icon: <Globe size={16} /> },
    { value: "Web & Mobile", label: 'Web & Mobile Application', icon: <Code size={16} /> },
    { value: 'Graphic Design', label: 'Graphic Design', icon: <Palette size={16} /> },
    { value: 'Photography', label: 'Photography', icon: <Camera size={16} /> }
]