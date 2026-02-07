import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const headerRef = useScrollAnimation();
    const leftRef = useScrollAnimation({ delay: 0.2 });
    const rightRef = useScrollAnimation({ delay: 0.4 });

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
    };

    const handleCopyEmail = (e) => {
        e.preventDefault();
        const email = 'mohamedsinan9400@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            showToast('Email copied to clipboard!', 'success');
        });
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            showToast('Success! Message sent successfully.', 'success');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-32 bg-transparent text-black">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-[#FEF08A05] blur-[140px] pointer-events-none" />

            {toast.show && (
                <div className="fixed top-8 right-8 z-[10000] px-8 py-4 rounded-full bg-black text-white shadow-2xl animate-fade-in-up">
                    <p className="text-xs font-bold tracking-widest uppercase">{toast.message}</p>
                </div>
            )}

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div ref={headerRef} className="text-center mb-24 opacity-0 translate-y-8">
                    <h2 className="text-4xl lg:text-6xl font-bold tracking-tight uppercase mb-4">LET'S CONNECT</h2>
                    <div className="h-1 w-24 bg-black mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div ref={leftRef} className="space-y-12 opacity-0 translate-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-serif italic text-gray-400">Ready to start your next <span className="text-black font-bold">project?</span></h3>
                            <p className="text-lg text-gray-500 max-w-md">I am always open to discussing new projects, creative ideas or architectural challenges.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="group">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2">Write me at</p>
                                <div className="flex items-center gap-4">
                                    <a
                                        href="mailto:mohamedsinan9400@gmail.com"
                                        onClick={handleCopyEmail}
                                        data-cursor="copy"
                                        className="text-xl font-bold hover:text-gray-500 transition-colors"
                                    >
                                        mohamedsinan9400@gmail.com
                                    </a>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100"
                                        title="Copy Email"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="group">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2">Find me on</p>
                                <div className="flex gap-6">
                                    <a href="https://www.linkedin.com/in/mohamedsinann" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-gray-500 transition-colors">LinkedIn</a>
                                    <a href="https://github.com/sinan-prvt" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-gray-500 transition-colors">GitHub</a>
                                </div>
                            </div>
                            <div className="pt-6">
                                <a
                                    href="/Mohamed-Sinan-FullStack-CV.pdf"
                                    download
                                    className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-xl shadow-black/10 group"
                                >
                                    <span>Download CV</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div ref={rightRef} className="bg-white p-8 lg:p-12 rounded-[40px] shadow-2xl shadow-black/5 opacity-0 translate-y-8">
                        <form
                            action="https://formsubmit.co/mohamedsinan9400@gmail.com"
                            method="POST"
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-gray-50 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="hello@example.com"
                                        className="w-full bg-gray-50 rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-[#FF4D00]/20 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-4">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Tell me about your vision..."
                                    className="w-full bg-gray-50 rounded-[32px] px-6 py-4 outline-none focus:ring-2 focus:ring-[#FF4D00]/20 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-black text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-gray-800 transition-all shadow-xl shadow-black/10 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                        <iframe name="hidden_iframe" id="hidden_iframe" className="hidden"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
