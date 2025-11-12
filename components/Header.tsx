import React, { useState } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="url(#logo-gradient)"/>
            <path d="M12.5 12.25H14.75L11.5 16.25V11.75H9.25L12.5 7.75V12.25Z" fill="url(#logo-gradient)"/>
            <defs>
                <linearGradient id="logo-gradient" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00F5D4"/>
                    <stop offset="1" stopColor="#9F70FD"/>
                </linearGradient>
            </defs>
        </svg>
        <span className="text-xl font-bold text-white">MindSpace</span>
    </div>
);


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ['Problems', 'Features', 'Our Mission', 'Team', 'FAQ', 'Contact'];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A092D]/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Logo />
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-white transition-colors duration-300">{link}</a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#0A092D]/90">
                    <nav className="flex flex-col items-center py-4">
                        {navLinks.map(link => (
                             <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsOpen(false)} className="py-2 text-gray-300 hover:text-white transition-colors duration-300">{link}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;