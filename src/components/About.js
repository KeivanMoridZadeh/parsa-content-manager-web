import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";
const stats = [
    {
        icon: _jsx(Users, { className: "w-6 h-6" }),
        value: "50+",
        label: "Happy Clients",
        description: "Delivering results that matter",
    },
    {
        icon: _jsx(Clock, { className: "w-6 h-6" }),
        value: "3+",
        label: "Years Experience",
        description: "Growing expertise in content creation",
    },
];
const About = () => {
    return (_jsx("section", { id: "about", className: "py-20 bg-white", children: _jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 -ml-8", children: _jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [_jsx(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "relative -ml-2", children: _jsx("div", { className: "w-full max-w-md mx-auto", children: _jsx("img", { src: "/assets/about.jpg", alt: "Professional workspace", className: "w-full h-auto rounded-full" }) }) }), _jsxs(motion.div, { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, className: "space-y-8", children: [_jsxs("div", { children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: ["About ", _jsx("span", { className: "text-blue-500", children: "Me" })] }), _jsx("p", { className: "text-xl text-gray-600", children: "A passionate content creator specializing in script writing, video editing, and social media management." })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "text-lg text-gray-600", children: "I specialize in developing engaging content that connects with audiences and delivers impactful results. My approach combines creative storytelling with technical expertise to bring your vision to life." }), _jsx("p", { className: "text-lg text-gray-600", children: "From script writing to final delivery, I ensure every project receives the attention to detail it deserves, creating content that stands out in today's digital landscape." })] }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((stat, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.1 }, viewport: { once: true }, className: "text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [_jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg mb-3", children: stat.icon }), _jsx("div", { className: "font-bold text-2xl text-gray-900 mb-1", children: stat.value }), _jsx("div", { className: "text-sm text-gray-600", children: stat.label }), _jsx("div", { className: "text-xs text-gray-500 mt-1", children: stat.description })] }, index))) })] })] }) }) }));
};
export default About;
