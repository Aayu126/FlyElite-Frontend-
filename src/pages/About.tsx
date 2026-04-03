import { motion } from 'framer-motion'
import { ArrowLeft, Globe, Users, Zap, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Background Texture/glow */}
            <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gray-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-[200px]"></div>

            {/* Nav - Glassmorphism */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-2xl py-8 border-b border-gray-100/10">
                <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-4 group text-gray-900">
                        <motion.div 
                            whileHover={{ x: -10 }}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all shadow-sm"
                        >
                            <ArrowLeft size={18} />
                        </motion.div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] ml-2">Back to Platform</span>
                    </Link>
                    <div className="text-sm font-black tracking-tighter uppercase flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                        <span>Corporate Mission / 2024 Legacy</span>
                    </div>
                </div>
            </nav>

            <header className="pt-48 pb-32 px-8 max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-32 mb-48 items-center lg:items-start">
                    <div className="lg:w-1/2">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8 block"
                        >
                            The Excellence Narrative
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-8xl md:text-[180px] font-black tracking-tighter mb-16 leading-[0.8] text-gray-900"
                        >
                            Pure <br />
                            Legacy.
                        </motion.h1>
                        <div className="space-y-10">
                            <p className="text-3xl text-gray-500 font-light leading-relaxed max-w-xl pr-12">
                                At FlyElite, we don't just provide transportation. We curate life's most precious asset: **time**.
                            </p>
                            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                                Founded on the principles of absolute discretion and uncompromising safety, FlyElite has redefined private aviation for the most discerning global travelers since 2024.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full pt-12">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            className="relative group overflow-hidden rounded-[4rem] shadow-2xl"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2600" 
                                alt="FlyElite Visionary Design" 
                                className="w-full h-[800px] object-cover grayscale transition-all duration-[5s] group-hover:grayscale-0 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-16 left-16 right-16">
                                <motion.div 
                                    whileHover={{ y: -10 }}
                                    className="p-10 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 text-white"
                                >
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6">Founding Mantra</div>
                                    <h4 className="text-3xl font-black tracking-tighter leading-tight italic">
                                        "Distance is no longer a constraint. It is an opportunity for absolute focus."
                                    </h4>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Values/Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-48">
                    {[
                        { label: 'Unmatched Range', icon: <Globe size={40} />, value: 'Transcontinental', text: 'Direct flights to any global hub without fuel stops.' },
                        { label: 'Precision Timing', icon: <Zap size={40} />, value: '4 Hour Launch', text: 'Fleet positioned to depart within minutes of request.' },
                        { label: 'Safety Gold', icon: <ShieldCheck size={40} />, value: 'Security Level A+', text: 'Vetted pilots and meticulously maintained aircraft.' },
                        { label: 'Pax Excellence', icon: <Users size={40} />, value: 'Bespoke Pax', text: 'Tailored cabins to meet your precise daily workflow.' }
                    ].map((value, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 1 }}
                            className="p-12 rounded-[4rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
                        >
                            <div className="w-20 h-20 rounded-[2rem] bg-white border border-gray-100 flex items-center justify-center text-gray-900 mb-10 shadow-sm">
                                {value.icon}
                            </div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4">{value.label}</h4>
                            <div className="text-4xl font-black tracking-tighter mb-6 text-gray-900">{value.value}</div>
                            <p className="text-gray-500 font-light leading-relaxed">{value.text}</p>
                        </motion.div>
                    ))}
                </div>
            </header>
            
            <div className="py-48 text-center bg-gray-900 text-white/5 text-[200px] font-black tracking-tighter select-none pointer-events-none whitespace-nowrap leading-none italic uppercase">
                EXCELLENCE
            </div>
        </div>
    );
};

export default About;
