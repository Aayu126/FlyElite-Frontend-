import { motion } from 'framer-motion'
import { ArrowUpRight, CloudIcon } from 'lucide-react'

const VisualShowcase = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black group">
            {/* High impact background image (matching hero video style) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2600" 
                    alt="Luxury cockpit" 
                    className="w-full h-full object-cover opacity-60 scale-110 transition-transform duration-[10s] group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
                <div className="absolute inset-0 bg-[#202A36]/40 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/20 group/icon hover:bg-white/30 transition-all cursor-pointer">
                        <ArrowUpRight size={32} className="text-white group-hover/icon:rotate-45 transition-transform" />
                    </div>
                    
                    <span className="text-xs font-bold text-white/60 uppercase tracking-[0.6em] mb-4">The Absolute Peak</span>
                    <h2 className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-12">
                        UNMATCHED <br /> PERFORMANCE.
                    </h2>
                    
                    <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mb-16">
                        FlyElite isn't just a service. It's a testament to the engineering marvels that represent the future of transcontinental flight.
                    </p>

                    <button className="px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-[0_30px_100px_rgba(255,255,255,0.2)]">
                        Learn More about Performance
                    </button>
                </motion.div>
            </div>

            {/* Float effects */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 hidden lg:block"
            >
                <div className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-white flex items-center gap-3">
                    <CloudIcon size={18} />
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">FL 450 Standard Operating Ceiling</span>
                </div>
            </motion.div>
            
            <div className="absolute left-1/2 bottom-12 -translate-x-1/2 text-white/20 text-[60px] sm:text-[150px] md:text-[200px] font-black tracking-tighter opacity-10 select-none pointer-events-none">
                FLYELITE
            </div>
        </section>
    );
};

export default VisualShowcase;
