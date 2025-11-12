
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 px-4 bg-[#0A092D] border-t border-gray-800/50">
            <div className="container mx-auto text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} MindSpace. All rights reserved.</p>
                <p className="mt-2 text-sm">Building a healthier future, one mind at a time.</p>
            </div>
        </footer>
    );
};

export default Footer;
