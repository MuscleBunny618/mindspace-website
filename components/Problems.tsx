
import React from 'react';
import AnimatedSection from './AnimatedSection';

const problems = [
    {
        icon: '⚡️',
        title: 'Digital Burnout',
        description: 'Constant connectivity and information overload leading to mental exhaustion.',
    },
    {
        icon: '🎭',
        title: 'Social Pressure',
        description: 'The burden of curated online identities and the fear of missing out (FOMO).',
    },
    {
        icon: '😟',
        title: 'Eco-Anxiety',
        description: 'Stress and worry about the future of the planet and global challenges.',
    },
    {
        icon: '📈',
        title: 'Performance Anxiety',
        description: 'Immense pressure to succeed academically, professionally, and personally.',
    },
];

const Problems: React.FC = () => {
    return (
        <section id="problems" className="py-20 px-4 bg-[#0A092D]">
            <div className="container mx-auto text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The GenZ Mindscape</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-12">We understand the unique challenges you face. You're not alone.</p>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, index) => (
                        <AnimatedSection key={index}>
                            <div className="bg-gray-800/20 border border-gray-700/50 rounded-xl p-6 h-full transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl mb-4">{problem.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                                <p className="text-gray-400">{problem.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problems;
