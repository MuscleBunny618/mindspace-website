
import React from 'react';
import AnimatedSection from './AnimatedSection';
import FeatureCard from './FeatureCard';

const featuresData = [
    {
        title: "AI-Powered Companion",
        description: "Chat with an intelligent, empathetic AI that provides personalized support and guidance 24/7.",
        icon: '🤖',
    },
    {
        title: "Guided Meditations",
        description: "Access a library of meditations designed to reduce stress, improve focus, and promote mindfulness.",
         icon: '🧘',
    },
    {
        title: "Mood & Habit Tracking",
        description: "Understand your emotional patterns and build positive habits with our intuitive tracking tools.",
         icon: '📊',
    },
    {
        title: "Community Circles",
        description: "Connect with peers in safe, moderated spaces to share experiences and support each other.",
         icon: '🤝',
    },
    {
        title: "Journaling Prompts",
        description: "Explore your thoughts and feelings with daily prompts designed to foster self-reflection and growth.",
         icon: '✍️',
    },
    {
        title: "Expert Resources",
        description: "Learn from articles, workshops, and content created by mental health professionals.",
         icon: '🧠',
    }
];

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 px-4 bg-[#0F0E3A]/50">
            <div className="container mx-auto text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your Mental Strength Toolkit</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-12">
                        <span className="animated-gradient-text font-semibold">MindSpace</span> provides everything you need to thrive, all in one app.
                    </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                         <AnimatedSection key={index}>
                            <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
