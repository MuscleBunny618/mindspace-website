
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4 pt-24 pb-12">
            <div className="container mx-auto">
                <AnimatedSection className="flex flex-col items-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        SDG 3: Good Health & Well-Being
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                        Building Mental Strength for <br />
                        <span className="animated-gradient-text">Generation Z</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
                        Navigate the complexities of modern life with <span className="font-bold text-white">MindSpace</span>. Your personal guide to a stronger, healthier, and more resilient mind.
                    </p>
                    <a href="#features" className="px-8 py-4 bg-gradient-to-r from-[#00F5D4] to-[#00BEB2] text-black font-bold rounded-full text-lg hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-lg shadow-cyan-500/20">
                        Discover Your Space
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Hero;
