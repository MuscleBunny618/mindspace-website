
import React, { useState, useEffect } from 'react';

const CursorGlow: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out z-[9999]"
            style={{
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(0, 245, 212, 0.15) 0%, rgba(0, 245, 212, 0) 60%)',
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
            }}
        />
    );
};

export default CursorGlow;
