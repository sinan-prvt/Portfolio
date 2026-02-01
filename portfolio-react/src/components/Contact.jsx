import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
    };

    const handleSubmit = () => {
        setIsSubmitting(true);

        setTimeout(() => {
            showToast('Success! Message sent to mohamedsinan9400@gmail.com', 'success');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-32 lg:py-40 bg-white text-black overflow-hidden border-t border-black/5">
            {toast.show && (
                <div className={`fixed top-8 right-8 z-[10000] px-8 py-4 rounded-lg shadow-2xl transition-all duration-500 ${toast.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                    } animate-slide-in`}>
                    <p className="font-medium">{toast.message}</p>
                </div>
            )}

            <div className="absolute left-[8%] top-0 bottom-0 w-px bg-black/[0.03] hidden lg:block" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="hidden lg:flex col-span-1 flex-col items-center pt-2">
                        <span className="text-[10px] font-bold tracking-[1em] text-black/20 uppercase [writing-mode:vertical-lr] rotate-180">
                            05 — PARTNERSHIP
                        </span>
                        <div className="flex-grow w-px bg-black/10 mt-12" />
                    </div>

                    <div className="col-span-12 lg:col-span-11 lg:pl-20">
                        <div className="space-y-12 mb-20">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-px bg-black" />
                                <span className="text-[11px] font-bold tracking-[0.4em] text-black uppercase">
                                    CONTACT
                                </span>
                            </div>

                            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                                LET'S CREATE<br />
                                <span className="italic font-serif font-light lowercase text-gray-400">something amazing</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                            <div className="space-y-12">
                                <div className="space-y-8">
                                    <div className="group">
                                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-3">EMAIL</p>
                                        <a
                                            href="mailto:mohamedsinan9400@gmail.com"
                                            className="text-xl lg:text-2xl font-light tracking-tight hover:text-black/60 transition-colors duration-300 block"
                                        >
                                            mohamedsinan9400@gmail.com
                                        </a>
                                    </div>

                                    <div className="group">
                                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-black/40 mb-3">SOCIAL</p>
                                        <div className="space-y-3">
                                            <a
                                                href="https://linkedin.com/in/mohamed-sinan-75107a364"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-light hover:text-black/60 transition-colors duration-300 block"
                                            >
                                                LinkedIn →
                                            </a>
                                            <a
                                                href="https://github.com/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-lg font-light hover:text-black/60 transition-colors duration-300 block"
                                            >
                                                GitHub →
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-black/5">
                                    <p className="text-lg lg:text-xl text-gray-400 font-light leading-relaxed font-serif italic">
                                        "Excellence is not a skill, it's an attitude. Let's build something remarkable together."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-muted/30 p-8 lg:p-12 border border-black/5">
                                <form
                                    action="https://formsubmit.co/mohamedsinan9400@gmail.com"
                                    method="POST"
                                    target="hidden_iframe"
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />
                                    <input type="hidden" name="_subject" value={`Portfolio Message from ${formData.name}`} />

                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold tracking-[0.3em] uppercase text-black/60">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-3 px-0 text-lg outline-none transition-colors duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold tracking-[0.3em] uppercase text-black/60">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-3 px-0 text-lg outline-none transition-colors duration-300"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold tracking-[0.3em] uppercase text-black/60">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-3 px-0 text-lg outline-none transition-colors duration-300 resize-none"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative px-12 py-6 bg-black text-white overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] disabled:opacity-50 disabled:cursor-not-allowed w-full"
                                    >
                                        <span className="relative z-10 font-bold tracking-[0.4em] text-xs uppercase">
                                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                        </span>
                                        <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </form>

                                <iframe name="hidden_iframe" id="hidden_iframe" className="hidden"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
