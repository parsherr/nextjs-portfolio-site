import { socialMediaAccounts } from '@/utils/variables';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <div className="grid gap-2 sm:gap-4 md:grid-cols-2 px-2 sm:px-0">
        {socialMediaAccounts.map((props, key) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: key * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative"
          >
            <Link
              href={props.link}
              target="_blank"
              className="relative block overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900/80 to-zinc-900/60 hover:from-white/5 hover:to-zinc-900/80 border border-zinc-800/50 hover:border-white/30 p-3 sm:p-4 transition-all duration-300"
            >
              {/* Parlama Efekti */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
              </div>

              {/* İçerik */}
              <div className="flex items-center justify-between space-x-2 sm:space-x-4">
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors duration-300">{props.name}</h2>
                  <p className="text-xs sm:text-sm text-zinc-400 truncate group-hover:text-zinc-300 transition-colors duration-300">{props.username}</p>
                </div>
                <div className="flex-shrink-0 relative">
                  <props.iconURL
                    size={20}
                    className="text-zinc-400 group-hover:text-white transition-all duration-300 group-hover:rotate-12 sm:w-6 sm:h-6"
                  />
                  {/* Pulse Efekti */}
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}