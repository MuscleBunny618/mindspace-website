import React from 'react';
import AnimatedSection from './AnimatedSection';

const Testimonials: React.FC = () => {
    const contributions = [
        {
            icon: '💬',
            title: 'Accessible Support',
            description: 'Our AI companion provides 24/7 mental health first-aid, breaking down barriers of cost, stigma, and availability that prevent young people from seeking help.',
        },
        {
            icon: '🌍',
            title: 'Reducing Stigma',
            description: 'By creating safe, moderated Community Circles, we foster open conversations about mental health, building a global community of support and understanding.',
        },
        {
            icon: '🌱',
            title: 'Promoting Well-being',
            description: 'Our guided meditations, journaling prompts, and habit trackers empower users with practical, evidence-based tools for daily self-care and long-term resilience.',
        }
    ];

    return (
        <section id="our-mission" className="py-20 px-4 bg-[#0F0E3A]/50">
            <div className="container mx-auto">
                <AnimatedSection className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Commitment to SDG 3</h2>
                    <p className="max-w-3xl mx-auto text-gray-400 mb-12">
                        We are dedicated to advancing the United Nations' Sustainable Development Goal 3: <span className="text-cyan-300 font-semibold">Good Health and Well-Being</span>. Our mission is to ensure healthy lives and promote well-being for all, with a special focus on the mental health of Generation Z.
                    </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {contributions.map((item, index) => (
                        <AnimatedSection key={index}>
                           <div className="bg-gray-800/20 border border-gray-700/50 rounded-xl p-8 h-full text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-4xl mb-4 inline-block">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;