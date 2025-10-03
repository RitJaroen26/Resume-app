import {
    // ChevronLeft,
    // ChevronRight,
    // ExternalLink,
    // Github,
    // Calendar,
    // Tag,
    // X,
    // Eye,
    // Code,
    // Smartphone,
    // Globe,
    // Database,
    // Palette,
    // Camera,
    // ChevronDown,
    // Check,
    // Briefcase,
    // Users,
    Code2,
    // GraduationCap,
    // Award,
    // Star,
    // MapPin,
    // Clock,
    // Building
} from 'lucide-react';
import { JSX } from 'react';

export type Experience = {
    id: number;
    type: string;
    title: string;
    image: string;
    organization: string;
    location: string;
    locationTh: string;
    startDate: string;
    startDateTh: string;
    endDate: string;
    endDateTh: string;
    duration: string;
    durationth: string;
    category: string;
    categoryTh: string;
    description: string;
    descriptionTh: string;
    longDescription: string;
    longDescriptionth: string;
    responsibilities: string[];
    responsibilitiesTh: string[];
    technologies: string[];
    achievements: string[];
    achievementsTh: string[];
    icon: JSX.Element;
    color: string;
};

export const experiences: Experience[] = [
    {
        id: 1,
        type: "work",
        title: "Web Developer Intern",
        image: "/images/work_image1.jpg",
        organization: "Regexinnovation Co., Ltd.",
        location: "Huai Khwang, Bangkok",
        locationTh: "ห้วยขวาง, กรุงเทพมหานคร",
        startDate: "Jun 2025",
        startDateTh: "มิ.ย. 2568",
        endDate: "Oct 2025",
        endDateTh: "ต.ค. 2568",
        duration: "4 months",
        durationth: "4 เดือน",
        category: "Internship",
        categoryTh: "ฝึกงาน",
        description: "Gain hands-on experience in front-end and back-end development, participating in corporate projects.",
        descriptionTh: "ได้รับประสบการณ์จริงในการพัฒนา front-end และ back-end รวมถึงการมีส่วนร่วมในโครงการขององค์กร",
        longDescription: "During my internship at Regexinnovation Co., Ltd., I gained hands-on experience in both front-end and back-end development. I worked on various corporate projects, learned industry best practices, and developed modern web technology skills. This role helped me understand the software development lifecycle and professional workflows.",
        longDescriptionth: "ระหว่างการฝึกงานที่บริษัท Regexinnovation Co., Ltd. ฉันได้รับประสบการณ์ตรงด้านการพัฒนาทั้งฝั่ง Front-end และ Back-end ฉันได้ทำงานในโปรเจกต์ต่างๆ ของบริษัท ได้เรียนรู้แนวปฏิบัติที่ดีที่สุดในอุตสาหกรรม และพัฒนาทักษะด้านเทคโนโลยีเว็บสมัยใหม่ บทบาทนี้ช่วยให้ฉันเข้าใจวงจรชีวิตการพัฒนาซอฟต์แวร์และขั้นตอนการทำงานอย่างมืออาชีพ",
        responsibilities: [
            "Built responsive web interfaces using React.js and CSS frameworks",
            "Integrated third-party APIs and services into web applications",
            "Optimized website performance and implemented SEO best practices",
            "Collaborated with senior developers on code reviews",
        ],
        responsibilitiesTh: [
            "สร้างอินเทอร์เฟซเว็บแบบตอบสนองโดยใช้ React.js และเฟรมเวิร์ก CSS",
            "รวม API และบริการของบุคคลที่สามลงในแอปพลิเคชันเว็บ",
            "เพิ่มประสิทธิภาพเว็บไซต์และนำแนวทางปฏิบัติ SEO ที่ดีที่สุดมาใช้",
            "ร่วมมือกับนักพัฒนาอาวุโสในการตรวจสอบโค้ด"
        ],
        technologies: ["Laravel", "Next.js", "React", "HTML/CSS", "TypeScript", "Bootstrap", "SourceTree", "Figma"],
        achievements: [
            "Successfully completed client projects during internship",
            "Received excellent feedback from supervisors and mentor",
            "Contributed to company's component library"
        ],
        achievementsTh: [
            "สำเร็จลุล่วงไปด้วยดีกับโครงการระหว่างการฝึกงาน",
            "ได้รับการตอบรับที่ดีเยี่ยมจากหัวหน้างานและพี่เลี้ยง",
            "มีส่วนสนับสนุนในคลังส่วนประกอบของบริษัท"
        ],
        icon: <Code2 size={24} />,
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 2,
        type: "work",
        title: "Construction Site Supervisor",
        image: "/images/work_image2.jpg",
        organization: "Benja Polykhot Co., Ltd.",
        location: "Bang Kruai, Nonthaburi",
        locationTh: "บางกรวย, นนทบุรี",
        startDate: "Mar 2023",
        startDateTh: "มี.ค. 2566",
        endDate: "May 2023",
        endDateTh: "พ.ค. 2566",
        duration: "3 months",
        durationth: "3 เดือน",
        category: "Full-time",
        categoryTh: "เต็มเวลา",
        description: "Create and supervise construction plans on site to ensure they comply with engineering standards and the specified timeframe, including inspecting work quality, coordinating with the team, and ensuring safety in the construction area.",
        descriptionTh: "จัดทำและกำกับดูแลแผนการก่อสร้างหน้างานให้เป็นไปตามมาตรฐานวิศวกรรมและกรอบเวลาที่กำหนด รวมถึงตรวจสอบคุณภาพงาน ประสานงานกับทีมงาน และดูแลความปลอดภัยในพื้นที่ก่อสร้าง",
        longDescription: "Responsible for controlling and supervising construction on site by checking that the work complies with the blueprints, engineering standards, and project conditions. Follow up on the progress of the work to ensure completion according to the specified plan and budget. Oversee and inspect the quality of materials and every step of the work process, as well as coordinating between engineers, designers, contractors, and construction workers to ensure the work proceeds smoothly.",
        longDescriptionth: "รับผิดชอบการควบคุมและกำกับดูแลงานก่อสร้าง ณ หน้างาน โดยตรวจสอบว่างานเป็นไปตามแบบแปลน มาตรฐานทางวิศวกรรม และเงื่อนไขของโครงการ ติดตามความคืบหน้าของงานเพื่อให้มั่นใจว่างานจะแล้วเสร็จตามแผนและงบประมาณที่กำหนดไว้ กำกับดูแลและตรวจสอบคุณภาพของวัสดุและทุกขั้นตอนของกระบวนการทำงาน ตลอดจนประสานงานระหว่างวิศวกร ผู้ออกแบบ ผู้รับเหมา และคนงานก่อสร้าง เพื่อให้มั่นใจว่างานดำเนินไปอย่างราบรื่น",
        responsibilities: [
            "Collaborate with engineers to ensure smooth and rapid completion of projects.",
            "Check and monitor the progress of construction work to ensure completion on schedule and within budget.",
            "Check the quality of construction materials used to ensure they meet the specified standards and specifications.",
            "Prepare construction progress reports and submit them to the project manager or supervising engineer."
        ],
        responsibilitiesTh: [
            "ร่วมทำงานต่างๆกับวิศวกรเพื่อให้งานสำเร็จได้อย่างราบรื่นและรวดเร็ว",
            "ตรวจสอบและติดตามความคืบหน้าของงานก่อสร้างเพื่อให้มั่นใจว่าจะเสร็จสิ้นตามกำหนดเวลาและไม่เกินงบประมาณ",
            "ตรวจสอบคุณภาพของวัสดุก่อสร้างที่ใช้เพื่อให้แน่ใจว่าเป็นไปตามมาตรฐานและข้อกำหนดที่กำหนด",
            "จัดทำรายงานความคืบหน้าการก่อสร้างและส่งให้ผู้จัดการโครงการหรือวิศวกรควบคุมดูแล"
        ],
        technologies: [
            "scaffolding app",
        ],
        achievements: [
            "Controlling the construction budget helps reduce costs from using consumables and increases efficiency in resource management, resulting in projects saving more than 10% of their budget.",
            "Improving work site safety, managing safety systems and training staff has resulted in a nearly 0% reduction in work site accident rates.",
            "Manage the team efficiently, able to take care of more than XX workers, and prioritize work, making the work within the team systematic and reducing errors.",
        ],
        achievementsTh: [
            "การควบคุมงบประมาณการก่อสร้างช่วยลดต้นทุนการใช้วัสดุสิ้นเปลืองและเพิ่มประสิทธิภาพในการบริหารจัดการทรัพยากร ส่งผลให้โครงการต่างๆ ประหยัดงบประมาณได้มากกว่า 10%",
            "การปรับปรุงความปลอดภัยในสถานที่ทำงาน การจัดการระบบความปลอดภัย และการฝึกอบรมพนักงาน ส่งผลให้มีอุบัติเหตุในสถานที่ทำงานลดลงเกือบ 0%",
            "บริหารจัดการทีมงานอย่างมีประสิทธิภาพ สามารถดูแลพนักงานได้มากกว่า XX คน และจัดลำดับความสำคัญของงานให้การทำงานภายในทีมเป็นระบบและลดข้อผิดพลาด"
        ],
        icon: <Code2 size={24} />,
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        type: "work",
        title: "Coming Soon",
        image: "",
        organization: "",
        location: "-",
        locationTh: "-",
        startDate: "",
        startDateTh: "",
        endDate: "",
        endDateTh: "",
        duration: "-",
        durationth: "-",
        category: "",
        categoryTh: "",
        description: "",
        descriptionTh: "",
        longDescription: "",
        longDescriptionth: "",
        responsibilities: [],
        responsibilitiesTh: [],
        technologies: [],
        achievements: [],
        achievementsTh: [],
        icon: <Code2 size={24} />,
        color: "from-purple-500 to-pink-500"
    },
];