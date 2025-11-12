
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        alert('Thank you for your message!');
    };

    return (
        <section id="contact" className="py-20 px-4 bg-[#0F0E3A]/50">
            <div className="container mx-auto max-w-3xl text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-12">
                        Questions, feedback, or partnership inquiries? We'd love to hear from you.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
                            <input type="email" placeholder="Your Email" className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
                        </div>
                        <textarea placeholder="Your Message" rows={5} className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" required></textarea>
                        <div className="text-center">
                            <button type="submit" className="px-8 py-3 bg-gradient-to-r from-[#00F5D4] to-[#00BEB2] text-black font-bold rounded-full text-lg hover:scale-105 transform transition-transform duration-300 ease-in-out shadow-lg shadow-cyan-500/20">
                                Send Message
                            </button>
                        </div>
                    </form>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Contact;
