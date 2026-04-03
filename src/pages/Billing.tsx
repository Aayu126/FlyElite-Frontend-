import { motion } from 'framer-motion'
import { ArrowLeft, CreditCard, ShieldCheck, Zap, Globe, Lock, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Billing = () => {
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
                        <span>Secure Checkout / FlyElite</span>
                    </div>
                </div>
            </nav>

            <div className="relative z-10 pt-48 max-w-[1400px] mx-auto px-8 mb-32">
                <div className="flex flex-col lg:flex-row gap-32">
                    {/* Left: Summary */}
                    <div className="lg:w-1/2">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-400 mb-8 block"
                        >
                            Flight Reservation
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-8xl md:text-[120px] font-black tracking-tighter mb-16 leading-[0.8] text-gray-900"
                        >
                            Confirm <br />
                            Charter.
                        </motion.h1>
                        
                        <div className="space-y-12">
                            <div className="p-12 rounded-[4rem] bg-gray-50 border border-gray-100 space-y-12 shadow-sm">
                                <div className="flex justify-between items-center group">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Selected Fleet</div>
                                        <div className="text-4xl font-black tracking-tighter text-gray-900 group-hover:translate-x-2 transition-transform">Gulfstream G700</div>
                                    </div>
                                    <div className="w-20 h-20 rounded-[2rem] bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                                        <Zap size={32} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-200/50">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Hourly Rate</div>
                                        <div className="text-5xl font-black tracking-tighter text-gray-900">$12,500</div>
                                    </div>
                                    <div className="space-y-2 text-right">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Est. Flight Time</div>
                                        <div className="text-5xl font-black tracking-tighter text-gray-900">4.5 Hrs</div>
                                    </div>
                                </div>

                                <div className="pt-12 border-t border-gray-200/50 flex justify-between items-center bg-gray-900 p-10 -mx-12 -mb-12 rounded-b-[4rem] text-white">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Total Commitment</div>
                                        <div className="text-6xl font-black tracking-tighter">$56,250</div>
                                    </div>
                                    <ShieldCheck size={48} className="text-white/20" />
                                </div>
                            </div>

                            <div className="flex items-center gap-6 text-gray-400 px-6">
                                <Lock size={16} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">SECURE 256-BIT ENCRYPTION</span>
                                <Globe size={16} className="ml-auto" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">GLOBAL AVAILABILITY</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Payment Form */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-[4rem] p-16 md:p-20 space-y-12 shadow-[0_100px_200px_-50px_rgba(32,42,54,0.1)] border border-gray-100"
                        >
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 ml-2">Personal Identity</div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <input type="text" placeholder="First Name" className="w-full px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl" />
                                        <input type="text" placeholder="Last Name" className="w-full px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 ml-2">Payment Instrument</div>
                                    <div className="relative group">
                                        <input type="text" placeholder="Card Number" className="w-full px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl" />
                                        <CreditCard className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-gray-900 transition-colors" size={24} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <input type="text" placeholder="Expiry MM/YY" className="w-full px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl" />
                                        <input type="text" placeholder="Security CVV" className="w-full px-8 py-6 bg-gray-50 rounded-2xl border border-gray-50 outline-none focus:bg-white focus:border-gray-900 transition-all font-bold tracking-tight text-xl" />
                                    </div>
                                </div>

                                <div className="pt-8 flex flex-col gap-8">
                                    {[
                                        'Instant Confirmation via Priority Concierge',
                                        'Full Ground Support & VIP Transport',
                                        'Zero Cancellation Fee up to 12 Hours'
                                    ].map((benefit, bIdx) => (
                                        <div key={bIdx} className="flex items-center gap-4 text-gray-500">
                                            <CheckCircle2 size={18} className="text-gray-900" />
                                            <span className="text-lg font-light">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-12 py-8 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.3em] text-xs flex items-center justify-between shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-all"
                                >
                                    Authorize Payment
                                    <ArrowLeft size={18} className="rotate-180" strokeWidth={3} />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="py-48 text-center bg-gray-900 text-white/5 text-[200px] font-black tracking-tighter select-none pointer-events-none whitespace-nowrap leading-none italic uppercase">
                PAYMENT SECURE
            </div>
        </div>
    );
};

export default Billing;
