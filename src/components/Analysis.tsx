import { motion } from 'framer-motion'
import { TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

const Analysis = () => {
    const stats = [
        {
            icon: <Clock size={32} />,
            label: 'Time Efficiency',
            value: '98%',
            text: 'Average time saved compared to commercial travel, factoring in check-ins and direct routing.'
        },
        {
            icon: <TrendingUp size={32} />,
            label: 'Market Growth',
            value: '1.4x',
            text: 'Year-over-year growth in fleet capabilities, ensuring your access to the latest aviation tech.'
        },
        {
            icon: <ShieldCheck size={32} />,
            label: 'Safety Record',
            value: 'Zero',
            text: 'Incidents in over 10,000 flight hours, exceeding all global safety audit requirements.'
        },
        {
            icon: <Zap size={32} />,
            label: 'Reliability',
            value: '99.9%',
            text: 'Fleet availability and on-time performance for all confirmed bookings.'
        }
    ];

    return (
        <section id="analysis" className="py-48 bg-gray-50 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 w-full flex flex-col lg:flex-row gap-24 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="lg:w-1/2 space-y-12"
                >
                    <div className="space-y-6">
                        <p className="text-sm font-bold text-gray-400 tracking-[0.4em] uppercase uppercase">
                            Operational Excellence
                        </p>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter" style={{ color: '#202A36' }}>
                            Institutional <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#202A36] to-gray-400">Quality.</span>
                        </h2>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                        Our proprietary flight analysis platform evaluates over 5,000 data points per route, optimizing for fuel efficiency, passenger confort, and absolute punctuality.
                    </p>
                    <div className="pt-8">
                        <button className="px-12 py-5 rounded-full text-white font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-xl" style={{ backgroundColor: '#202A36' }}>
                            View Full Report
                        </button>
                    </div>
                </motion.div>

                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 1 }}
                            className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
                        >
                            <div className="text-[#202A36] mb-8 scale-110">{stat.icon}</div>
                            <div className="text-5xl font-black mb-2 tracking-tighter" style={{ color: '#202A36' }}>{stat.value}</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6">{stat.label}</div>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                {stat.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Analysis;
