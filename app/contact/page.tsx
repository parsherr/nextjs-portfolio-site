'use client';

import { AnimatePresence, motion } from 'framer-motion';
import SWR from '@/utils/swr';
import Link from 'next/link';
import Image from 'next/image';

// Components
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Contact from '@/components/Contact';
import FadeInSection from '@/components/FadeInSection';
import PostMail from '@/components/postMail';
import Schema from '@/components/Schema';
import WorkTogether from '@/components/WorkTogether';

export default function ContactPage() {
  const discord = SWR('discord');
  const github = SWR('github');
  const discordUser = discord.data || null;
  const githubUser = github.data || null;

  return (
    <div className="flex flex-col min-h-screen">
      <Schema />
      <CustomCursor />
      <Navbar />

      <main className="flex-grow">
        <br /><br /><br /><br /><br />
        <FadeInSection>
          <Contact />
        </FadeInSection>
        <FadeInSection>
          <PostMail />
        </FadeInSection>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}