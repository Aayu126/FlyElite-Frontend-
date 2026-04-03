import { motion } from 'framer-motion'
import { Award } from 'lucide-react';

const Story = () => {
    return (
        <section id="story" className="py-32 md:py-48 bg-white flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row gap-20 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 space-y-12"
                >
                    <div className="space-y-6">
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400"
                        >
                            Our Heritage
                        </motion.p>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter" style={{ color: '#202A36' }}>
                            The Legacy. <br /> Our Commitment.
                        </h2>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl">
                        Founded on the principles of absolute discretion and uncompromising safety, FlyElite has redefined private aviation for the most discerning global travelers since 2024.
                    </p>
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-4xl font-bold tracking-tighter" style={{ color: '#202A36' }}>15+</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Years Experience</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-4xl font-bold tracking-tighter" style={{ color: '#202A36' }}>120</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Aircraft Direct</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-4xl font-bold tracking-tighter" style={{ color: '#202A36' }}>10k+</h4>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Flights Completed</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 relative group"
                >
                    <div className="absolute -inset-4 border border-gray-100 rounded-[4rem] scale-105 group-hover:scale-110 transition-transform duration-[2s]"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=2600" 
                        alt="Private luxury jet cabin" 
                        className="rounded-[3rem] w-full h-[600px] object-cover shadow-2xl transition-transform duration-[2s] group-hover:scale-105" 
                    />
                    <div className="absolute top-8 left-8 p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center gap-3">
                        <Award size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Global Safety Excellence</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;
