import { GithubRepositoriesData } from '@/types';
import { Colors } from '@/utils/colors';
import { githubUsername } from '@/utils/variables';
import Link from 'next/link';
import { BiGitRepoForked } from 'react-icons/bi';
import { GoRepo } from 'react-icons/go';
import { FaRegStar } from 'react-icons/fa';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';

// Define Colors type with index signature
type ColorType = {
  [key: string]: {
    color: string;
    url: string;
  };
};

// Type assertion for Colors
const TypedColors = Colors as unknown as ColorType;

interface RepositoriesProps {
  github: GithubRepositoriesData | null;
}

export default function Repositories({ github }: RepositoriesProps) {
  const [hoveredRepo, setHoveredRepo] = useState<any>(null);

  // Helper function to get color safely with type checking
  const getLanguageColor = (language?: string) => {
    if (!language || !TypedColors[language]) {
      return 'gray';
    }
    return TypedColors[language].color;
  };

  return (
    <div className="container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12">
      <div className="space-y-2 my-8">
        <h3 className="font-semibold text-3xl text-zinc-200 text-center" id="repositories">
          Repositories
        </h3>
        <p className="text-zinc-400 text-center">My Github Open Source Projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {github ? (
          github
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .map((data, key) => (
              <div
                className="group relative bg-gradient-to-r from-zinc-900/80 to-zinc-900/60 hover:from-white/5 hover:to-zinc-900/80 border border-zinc-800/50 hover:border-white/30 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                key={key}
                onMouseEnter={() => setHoveredRepo(data)}
                onMouseLeave={() => setHoveredRepo(null)}
              >
                <Link href={`https://github.com/${githubUsername}/${data.name}`} target='_blank' className="block">
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <GoRepo className="text-white w-5 h-5" />
                        <h1 className="font-semibold text-zinc-100 group-hover:text-white transition-colors duration-300">
                          {data.name}
                        </h1>
                      </div>
                      <div className="text-xs px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-400">
                        {formatDistanceToNow(parseISO(data.updated_at), { addSuffix: true })}
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 mt-3 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
                      {data.description}
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      {data.language && (
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: getLanguageColor(data.language),
                            }}
                          />
                          <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                            {data.language}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <FaRegStar className="text-yellow-400/70 w-3.5 h-3.5" />
                        <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                          {data.stargazers_count}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BiGitRepoForked className="text-zinc-400 w-3.5 h-3.5" />
                        <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                          {data.forks}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
        ) : null}
      </div>
    </div>
  );
}