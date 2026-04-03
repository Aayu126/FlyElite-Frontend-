import { Globe, Shield, Zap, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: 'Experience',
            links: [
                { name: 'Fleet', path: '/fleet' },
                { name: 'Destinations', path: '/about' },
                { name: 'Operational Excellence', path: '/' },
            ]
        },
        {
            title: 'Services',
            links: [
                { name: 'Private Charter', path: '/' },
                { name: 'Corporate Sales', path: '/' },
                { name: 'Ownership', path: '/' },
            ]
        },
        {
            title: 'FlyElite',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Legal', path: '/' },
                { name: 'Privacy Policy', path: '/' },
            ]
        }
    ];

    return (
        <footer className="bg-[#202A36] pt-32 pb-16 overflow-hidden relative">
            {/* Background Texture/glow */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full translate-x-1/2 translate-y-1/2 blur-[120px]"></div>
            
            <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-20 mb-32">
                    {/* Brand Meta */}
                    <div className="lg:col-span-2 space-y-12">
                        <Link to="/" className="text-3xl font-black text-white tracking-tighter uppercase flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-2xl -rotate-12">F</span>
                            </div>
                            FlyElite
                        </Link>
                        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
                            The absolute pinnacle of transcontinental aviation. Join the visionary few who redefine global movement.
                        </p>
                        <div className="flex items-center gap-6">
                            {[Globe, Shield, Zap].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white hover:text-[#202A36] transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {footerLinks.map((column, idx) => (
                            <div key={idx} className="space-y-8">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">{column.title}</h4>
                                <ul className="space-y-6">
                                    {column.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link to={link.path} className="text-gray-300 hover:text-white transition-colors font-light text-lg tracking-tight flex items-center gap-2 group">
                                                {link.name}
                                                <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Subscription/Inquiry Short Call */}
                    <div className="lg:col-span-1 space-y-8">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Inquiry</h4>
                        <div className="space-y-4">
                            <Link to="/contact" className="w-full py-5 px-8 bg-white text-[#202A36] rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-between hover:scale-105 active:scale-95 transition-all">
                                Reserve 
                                <Zap size={16} />
                            </Link>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center">Available 24/7 Global</p>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        © {currentYear} FlyElite Aviation Group. All Rights Reserved.
                    </div>
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-3 text-white/20">
                            <Shield size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Safety Level A+</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/20">
                            <Globe size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Global Reach 5k+</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Massive background Typography */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-white/5 text-[100px] sm:text-[200px] md:text-[300px] font-black tracking-tighter select-none pointer-events-none whitespace-nowrap leading-none italic uppercase">
                EXCELLENCE
            </div>
        </footer>
    );
};

export default Footer;
