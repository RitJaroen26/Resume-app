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
    SiTailwindcss
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
    { id: 'journey', label: 'Journey', icon: <GraduationCap size={20} /> },
    { id: 'values', label: 'Skills', icon: <Heart size={20} /> }
];

export const journey = [
    {
        year: '2020',
        title: 'Started Programming',
        description: 'Began my journey with web development and fell in love with creating digital solutions.',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        year: '2021',
        title: 'First Projects',
        description: 'Built my first web applications and discovered the power of modern frameworks.',
        color: 'from-purple-500 to-pink-500'
    },
    {
        year: '2022',
        title: 'Expanded Skills',
        description: 'Learned backend development, databases, and mobile app development.',
        color: 'from-green-500 to-emerald-500'
    },
    {
        year: '2023',
        title: 'Professional Growth',
        description: 'Started working on real projects and collaborating with teams.',
        color: 'from-orange-500 to-red-500'
    },
    {
        year: '2024',
        title: 'Full Stack Mastery',
        description: 'Achieved proficiency in full-stack development and modern technologies.',
        color: 'from-indigo-500 to-purple-500'
    }
];

export const values = [
    {
        icon: <Code2 size={24} />,
        title: 'Frontend',
        skill: [
            <SiReact size={26} key="react" title="React" color="#61DAFB" />,
            <SiHtml5 size={26} key="html" title="HTML5" color="#E34F26" />,
            <SiCss3 size={26} key="css" title="CSS3" color="#1572B6" />,
            <SiJavascript size={26} key="js" title="JavaScript" color="#F7DF1E" />,
            <SiTypescript size={26} key="ts" title="TypeScript" color="#3178C6" />,
            <SiNextdotjs size={26} key="next" title="NextJs" color="#000000" />,
            <SiTailwindcss size={26} key="next" title="TailwindCSS" color="#38BDF8" />,
        ]
    },
    {
        icon: <FiDatabase size={24} />,
        title: 'Backend',
        skill: [
            <SiNodedotjs size={26} key="node" title="NodeJS" color="#339933" />,
            <SiPhp size={26} key="php" title="PHP" color="#777BB4" />,
            <SiMysql size={26} key="mysql" title="MySQL" color="#4479A1" />,
            <SiMongodb size={26} key="mongodb" title="MongoDB" color="#47A248" />,
            <SiPython size={26} key="python" title="Python" color="#3776AB" />,
        ]
    },
    {
        icon: <FiPenTool size={24} />,
        title: 'Design',
        skill: [
            <SiFigma size={26} key="figma" title="Figma" color="#F24E1E" />,
            <SiCanva size={26} key="canva" title="Canva" color="#00C4CC" />
        ]
    },
    {
        icon: <FiTool size={24} />,
        title: 'Other',
        skill: [
            <SiPostman size={26} key="postman" title="Postman" color="#FF6C37" />,
            <SiGithub size={26} key="github" title="GitHub" color="#181717" />,
            <SiSourcetree size={26} key="sourcetree" title="SourceTree" color="#0052CC" />,
            <SiDocker size={26} key="docker" title="Docker" color="#2496ED" />,
        ]
    }
];

export const skills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Team Collaboration', level: 85 },
    { name: 'Communication', level: 80 },
    { name: 'Leadership', level: 75 }
];
