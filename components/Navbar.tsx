import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiCode, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Profile', icon: FiUser },
  { href: '/projects', label: 'Projects', icon: FiCode },
  { href: '/contact', label: 'Contact', icon: FiMail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6"
    >
      <div className="max-w-2xl mx-auto">
        {/* Ana Navbar Container */}
        <motion.div
          layout
          className="relative"
        >
          {/* Glassmorphism Arka Plan */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10" />

          {/* Glow Efekti */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse" />

          {/* İçerik */}
          <div className="relative px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rasperon
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2"
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div
                    className={`relative z-10 flex items-center space-x-2 ${
                      pathname === item.href ? 'text-white' : 'text-zinc-400 hover:text-white/90'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>

                  {/* Hover ve Active Efektleri */}
                  {(hoveredItem === item.href || pathname === item.href) && (
                    <motion.div
                      layoutId="navBackground"
                      className="absolute inset-0 bg-white/10 rounded-xl -z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="relative px-6 py-4 space-y-2">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
                          pathname === item.href
                            ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon size={18} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;