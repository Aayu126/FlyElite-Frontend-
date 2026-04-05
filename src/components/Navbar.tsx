import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle hash scrolling on page mount (e.g. Navigating back from /fleet to /#story)
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        }
    }, [location])

    const menuItems = [
        { name: 'Home', path: '/#home' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'About', path: '/about' },
        { name: 'Story', path: '/#story' },
        { name: 'Analysis', path: '/#analysis' },
        { name: 'Rates', path: '/#rates' },
        { name: 'FAQ', path: '/#faq' },
        { name: 'Contact', path: '/contact' },
    ]

    const handleLinkClick = (path: string) => {
        setMobileMenuOpen(false);
        if (path.startsWith('/#')) {
            const id = path.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-500 ${isScrolled ? 'bg-white py-4 shadow-xl' : 'bg-white lg:bg-transparent py-6 lg:py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
                <Link to="/" onClick={() => handleLinkClick('/')} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all">
                        <span className="text-xl font-bold -rotate-12">F</span>
                    </div>
                    <span className="text-2xl font-black tracking-tighter uppercase text-gray-900">FlyElite</span>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path.startsWith('/#') && location.hash === item.path.replace('/', ''))
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => handleLinkClick(item.path)}
                                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${isActive ? 'text-gray-900 border-b border-gray-900 pb-1' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                    <Link to="/contact" className="px-8 py-3 bg-gray-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
                        Inquire Now
                    </Link>
                </div>

                <button className="lg:hidden p-2 text-gray-900" onClick={() => setMobileMenuOpen(true)}>
                    <Menu size={28} />
                </button>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            className="fixed inset-0 bg-white z-[1000] flex flex-col p-8 sm:p-12 overflow-hidden"
                        >
                            <div className="flex justify-between items-center mb-12 sm:mb-16">
                                <span className="text-xl font-black">FlyElite</span>
                                <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 text-gray-900">
                                    <X size={32} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-6 sm:gap-8 overflow-y-auto pb-12">
                                {menuItems.map((item) => (
                                    <Link key={item.name} to={item.path} onClick={() => handleLinkClick(item.path)} className="text-3xl sm:text-4xl font-black text-gray-900 hover:text-gray-400 transition-colors uppercase italic">{item.name}</Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar;
