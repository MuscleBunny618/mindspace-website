
import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-gradient-to-br from-[#1E1C55]/50 to-[#0A092D]/50 p-8 rounded-2xl h-full border border-purple-500/20 text-left shadow-lg">
            <div className="text-4xl mb-5 p-3 w-16 h-16 flex items-center justify-center bg-purple-900/30 rounded-full">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard;
