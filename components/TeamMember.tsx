
import React from 'react';

interface TeamMemberProps {
    name: string;
    role: string;
    imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
    return (
        <div className="flex flex-col items-center">
            <img 
                src={imageUrl} 
                alt={name} 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500/50 mb-4 transform hover:scale-105 transition-transform duration-300" 
            />
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="text-cyan-300">{role}</p>
        </div>
    );
};

export default TeamMember;
