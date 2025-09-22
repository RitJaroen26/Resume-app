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
    image: string;
    technologies: string[];
    date: string;
    description: string;
    longDescription: string;
    features: string[];
    demoUrl: string;
    githubUrl: string;
    icon: JSX.Element;
};

export type MiniProject = {
    id: number;
    title: string;
    category: string;
    categoryName: string;
    image: string;
    technologies: string[];
    date: string;
    description: string;
    longDescription: string;
    features: string[];
    demoUrl: string;
    githubUrl: string;
    icon: JSX.Element;
}



export const projects: Project[] = [
    {
        id: 1,
        title: "Food Ordering System",
        category: "Web & Mobile",
        categoryName: "Web Application",
        image: "/images/food-ordering.png",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        date: "2024",
        description: "I learned and experimented with creating a web application about food ordering system using React.js and Node.js. to build new skills in using frameworks.",
        longDescription: "This comprehensive e-commerce platform features a modern React frontend with a responsive design, robust Node.js backend API, and MongoDB database. The platform includes user authentication, shopping cart functionality, secure payment processing through Stripe, order management, and an admin dashboard for inventory and order management. The application is optimized for performance and includes features like product search, filtering, and user reviews.",
        features: [
            "Secure user authentication and authorization",
            "Shopping cart and checkout process",
            "Payment integration with Stripe",
            "Admin dashboard for product management",
            "Order tracking and history",
            "Responsive design for all devices"
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
        image: "/images/TravelApp.png",
        technologies: ["React Native", "Expo"],
        date: "2024",
        description: "Develop a mobile app with React Native that introduces the location of Phra Pathom Chedi Temple in Nakhon Pathom.",
        longDescription: "A comprehensive task management mobile application built with React Native, featuring real-time synchronization across devices using Firebase. The app includes project organization, team collaboration, deadline tracking, and push notifications. Users can create projects, assign tasks to team members, set priorities, and track progress with intuitive charts and statistics.",
        features: [
            "Real-time task synchronization",
            "Team collaboration and assignment",
            "Project organization and categorization",
            "Deadline tracking with notifications",
            "Progress analytics and reporting",
            "Offline functionality with sync"
        ],
        demoUrl: "#",
        githubUrl: "https://github.com/RitJaroen26/Travel2",
        icon: <Smartphone size={24} />
    },
    {
        id: 3,
        title: "Basic Kanban Boards",
        category: "Web & Mobile",
        categoryName: "Web Application",
        image: "/images/Kanban1.png",
        technologies: ["React"],
        date: "2023",
        description: "Development a kanban boards with design and critical thinking.",
        longDescription: "An interactive weather dashboard built with Vue.js that provides current weather conditions, 5-day forecasts, and historical weather data visualization. The application integrates with the OpenWeather API to fetch real-time weather data and uses Chart.js for beautiful data visualization. Features include geolocation support, multiple city tracking, and weather alerts.",
        features: [
            "Real-time weather data from OpenWeather API",
            "5-day weather forecast",
            "Interactive charts and data visualization",
            "Geolocation-based weather detection",
            "Multiple city weather tracking",
            "Weather alerts and notifications"
        ],
        demoUrl: "https://basic-kanban-board.vercel.app/",
        githubUrl: "https://github.com/RitJaroen26/basic-kanban-board",
        icon: <Globe size={24} />
    }
];

export const miniProjects: MiniProject[] = [
    {
        id: 1,
        title: "Food Ordering System",
        category: "Web & Mobile",
        categoryName: "Web Application",
        image: "/images/food-ordering.png",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        date: "2024",
        description: "I learned and experimented with creating a web application about food ordering system using React.js and Node.js. to build new skills in using frameworks.",
        longDescription: "This comprehensive e-commerce platform features a modern React frontend with a responsive design, robust Node.js backend API, and MongoDB database. The platform includes user authentication, shopping cart functionality, secure payment processing through Stripe, order management, and an admin dashboard for inventory and order management. The application is optimized for performance and includes features like product search, filtering, and user reviews.",
        features: [
            "Secure user authentication and authorization",
            "Shopping cart and checkout process",
            "Payment integration with Stripe",
            "Admin dashboard for product management",
            "Order tracking and history",
            "Responsive design for all devices"
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
        image: "/images/TravelApp.png",
        technologies: ["React Native", "Expo"],
        date: "2024",
        description: "Develop a mobile app with React Native that introduces the location of Phra Pathom Chedi Temple in Nakhon Pathom.",
        longDescription: "A comprehensive task management mobile application built with React Native, featuring real-time synchronization across devices using Firebase. The app includes project organization, team collaboration, deadline tracking, and push notifications. Users can create projects, assign tasks to team members, set priorities, and track progress with intuitive charts and statistics.",
        features: [
            "Real-time task synchronization",
            "Team collaboration and assignment",
            "Project organization and categorization",
            "Deadline tracking with notifications",
            "Progress analytics and reporting",
            "Offline functionality with sync"
        ],
        demoUrl: "#",
        githubUrl: "https://github.com/RitJaroen26/Travel2",
        icon: <Smartphone size={24} />
    },
    {
        id: 3,
        title: "Basic Kanban Boards",
        category: "Web & Mobile",
        categoryName: "Web Application",
        image: "/images/Kanban1.png",
        technologies: ["React"],
        date: "2023",
        description: "Development a kanban boards with design and critical thinking.",
        longDescription: "An interactive weather dashboard built with Vue.js that provides current weather conditions, 5-day forecasts, and historical weather data visualization. The application integrates with the OpenWeather API to fetch real-time weather data and uses Chart.js for beautiful data visualization. Features include geolocation support, multiple city tracking, and weather alerts.",
        features: [
            "Real-time weather data from OpenWeather API",
            "5-day weather forecast",
            "Interactive charts and data visualization",
            "Geolocation-based weather detection",
            "Multiple city weather tracking",
            "Weather alerts and notifications"
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