import { projects } from '@/utils/variables';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <div className="space-y-2 my-8">
        <h3 className="text-center font-semibold text-3xl text-zinc-200" id="projects">Projects</h3>
        <p className="text-center font-semibold text-zinc-400">My Projects</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(({ name, description, link, iconURL }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative"
          >
            <Link
              href={link}
              className="relative block overflow-hidden rounded-xl bg-gradient-to-r from-zinc-900/80 to-zinc-900/60 hover:from-white/5 hover:to-zinc-900/80 border border-zinc-800/50 hover:border-white/30 p-4 transition-all duration-300"
            >
              {/* Parlama Efekti */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
              </div>

              {/* İçerik */}
              <div className="flex items-start space-x-4">
                {/* Proje İkonu */}
                <div className="flex-shrink-0 relative">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
                    <Image
                      src={iconURL}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                </div>

                {/* Proje Detayları */}
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-base sm:text-lg text-zinc-200 group-hover:text-white transition-colors duration-300">
                    {name}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
                    {description}
                  </p>
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute right-4 bottom-4 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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