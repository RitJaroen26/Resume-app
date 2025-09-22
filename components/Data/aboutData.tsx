import {
    SiReact,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiCanva,
    SiFigma,
    SiPostman,
    SiGithub,
    SiSourcetree,
    SiDocker,
    SiTailwindcss,
} from 'react-icons/si';

import {
    User,
    Calendar,
    MapPin,
    GraduationCap,
    Coffee,
    Code2,
    Lightbulb,
    Target,
    Heart,
    Award,
    BookOpen,
    Zap,
} from 'lucide-react';

import { BiLogoVisualStudio } from 'react-icons/bi';

import {
    FiPenTool,
    FiMonitor,
    FiDatabase,
    FiTool
} from "react-icons/fi";

export const tabs = [
    { id: 'story', label: 'About', icon: <User size={20} /> },
    // { id: 'journey', label: 'Journey', icon: <GraduationCap size={20} /> },
    { id: 'values', label: 'Skills', icon: <Heart size={20} /> }
];

export const journey = [
    {
        year: '2019',
        title: 'Started Programming',
        description: 'I started programming by trying Python as my first language.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        year: '2020',
        title: 'First Website',
        description: 'Started experimenting with writing websites using HTML, CSS, and JavaScript.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        year: '2023',
        title: 'Expanded Skills',
        description: 'Learned backend development and databases',
        color: 'from-green-500 to-emerald-500'
    },
    {
        year: '2024',
        title: 'Professional Growth',
        description: 'Learned how to use frameworks and libraries such as React',
        color: 'from-orange-500 to-red-500'
    },
    {
        year: '2025',
        title: 'Full Stack',
        description: 'Have the ability and self-development in full-stack development and modern technologies.',
        color: 'from-indigo-500 to-purple-500'
    }
];

export const values = [
    {
        icon: <Code2 size={24} />,
        title: 'Frontend',
        skill: [
            { icon: <SiReact size={26} color="#61DAFB" />, title: "React" },
            { icon: <SiHtml5 size={26} color="#E34F26" />, title: "HTML5" },
            { icon: <SiCss3 size={26} color="#1572B6" />, title: "CSS3" },
            { icon: <SiJavascript size={26} color="#F7DF1E" />, title: "JavaScript" },
            { icon: <SiTypescript size={26} color="#3178C6" />, title: "TypeScript" },
            { icon: <SiNextdotjs size={26} color="#000000" />, title: "Next.js" },
            { icon: <SiTailwindcss size={26} color="#38BDF8" />, title: "TailwindCSS" },
        ]
    },
    {
        icon: <FiDatabase size={24} />,
        title: 'Backend',
        skill: [
            { icon: <SiNodedotjs size={26} color="#339933" />, title: "Node.js" },
            { icon: <SiPhp size={26} color="#777BB4" />, title: "PHP" },
            { icon: <SiMysql size={26} color="#4479A1" />, title: "MySQL" },
            { icon: <SiMongodb size={26} color="#47A248" />, title: "MongoDB" },
            { icon: <SiPython size={26} color="#3776AB" />, title: "Python" },
        ]
    },
    {
        icon: <FiPenTool size={24} />,
        title: 'Design',
        skill: [
            { icon: <SiFigma size={26} color="#F24E1E" />, title: "Figma" },
            { icon: <SiCanva size={26} color="#00C4CC" />, title: "Canva" }
        ]
    },
    {
        icon: <FiTool size={24} />,
        title: 'Other',
        skill: [
            { icon: <SiPostman size={26} color="#FF6C37" />, title: "Postman" },
            { icon: <SiGithub size={26} color="#181717" />, title: "GitHub" },
            { icon: <SiSourcetree size={26} color="#0052CC" />, title: "SourceTree" },
            { icon: <SiDocker size={26} color="#2496ED" />, title: "Docker" },
        ]
    }
];

export const skills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 85 },
    { name: 'Communication', level: 80 },
    { name: 'Leadership', level: 75 }
];
