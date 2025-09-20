import {
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Github,
    Calendar,
    Tag,
    X,
    Eye,
    Code,
    Smartphone,
    Globe,
    Database,
    Palette,
    Camera,
    ChevronDown,
    Check,
    Briefcase,
    Users,
    Code2,
    GraduationCap,
    Award,
    Star,
    MapPin,
    Clock,
    Building
} from 'lucide-react';
import { JSX } from 'react';

export type Experience = {
    id: number;
    type: string;
    title: string;
    image: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    duration: string;
    category: string;
    description: string;
    longDescription: string;
    responsibilities: string[];
    technologies: string[];
    achievements: string[];
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
        startDate: "Jun 2025",
        endDate: "Oct 2025",
        duration: "4 months",
        category: "Internship",
        description: "Gain hands-on experience in front-end and back-end development, participating in corporate projects.",
        longDescription: "During my internship at Regexinnovation Co., Ltd., I gained hands-on experience in both front-end and back-end development. I worked on various corporate projects, learned industry best practices, and developed modern web technology skills. This role helped me understand the software development lifecycle and professional workflows.",
        responsibilities: [
            "Built responsive web interfaces using React.js and CSS frameworks",
            "Integrated third-party APIs and services into web applications",
            "Optimized website performance and implemented SEO best practices",
            "Collaborated with senior developers on code reviews",
        ],
        technologies: ["Laravel", "Next.js", "React", "HTML/CSS", "TypeScript", "Bootstrap", "SourceTree", "Figma"],
        achievements: [
            "Successfully completed 3 client projects during internship",
            "Received excellent feedback from supervisors and clients",
            "Contributed to company's component library"
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
        startDate: "Mar 2023",
        endDate: "May 2023",
        duration: "3 months",
        category: "Full-time",
        description: "Create and supervise construction plans on site to ensure they comply with engineering standards and the specified timeframe, including inspecting work quality, coordinating with the team, and ensuring safety in the construction area.",
        longDescription: "Responsible for controlling and supervising construction on site by checking that the work complies with the blueprints, engineering standards, and project conditions. Follow up on the progress of the work to ensure completion according to the specified plan and budget. Oversee and inspect the quality of materials and every step of the work process, as well as coordinating between engineers, designers, contractors, and construction workers to ensure the work proceeds smoothly.",
        responsibilities: [
            "The prototype oversees the work before it is completed according to engineering plans and safety standards.",
            "Check and monitor the progress of construction work to ensure completion on schedule and within budget.",
            "Check the quality of construction materials used to ensure they meet the specified standards and specifications.",
            "Maintain order and safety of personnel in the construction area.",
            "Prepare construction progress reports and submit them to the project manager or supervising engineer."
        ],
        technologies: [
            "scaffolding app",
        ],
        achievements: [
            "Controlling the construction budget helps reduce costs from using consumables and increases efficiency in resource management, resulting in projects saving more than 10% of their budget.",
            "Improving work site safety, managing safety systems and training staff has resulted in a nearly 0% reduction in work site accident rates.",
            "Manage the team efficiently, able to take care of more than XX workers, and prioritize work, making the work within the team systematic and reducing errors.",
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
        startDate: "",
        endDate: "",
        duration: "-",
        category: "",
        description: "",
        longDescription: "",
        responsibilities: [],
        technologies: [],
        achievements: [],
        icon: <Code2 size={24} />,
        color: "from-purple-500 to-pink-500"
    },
];