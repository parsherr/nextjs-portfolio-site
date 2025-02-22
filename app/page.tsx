'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SWR from '@/utils/swr';
import Link from 'next/link';
import Image from 'next/image';

// Components
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import PorfileDetails from '@/components/Profile';
import Contact from '@/components/Contact';
import FadeInSection from '@/components/FadeInSection';
import Schema from '@/components/Schema';
import Footer from '@/components/Footer';

export default function Home() {
  const discord = SWR('discord');
  const github = SWR('github');
  const discordUser = discord.data || null;
  const githubUser = github.data || null;
  const [showMailForm, setShowMailForm] = useState(false);

  const handleMailClick = () => {
    setShowMailForm(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Schema />
      <CustomCursor />
      <Navbar />

      <main className="flex-grow">
        <br /><br /><br />
        <FadeInSection>
          <PorfileDetails
            discord={discordUser}
            onMailClick={handleMailClick}
          />
        </FadeInSection>
        <FadeInSection>
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}