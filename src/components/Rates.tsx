import { motion } from 'framer-motion'
import { ArrowRight, Plane, Globe, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const Rates = () => {
    const plans = [
        {
            name: "Silver Tier",
            type: "Light Jet Mastery",
            price: "$3,500",
            icon: <Plane className="w-8 h-8" />,
            features: ["4-7 Passengers", "Single Pilot Ops", "Regional Range", "Instant Booking"]
        },
        {
            name: "Gold Executive",
            type: "Super Midsize Elite",
            price: "$7,200",
            icon: <Globe className="w-8 h-8" />,
            features: ["8-12 Passengers", "Full Gallery", "Transcontinental", "Gourmet Catering"]
        },
        {
            name: "Platinum Global",
            type: "Ultra Long Range",
            price: "$12,500",
            icon: <Shield className="w-8 h-8" />,
            features: ["14-19 Passengers", "Bedding & Shower", "Global Connectivity", "24/7 Priority"]
        }
    ]

    return (
        <section id="rates" className="py-48 bg-white overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gray-50 rounded-full blur-[150px] opacity-50 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="space-y-8">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <span className="w-12 h-[1px] bg-gray-900" />
                            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-400">Competitive Analysis</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] transition-all"
                            style={{ color: '#202A36' }}
                        >
                            Tiered <br /> Luxury.
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100 flex items-center gap-8 shadow-sm"
                    >
                        <Clock className="text-gray-900" size={32} />
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Fixed Rate Guarantee</div>
                            <div className="text-2xl font-black tracking-tight" style={{ color: '#202A36' }}>No Hidden Surcharges</div>
                        </div>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {plans.map((plan, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/60 backdrop-blur-xl border border-gray-100 p-12 rounded-[4rem] flex flex-col gap-10 hover:shadow-2xl transition-all hover:-translate-y-4 shadow-sm"
                        >
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <h4 className="text-4xl font-black tracking-tighter" style={{ color: '#202A36' }}>{plan.name}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{plan.type}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    {plan.icon}
                                </div>
                            </div>
                            
                            <div className="space-y-1">
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Starting from</div>
                                <div className="text-6xl font-black tracking-tighter" style={{ color: '#202A36' }}>
                                    {plan.price}
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-400">/HR</span>
                                </div>
                            </div>

                            <div className="space-y-6 pt-10 border-t border-gray-100">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-center gap-4 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gray-900 group-hover:scale-150 transition-all" />
                                        <span className="text-[13px] font-bold text-gray-500 uppercase tracking-widest">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link 
                                to="/billing" 
                                className="w-full mt-auto py-6 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-black transition-all shadow-2xl active:scale-95"
                            >
                                Select Aircraft
                                <ArrowRight size={16} strokeWidth={3} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rates;
