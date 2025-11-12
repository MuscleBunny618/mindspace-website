
import React from 'react';
import AnimatedSection from './AnimatedSection';
import TeamMember from './TeamMember';

const teamData = [
    { name: "Alex Chen", role: "Founder & CEO", imageUrl: "https://picsum.photos/seed/alex/200" },
    { name: "Jasmine Kaur", role: "Lead Psychologist", imageUrl: "https://picsum.photos/seed/jasmine/200" },
    { name: "Leo Rodriguez", role: "Head of Product", imageUrl: "https://picsum.photos/seed/leo/200" },
    { name: "Samira Ahmed", role: "Lead AI Engineer", imageUrl: "https://picsum.photos/seed/samira/200" },
];

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 px-4 bg-[#0A092D]">
            <div className="container mx-auto text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Visionaries</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-12">A passionate team dedicated to empowering the next generation.</p>
                </AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                     {teamData.map((member, index) => (
                        <AnimatedSection key={index}>
                            <TeamMember name={member.name} role={member.role} imageUrl={member.imageUrl} />
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
