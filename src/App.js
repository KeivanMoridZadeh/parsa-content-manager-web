import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageSquare, Instagram, Twitter, Linkedin, Youtube, Edit3, Video, Share2, Check, VolumeX, Volume2, } from "lucide-react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
const services = [
    {
        icon: _jsx(Edit3, { className: "w-6 h-6" }),
        title: "Script Writing",
        description: "Crafting compelling narratives and scripts that captivate audiences and deliver your message effectively.",
        image: "/assets/script-writing.jpg",
    },
    {
        icon: _jsx(MessageSquare, { className: "w-6 h-6" }),
        title: "Content Creation",
        description: "Creating engaging content that resonates with your target audience and drives meaningful engagement.",
        image: "/assets/content-creation.jpg",
    },
    {
        icon: _jsx(Video, { className: "w-6 h-6" }),
        title: "Video Editing",
        description: "Professional video editing services that bring your stories to life with stunning visuals and seamless transitions.",
        image: "/assets/video-editing.jpg",
    },
    {
        icon: _jsx(Share2, { className: "w-6 h-6" }),
        title: "Social Media Management",
        description: "Strategic social media management to grow your presence and engage with your audience effectively.",
        image: "/assets/social-media.jpg",
    },
];
const socialLinks = [
    {
        icon: _jsx(Instagram, { className: "w-6 h-6" }),
        url: "https://instagram.com",
        label: "Instagram",
    },
    {
        icon: _jsx(Linkedin, { className: "w-6 h-6" }),
        url: "https://www.linkedin.com/in/parsaedalathami",
        label: "LinkedIn",
    },
    {
        icon: _jsx(Youtube, { className: "w-6 h-6" }),
        url: "https://youtube.com",
        label: "YouTube",
    },
];
const imageSlides = [
    "/assets/hero2.jpg",
    "/assets/hero3.jpg",
    "/assets/hero4.jpg",
];
const App = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const [currentSlide, setCurrentSlide] = React.useState(-1);
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [isMuted, setIsMuted] = React.useState(true);
    const videoRef = React.useRef(null);
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((error) => {
                console.log("Video autoplay failed:", error);
            });
            setIsPlaying(true);
        }
    }, []);
    const handleVideoEnd = () => {
        // When video ends, move to the first image slide
        setCurrentSlide(0);
    };
    const handlePrevSlide = () => {
        if (currentSlide === -1) {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
        else if (currentSlide === 0) {
            setCurrentSlide(-1);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
        else {
            setCurrentSlide((prev) => prev - 1);
        }
    };
    const handleNextSlide = () => {
        if (currentSlide === -1) {
            setCurrentSlide(0);
            if (videoRef.current) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
        else if (currentSlide < imageSlides.length - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
        else {
            setCurrentSlide(-1);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };
    const toggleMute = () => {
        if (videoRef.current) {
            setIsMuted(!isMuted);
            videoRef.current.muted = !isMuted;
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", children: [_jsx(Navbar, {}), _jsxs("section", { id: "home", className: "relative h-screen flex items-center overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute inset-0 transition-opacity duration-1000", style: { opacity: currentSlide === -1 ? 1 : 0 }, children: _jsxs("video", { ref: videoRef, autoPlay: true, playsInline: true, muted: true, loop: false, className: "w-full h-full object-cover", style: { filter: "brightness(0.3)" }, onEnded: handleVideoEnd, children: [_jsx("source", { src: "/assets/Video.mov", type: "video/mp4" }), "Your browser does not support the video tag."] }) }), _jsx("div", { className: "absolute inset-0", children: imageSlides.map((src, index) => (_jsx(motion.div, { className: "absolute inset-0 transition-opacity duration-1000", initial: { opacity: 0 }, animate: { opacity: currentSlide === index ? 1 : 0 }, transition: { duration: 1 }, children: _jsx("img", { src: src, alt: `Slide ${index + 1}`, className: "w-full h-full object-cover", style: { filter: "brightness(0.3)" } }) }, index))) }), _jsx("div", { className: "absolute bottom-10 right-10 z-20", children: currentSlide === -1 && (_jsx("button", { onClick: toggleMute, className: "p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all", children: isMuted ? (_jsx(VolumeX, { className: "w-6 h-6 text-white" })) : (_jsx(Volume2, { className: "w-6 h-6 text-white" })) })) }), _jsxs("div", { className: "absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-2", children: [_jsx("button", { onClick: () => {
                                            setCurrentSlide(-1);
                                            if (videoRef.current) {
                                                videoRef.current.currentTime = 0;
                                                videoRef.current.play();
                                                setIsPlaying(true);
                                            }
                                        }, className: `w-2 h-2 rounded-full transition-all ${currentSlide === -1 ? "bg-white w-6" : "bg-white/50"}` }), imageSlides.map((_, index) => (_jsx("button", { onClick: () => setCurrentSlide(index), className: `w-2 h-2 rounded-full transition-all ${currentSlide === index ? "bg-white w-6" : "bg-white/50"}` }, index)))] })] }), _jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "text-left -ml-16", children: [_jsxs(motion.h1, { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.2, duration: 0.8 }, children: ["Elevating Brands Through", _jsxs("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600", children: [" ", "Strategic Content"] })] }), _jsx(motion.p, { className: "text-lg md:text-xl text-gray-200 mb-8", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.4, duration: 0.8 }, children: "Content strategist and digital storyteller helping businesses connect with their audience through compelling narratives and data-driven strategies." }), _jsxs(motion.div, { className: "flex flex-wrap gap-4", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.6, duration: 0.8 }, children: [_jsxs("a", { href: "#services", className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 text-sm md:text-base", children: ["Explore Services", _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] }), _jsx("a", { href: "#portfolio", className: "inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all transform hover:scale-105 text-sm md:text-base", children: "View Portfolio" })] })] }), _jsx("div", { className: "hidden md:block" })] }) })] }), _jsx(About, {}), _jsx("section", { id: "services", className: "py-20 bg-gradient-to-b from-gray-50 to-white", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs(motion.h2, { className: "text-4xl md:text-5xl font-bold mb-6", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 }, children: ["What I", " ", _jsx("span", { className: "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600", children: "Do" })] }), _jsx(motion.p, { className: "text-xl text-gray-600 max-w-3xl mx-auto", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2, duration: 0.5 }, children: "Comprehensive content management solutions that drive engagement and deliver results" })] }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: services.map((service, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: index * 0.1 }, className: "group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2", children: [_jsxs("div", { className: "relative overflow-hidden", children: [_jsx("img", { src: service.image, alt: service.title, className: "w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" })] }), _jsxs("div", { className: "p-8", children: [_jsx("div", { className: "w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-6 transform -translate-y-16 group-hover:-translate-y-20 transition-transform duration-300", children: service.icon }), _jsx("h3", { className: "text-2xl font-bold mb-4", children: service.title }), _jsx("p", { className: "text-gray-600 mb-6", children: service.description }), _jsxs("ul", { className: "space-y-3", children: [index === 0 && (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Engaging storylines that captivate audiences"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "SEO-optimized content structure"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Clear and compelling messaging"] })] })), index === 1 && (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "High-quality video production"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Professional editing and effects"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Engaging visual storytelling"] })] })), index === 2 && (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Smooth transitions and effects"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Color grading and enhancement"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Professional sound design"] })] })), index === 3 && (_jsxs(_Fragment, { children: [_jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Strategic content planning"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Community engagement"] }), _jsxs("li", { className: "flex items-center text-gray-600", children: [_jsx(Check, { className: "w-5 h-5 text-blue-500 mr-2" }), "Performance analytics"] })] }))] })] })] }, index))) })] }) }), _jsx(Portfolio, {}), _jsx("section", { className: "py-20 bg-gradient-to-b from-white to-gray-50", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl", children: [_jsxs(motion.div, { className: "text-center mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Connect With Me" }), _jsx("p", { className: "text-gray-600", children: "Let's stay connected across all platforms" })] }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-8", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: 0.2 }, children: socialLinks.map((social, index) => (_jsxs(motion.a, { href: social.url, target: "_blank", rel: "noopener noreferrer", className: "group flex flex-col items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors", whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: [_jsx("div", { className: "w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow", children: social.icon }), _jsx("span", { className: "text-sm font-medium", children: social.label })] }, index))) })] }) }), _jsx("footer", { className: "py-8 bg-gradient-to-b from-gray-900 to-black text-white", children: _jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [_jsxs("div", { className: "text-sm text-gray-400", children: ["\u00A9 ", new Date().getFullYear(), " Your Content Pro. All rights reserved."] }), _jsxs("div", { className: "flex justify-end space-x-6 text-sm", children: [_jsx("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: "Privacy Policy" }), _jsx("a", { href: "#", className: "text-gray-400 hover:text-white transition-colors", children: "Terms of Service" })] })] }), _jsxs("div", { className: "flex space-x-6", children: [_jsx("a", { href: "https://www.linkedin.com/in/parsaedalathami", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-blue-500 transition-colors", children: _jsx(Linkedin, { className: "w-6 h-6" }) }), _jsx("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-pink-500 transition-colors", children: _jsx(Instagram, { className: "w-6 h-6" }) }), _jsx("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-blue-400 transition-colors", children: _jsx(Twitter, { className: "w-6 h-6" }) })] })] }) })] }));
};
export default App;
