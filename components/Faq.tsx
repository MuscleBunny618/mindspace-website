import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import AnimatedSection from './AnimatedSection';
import FaqItem from './FaqItem';

const faqData = [
    {
        question: "Is MindSpace a replacement for therapy?",
        answer: "MindSpace is designed to be a powerful tool for building mental resilience and providing daily support. However, it is not a replacement for professional therapy. We encourage users to seek help from a qualified mental health professional for diagnoses and treatment plans."
    },
    {
        question: "How does the AI companion work?",
        answer: "Our AI companion uses advanced natural language processing to understand your concerns and provide empathetic, evidence-based responses. It's trained on a vast dataset of therapeutic conversations and mindfulness principles to offer helpful guidance. All conversations are private and encrypted."
    },
    {
        question: "Who is MindSpace for?",
        answer: "While MindSpace is designed with the unique challenges of GenZ in mind, its tools and resources are beneficial for anyone looking to improve their mental well-being, manage stress, and build healthier habits."
    },
    {
        question: "Is my data private and secure?",
        answer: "Absolutely. We prioritize your privacy above all else. Your personal data, journal entries, and conversations are end-to-end encrypted and are never shared with third parties. You are in complete control of your information."
    }
];

interface Message {
    text: string;
    from: 'user' | 'ai';
}

const Faq: React.FC = () => {
    // Chatbot state
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! I'm here to listen. How are you feeling today?", from: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Initialize Chat
    useEffect(() => {
        const initChat = () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                chatRef.current = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: "You are a caring and empathetic mental wellness assistant for MindSpace. Your goal is to provide a safe, non-judgmental space for users, primarily Gen Z, to talk about their feelings. Ask gentle, open-ended questions to understand how they are, what's on their mind, and offer supportive, calming, and constructive advice. Do not provide medical diagnoses. Encourage mindfulness and self-care practices. Keep your responses concise, friendly, and easy to understand.",
                    },
                });
            } catch (error) {
                console.error("Failed to initialize AI Chat:", error);
                setMessages(prev => [...prev, { text: "I'm having a little trouble getting started. Please check the connection and API key.", from: 'ai' }]);
            }
        };
        initChat();
    }, []);

    // Auto-scroll chat
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Handle message sending
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatRef.current) return;

        const userMessageText = input.trim();
        setMessages(prev => [...prev, { text: userMessageText, from: 'user' }]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chatRef.current.sendMessage({ message: userMessageText });
            const aiText = response.text;
            setMessages(prev => [...prev, { text: aiText, from: 'ai' }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { text: "I'm having a little trouble connecting right now. Please try again in a moment.", from: 'ai' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="faq" className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <AnimatedSection className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-12">Have questions? We've got answers.</p>
                </AnimatedSection>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <AnimatedSection key={index}>
                            <FaqItem question={item.question} answer={item.answer} />
                        </AnimatedSection>
                    ))}
                </div>

                {/* Chatbot Section */}
                <AnimatedSection className="mt-20">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need to Talk?</h2>
                        <p className="max-w-2xl mx-auto text-gray-400 mb-8">
                            Our AI companion is here for a confidential chat. Share what's on your mind.
                        </p>
                    </div>
                    <div className="bg-[#0F0E3A]/50 border border-purple-500/20 rounded-2xl max-w-3xl mx-auto shadow-lg">
                        <div ref={chatContainerRef} className="h-96 overflow-y-auto p-6 space-y-4" role="log" aria-live="polite">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-5 py-3 ${
                                        msg.from === 'user'
                                        ? 'bg-cyan-500/80 text-white rounded-br-none'
                                        : 'bg-gray-700/50 text-gray-200 rounded-bl-none'
                                    }`}>
                                        <p className="text-base leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-700/50 text-gray-200 rounded-2xl px-5 py-3 rounded-bl-none">
                                        <div className="flex items-center space-x-2">
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                            <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-500/20 flex items-center gap-4">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-grow bg-gray-800/50 border border-gray-700 rounded-full px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                                disabled={isLoading}
                                aria-label="Chat message"
                            />
                            <button type="submit" disabled={isLoading} aria-label="Send message" className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full p-3 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Faq;