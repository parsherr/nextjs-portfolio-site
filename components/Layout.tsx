import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Layout;