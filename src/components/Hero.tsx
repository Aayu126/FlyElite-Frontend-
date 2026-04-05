import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div id="home" className="relative h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center">


      {/* Previous Video Background - Non-grayscale, centered focus */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Previous Hero Content - Centered Style */}
      <main className="relative z-10 text-center space-y-10 px-8 max-w-[1400px] pt-16">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-[120px] lg:text-[160px] font-black text-gray-900 tracking-tighter leading-[0.9] mb-8 sm:mb-12">
            <div className="overflow-hidden py-10 -my-10">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="block pb-4"
              >
                Premium.
              </motion.span>
            </div>
            <div className="overflow-hidden py-10 -my-10">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
                className="block text-gray-800 italic pb-4"
              >
                Accessible.
              </motion.span>
            </div>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Your legacy deserves the shortest path. Experience private aviation redefined for the bold, the visionary, and the elite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
        >
          <Link to="/fleet" className="w-full sm:w-auto px-12 py-6 bg-gray-100 text-gray-900 font-black uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-gray-200 hover:-translate-y-1 transition-all active:scale-95 border border-gray-200">
            Discover Fleet
          </Link>
          <Link to="/billing" className="w-full sm:w-auto px-12 py-6 bg-gray-900 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 shadow-xl">
            Book Mission
          </Link>
        </motion.div>
      </main>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-12 flex flex-col items-center gap-6"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-300 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-[30%] bg-gray-900"
          />
        </div>
      </motion.div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-16 right-12 text-gray-400 z-10 hidden md:block">
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest italic opacity-40">
          <span>Precision</span>
          <span>Safety</span>
          <span>Elite</span>
        </div>
      </div>
    </div>
  )
}

export default Hero;
