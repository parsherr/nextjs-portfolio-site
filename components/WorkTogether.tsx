import { BsArrowRight } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';

export default function WorkTogether() {
  return (
    <>
      <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-8/12 md:w-6/12">
        <div className="relative w-full py-16 overflow-hidden rounded-2xl bg-gradient-to-br from-black via-[#1b1e21] to-black">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#e1e8ed_45%,#e1e8ed_65%,transparent_85%)] animate-aurora opacity-40"></div>
            <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,#323336_45%,#323336_65%,transparent_85%)] animate-aurora-reverse opacity-30"></div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,#323336_45%,#323336_65%,transparent_85%)] animate-aurora-slow opacity-20"></div>
          </div>

          {/* Radial Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Work Together
            </h2>
            <p className="text-base md:text-lg mb-6 text-zinc-300">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-800/30 hover:bg-zinc-800/50 border border-zinc-700/50 hover:border-violet-500/50 rounded-lg group transition-all duration-300"
              >
                <FaEnvelope className="text-white group-hover:scale-110 transition-transform" />
                <span className="text-white group-hover:text-violet-300 transition-colors">/contact</span>
                <div className="w-5 h-5 rounded-full bg-zinc-700/30 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <BsArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                </div>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}