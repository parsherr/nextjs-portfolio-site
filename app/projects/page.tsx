'use client';

import { AnimatePresence, motion } from 'framer-motion';
import SWR from '@/utils/swr';
import { projects } from '@/utils/variables';
import Link from 'next/link';
import Image from 'next/image';

// Components
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FadeInSection from '@/components/FadeInSection';
import Schema from '@/components/Schema';
import Repositories from '@/components/Repositories';
import Stack from '@/components/Stack';
import WorkTogether from '@/components/WorkTogether';

export default function ProjectsPage() {
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
        <br /><br /><br />
        <FadeInSection>
          <Projects />
        </FadeInSection>
        <FadeInSection>
          <Repositories github={githubUser} />
        </FadeInSection>
        <FadeInSection>
          <WorkTogether />
        </FadeInSection>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}