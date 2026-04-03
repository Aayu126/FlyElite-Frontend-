import { motion } from 'framer-motion'
import { Calendar, MapPin, Search } from 'lucide-react'

const Booking = () => {
    return (
        <section id="booking" className="py-32 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gray-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-[150px]"></div>
            <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-gray-50 rounded-full -translate-x-1/2 translate-y-1/2 blur-[150px]"></div>

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative rounded-[4rem] p-16 md:p-32 overflow-hidden shadow-[0_80px_160px_-40px_rgba(32,42,54,0.1)] group"
                    style={{ backgroundColor: '#202A36' }}
                >
                    {/* ENHANCED GLASSMORPHISM OVERLAY */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-[120px] mix-blend-overlay"></div>
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-[160px] animate-pulse"></div>
                    
                    <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-24">
                            <div className="max-w-2xl">
                                <motion.span 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 mb-6 block"
                                >
                                    Instant Availability
                                </motion.span>
                                <motion.h2 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]"
                                >
                                    Your Window <br />
                                    to the World.
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed pr-12"
                                >
                                    Select your destination. We'll handle the logistics of the perfect flight.
                                </motion.p>
                            </div>
                            <div className="hidden lg:block pb-4">
                                <div className="p-10 border border-white/5 rounded-[3rem] bg-white/5 backdrop-blur-3xl group-hover:border-white/20 transition-all duration-700">
                                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-4">Pax Priority</div>
                                    <div className="text-5xl font-black text-white tracking-tighter">VIP-A1</div>
                                </div>
                            </div>
                        </div>

                        {/* Search Bar - High End Glassmorphism Form */}
                        <div className="bg-white/5 backdrop-blur-[80px] rounded-[3rem] p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 border border-white/10 group/form shadow-2xl">
                            {[
                                { label: 'Origin', icon: <MapPin />, placeholder: 'Departure' },
                                { label: 'Destination', icon: <MapPin />, placeholder: 'Arrival' },
                                { label: 'Departure Date', icon: <Calendar />, placeholder: 'DD / MM / YYYY' }
                            ].map((field, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                    className="p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col gap-6 cursor-text group/field"
                                >
                                    <div className="flex items-center gap-3 text-white/40 group-hover/field:text-white transition-colors">
                                        <div className="w-5 h-5 flex items-center justify-center">{field.icon}</div>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{field.label}</span>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder={field.placeholder} 
                                        className="bg-transparent border-none outline-none text-2xl font-black tracking-tighter text-white placeholder:text-white/20 w-full"
                                    />
                                </motion.div>
                            ))}

                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex items-center lg:pl-4"
                            >
                                <button className="w-full h-full min-h-[120px] bg-white text-[#202A36] rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-[0_30px_60px_-15px_rgba(255,255,255,0.4)] flex items-center justify-center gap-4">
                                    <Search size={22} strokeWidth={4} />
                                    Search Fleet
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Booking;
