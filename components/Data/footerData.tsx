import {
    Mail,
    Phone,
    MapPin,
    Github,
    Instagram,
    Facebook,
} from 'lucide-react';

export const contractInfo = [
    {
        icon: <Mail size={20} />,
        label: 'Email',
        value: 'pawarit-j@rmutp.ac.th',
        link: 'mailto:pawarit-j@rmutp.ac.th'
    },
    {
        icon: <Phone size={20} />,
        label: 'Phone',
        value: '+66 99-999-9999',
        link: 'tel:+66999999999'
    },
    {
        icon: <MapPin size={20} />,
        label: 'Location',
        value: 'Bangkok, Thailand',
        link: null
    }
];

export const socialLinks = [
    {
        name: 'GitHub',
        icon: <Github size={24} />,
        url: 'https://github.com/RitJaroen26',
        color: 'hover:text-gray-900 dark:hover:text-white'
    },
    // {
    //     name: 'LinkedIn',
    //     icon: <Linkedin size={24} />,
    //     url: '#',
    //     color: 'hover:text-blue-600'
    // },
    {
        name: 'Instagram',
        icon: <Instagram size={24} />,
        url: '#',
        color: 'hover:text-pink-600'
    },
    {
        name: 'Facebook',
        icon: <Facebook size={24} />,
        url: '#',
        color: 'hover:text-blue-700'
    }
];

export const quickLinks = [
    { name: 'Home', id: 'home-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Experience', id: 'skills-section' },
    { name: 'Portfolio', id: 'portfolio-section' },
];

export const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
];