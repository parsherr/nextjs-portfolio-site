import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { githubUsername } from '@/utils/variables';
import { FaRegStar } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { GoRepo } from 'react-icons/go';

interface RepoData {
  stargazers_count: number;
  forks: number;
  open_issues_count: number;
  description: string;
  pushed_at: string;
}

const Footer = () => {
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${githubUsername}/modern-portfolio`)
      .then((response) => response.json())
      .then((data: RepoData) => setRepoData(data))
      .catch((error) => console.error('GitHub API error:', error));
  }, []);

  return (
    <footer className="text-zinc-400 text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm">
          Made by <a href="https://parsher.xyz" className="text-violet-400 hover:text-violet-500">Parsher</a></p>
      </div>
    </footer>
  );
};

export default Footer;