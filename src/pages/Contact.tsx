import { motion } from 'framer-motion'
import { Send, Phone, Mail, ArrowLeft, Globe, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Background Image Effect (Subtle) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2600" 
                    alt="Luxury cockpit background" 
                    className="w-full h-full object-cover grayscale scale-110 opacity-10 blur-xl transition-all duration-[10s] hover:scale-100" 
                />
            </div>

            {/* Top Navigation - Extra Premium with Glassmorphism */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-2xl py-8 border-b border-gray-100/10">
                <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4 group text-gray-900 drop-shadow-sm">
                        <motion.div 
                            whileHover={{ x: -10 }}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all shadow-sm"
                        >
                            <ArrowLeft size={18} />
                        </motion.div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] ml-2">Back to Platform</span>
                    </Link>
                    <div className="text-xl font-black tracking-tighter uppercase flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-gray-900 animate-pulse"></div>
                        <span>Live Global Concierge</span>
                    </div>
                </div>
            </nav>

            <div className="relative z-10 pt-48 max-w-[1400px] mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-32 mb-32 items-center lg:items-start">
                    <div className="lg:w-1/2">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8 block"
                        >
                            Global Service Portal
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="text-8xl md:text-[180px] font-black tracking-tighter mb-12 leading-[0.8] text-gray-900"
                        >
                            Inquire.
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl text-gray-500 font-light leading-relaxed mb-20 max-w-xl pr-12"
                        >
                            Secure your jet. Our global concierge team is available 24/7 to curate your next cross-continent flight.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-12"
                        >
                            {[
                                { label: 'Bespoke Inquiry', icon: <Mail size={32} />, value: 'concierge@flyelite.com', type: 'Email' },
                                { label: 'Global Priority', icon: <Phone size={32} />, value: '+1 (800) FLY-ELITE', type: 'Support' },
                                { label: 'Headquarters', icon: <Globe size={32} />, value: 'New York / Dubai / London', type: 'Offices' }
                            ].map((contact, idx) => (
                                <div key={idx} className="flex items-center gap-10 group cursor-pointer hover:-translate-y-2 transition-transform">
                                    <div className="w-24 h-24 rounded-[2rem] bg-gray-50 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all shadow-sm">
                                        {contact.icon}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{contact.label}</div>
                                        <div className="text-4xl font-black tracking-tighter group-hover:text-gray-900 transition-colors">{contact.value}</div>
                                        <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{contact.type}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <motion.form 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="relative bg-white rounded-[4rem] p-16 md:p-24 space-y-12 shadow-[0_100px_200px_-50px_rgba(32,42,54,0.15)] border border-gray-100 overflow-hidden"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            {/* Form Inner Background */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>

                            <div className="relative z-10 space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 ml-1">Your Full Name</label>
                                        <input type="text" placeholder="First Last" className="px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl placeholder:text-gray-300" />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 ml-1">Global Email</label>
                                        <input type="email" placeholder="john@domain.com" className="px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl placeholder:text-gray-300" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 ml-1">Inquiry Purpose</label>
                                    <select className="px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl appearance-none cursor-pointer">
                                        <option>Transcontinental Flight Booking</option>
                                        <option>Long-Range Global Fleet Access</option>
                                        <option>Corporate Jet Program Integration</option>
                                        <option>Media & Partnership Exploration</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Project Details</label>
                                        <HelpCircle size={14} className="text-gray-200" />
                                    </div>
                                    <textarea placeholder="Describe your charter requirements or global logistics needs..." rows={5} className="px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl resize-none placeholder:text-gray-300"></textarea>
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-12 py-8 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.3em] text-xs flex items-center justify-between shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-all"
                                >
                                    Transmit Message
                                    <Send size={18} strokeWidth={3} />
                                </motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
            
            <div className="py-48 text-center bg-gray-900 text-white/5 text-[200px] font-black tracking-tighter select-none pointer-events-none whitespace-nowrap leading-none italic uppercase">
                INQUIRE NOW
            </div>
        </div>
    );
};

export default Contact;
