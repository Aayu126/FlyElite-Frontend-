import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Globe, Gauge, ArrowLeft } from 'lucide-react'

const FleetItem = ({ name, type, specs, img, delay }: { name: string, type: string, specs: Record<string, string>, img: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay }}
        viewport={{ once: true }}
        className="group relative"
    >
        <div className="relative h-[600px] overflow-hidden rounded-[4rem] bg-gray-100 flex flex-col justify-end p-12 transition-all duration-[1s] group-hover:-translate-y-4">
            {/* Background Image - High Res */}
            <img 
                src={img} 
                alt={name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0" 
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            {/* Content Overlays */}
            <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">{type}</span>
                    <h3 className="text-4xl sm:text-6xl font-black tracking-tight text-white">{name}</h3>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                    {Object.entries(specs).map(([key, val]) => (
                        <div key={key} className="space-y-1">
                            <div className="text-[8px] font-black uppercase tracking-widest text-white/40">{key}</div>
                            <div className="text-xl font-black text-white">{val}</div>
                        </div>
                    ))}
                </div>

                <Link 
                    to="/billing" 
                    className="w-full py-6 bg-white text-gray-900 rounded-full font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 hover:bg-gray-100 transition-all shadow-2xl active:scale-95"
                >
                    Select Aircraft
                    <ArrowRight size={16} strokeWidth={3} />
                </Link>
            </div>
        </div>
    </motion.div>
)

const Fleet = () => {
    const aircraft = [
        {
            name: "Gulfstream G700",
            type: "Ultra Long Range",
            img: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=2000",
            specs: { "Range": "7,500nm", "Speed": "Mach 0.925", "Pax": "19 Max" }
        },
        {
            name: "Bombardier Global 7500",
            type: "Business Flagship",
            img: "https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&q=80&w=2000",
            specs: { "Range": "7,700nm", "Speed": "Mach 0.925", "Pax": "19 Max" }
        },
        {
            name: "Embraer Praetor 600",
            type: "Super Midsize",
            img: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=1800",
            specs: { "Range": "4,018nm", "Speed": "Mach 0.83", "Pax": "12 Max" }
        }
    ]

    return (
        <div className="bg-white min-h-screen relative">
            {/* Back Button */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12 z-50">
                <Link 
                    to="/" 
                    className="flex items-center gap-4 text-gray-400 hover:text-gray-900 transition-all group font-black text-[10px] uppercase tracking-[0.4em]"
                >
                    <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all shadow-sm bg-white/80 backdrop-blur-md">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="hidden sm:inline">Back to Platform</span>
                </Link>
            </div>

            {/* Header */}
            <div className="pt-32 sm:pt-48 pb-16 sm:pb-32 px-8 max-w-[1400px] mx-auto text-center space-y-8 sm:space-y-12">
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.6em] sm:tracking-[0.8em] text-gray-400 block"
                >
                    The Inventory
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-6xl sm:text-[120px] md:text-[200px] font-black leading-[0.75] tracking-tighter text-gray-900 uppercase italic"
                >
                    The <br /> Fleet.
                </motion.h1>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-16 py-8 sm:py-12 border-y border-gray-100 mt-10 sm:mt-20">
                    {[
                        { icon: <Shield size={16} />, label: "Certified Ops" },
                        { icon: <Zap size={16} />, label: "Instant Deploy" },
                        { icon: <Globe size={16} />, label: "Globe Ready" },
                        { icon: <Gauge size={16} />, label: "Avg Age: 2.1y" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-400 uppercase tracking-[0.3em] font-black text-[8px] sm:text-[10px]">
                            {item.icon}
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 pb-32 sm:pb-48">
                {aircraft.map((jet, idx) => (
                    <FleetItem key={jet.name} {...jet} delay={idx * 0.2} />
                ))}
            </div>

            {/* Bottom Info Section */}
            <div className="max-w-7xl mx-auto px-8 pb-32 grid md:grid-cols-2 gap-16 md:gap-24 items-center border-t border-gray-100 pt-32">
                <div className="space-y-6 sm:space-y-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-400">Inventory Status</span>
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-gray-900 leading-[0.9]">
                        Global Mobility <br />
                        <span className="italic">Standardized.</span>
                    </h2>
                    <p className="text-gray-500 font-light text-lg sm:text-xl leading-relaxed">
                        Our fleet remains at peak global availability, maintained to surpass FAA and EASA regulatory benchmarks. Each airframe is audited weekly for safety and luxury certification.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {[
                        { val: "100%", label: "Flight Dispatch Rate" },
                        { val: "24/7", label: "Global Monitoring" },
                        { val: "2.1y", label: "Average Fleet Age" },
                        { val: "98/c", label: "Luxury Sourcing" }
                    ].map((stat) => (
                        <div key={stat.label} className="p-6 sm:p-8 bg-gray-50 rounded-[1.5rem] sm:rounded-[2rem] space-y-2">
                            <div className="text-2xl sm:text-3xl font-black text-gray-900">{stat.val}</div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scrolling Text Background */}
            <div className="py-16 sm:py-24 bg-gray-900 overflow-hidden select-none whitespace-nowrap opacity-5">
                <motion.div 
                    animate={{ x: [0, -2000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="text-[100px] sm:text-[180px] md:text-[250px] font-black italic tracking-tighter"
                >
                  BOMBARDIER GULFSTREAM EMBRAER CESSNA AIRBUS BOMBARDIER GULFSTREAM EMBRAER CESSNA AIRBUS
                </motion.div>
            </div>
        </div>
    )
}

export default Fleet
