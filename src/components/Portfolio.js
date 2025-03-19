import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
const portfolioItems = [
    {
        title: "Content Strategy for Tech Startup",
        description: "Developed comprehensive content strategy increasing organic traffic by 200%",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        category: "Strategy",
        link: "#",
    },
    {
        title: "E-commerce Blog Optimization",
        description: "Increased conversion rates by 150% through targeted content",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        category: "SEO",
        link: "#",
    },
    {
        title: "Social Media Campaign",
        description: "Viral campaign reaching 1M+ views across platforms",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
        category: "Social",
        link: "#",
    },
    {
        title: "Brand Storytelling",
        description: "Crafted compelling narrative increasing brand engagement",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        category: "Branding",
        link: "#",
    },
];
const Portfolio = () => {
    return (_jsx("section", { id: "portfolio", className: "py-20 bg-white", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl", children: [_jsx("div", { className: "text-center mb-16", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: ["Featured ", _jsx("span", { className: "text-blue-500", children: "Work" })] }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "A showcase of my recent projects and their impact on business growth" })] }) }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: portfolioItems.map((item, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: index * 0.2 }, viewport: { once: true }, className: "group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }), _jsxs("div", { className: "p-8", children: [_jsx("span", { className: "inline-block px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-full mb-4", children: item.category }), _jsx("h3", { className: "text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors", children: item.title }), _jsx("p", { className: "text-gray-600 mb-6", children: item.description }), _jsxs("a", { href: item.link, className: "inline-flex items-center text-blue-600 hover:text-blue-700 font-medium", children: ["View Project ", _jsx(ExternalLink, { className: "ml-2 h-5 w-5" })] })] })] }, index))) })] }) }));
};
export default Portfolio;
