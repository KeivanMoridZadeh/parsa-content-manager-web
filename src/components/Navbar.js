import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsx("nav", { className: `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`, children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("a", { href: "#", className: `text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`, children: "Parsa" }), _jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [_jsx(NavLink, { href: "#home", isScrolled: isScrolled, children: "Home" }), _jsx(NavLink, { href: "#services", isScrolled: isScrolled, children: "Services" }), _jsx(NavLink, { href: "#portfolio", isScrolled: isScrolled, children: "Portfolio" }), _jsx(NavLink, { href: "#about", isScrolled: isScrolled, children: "About" }), _jsx(NavLink, { href: "#contact", isScrolled: isScrolled, children: "Contact" })] }), _jsx("button", { className: "md:hidden", onClick: () => setIsMenuOpen(!isMenuOpen), "aria-label": "Toggle menu", children: isMenuOpen ? (_jsx(X, { className: isScrolled ? 'text-gray-900' : 'text-white' })) : (_jsx(Menu, { className: isScrolled ? 'text-gray-900' : 'text-white' })) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4", children: _jsxs("div", { className: "flex flex-col space-y-4 px-4", children: [_jsx(MobileNavLink, { href: "#home", onClick: () => setIsMenuOpen(false), children: "Home" }), _jsx(MobileNavLink, { href: "#services", onClick: () => setIsMenuOpen(false), children: "Services" }), _jsx(MobileNavLink, { href: "#portfolio", onClick: () => setIsMenuOpen(false), children: "Portfolio" }), _jsx(MobileNavLink, { href: "#about", onClick: () => setIsMenuOpen(false), children: "About" }), _jsx(MobileNavLink, { href: "#contact", onClick: () => setIsMenuOpen(false), children: "Contact" })] }) }))] }) }));
};
const NavLink = ({ href, children, isScrolled }) => (_jsx("a", { href: href, className: `text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`, children: children }));
const MobileNavLink = ({ href, children, onClick }) => (_jsx("a", { href: href, onClick: onClick, className: "text-gray-900 text-sm font-medium block py-2 hover:text-blue-500 transition-colors", children: children }));
export default Navbar;
