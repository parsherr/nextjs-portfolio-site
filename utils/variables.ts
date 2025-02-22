import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsGoogle, BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { FaFigma, FaGithub, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiBehance, SiBootstrap, SiBun, SiBuymeacoffee, SiCss3, SiDeviantart, SiDiscord, SiExpress, SiFigma, SiFirebase, SiFramer, SiFramework, SiGatsby, SiGit, SiGlitch, SiInstagram, SiJavascript, SiLua, SiMongodb, SiNextdotjs, SiPatreon, SiPnpm, SiReact, SiReplit, SiRoblox, SiTailwindcss, SiTwitter, SiTypescript, SiUbuntu, SiWindowsterminal, SiX } from 'react-icons/si';
import { TbBrandBootstrap, TbBrandCSharp, TbBrandDiscord, TbBrandHtml5, TbBrandNextjs, TbBrandNodejs } from 'react-icons/tb';

interface ProjectDetails {
  github?: string;
  demo?: string;
  technologies?: string[];
  features?: string[];
  [key: string]: string | string[] | undefined;
}

interface Project {
  name: string;
  description: string;
  link: string;
  iconURL: string;
  details?: ProjectDetails;
}

/**
 * Interface for social media account data structure
 */
interface SocialMediaAccount {
  name: string;
  username: string;
  link: string;
  iconURL: IconType;
}


export const projects: Project[] = [
  {
    name: 'Schogolar',
    description: 'Schogolar is a platform designed to help students and researchers easily access and understand academic content. By leveraging advanced AI models and structured approaches, Schogolar aims to make academic research simpler, faster, and more accessible to everyone. .',
    link: 'https://schogolar.vercel.app/',
    iconURL: '/img/schogolar.png',
  },
  {
    name: 'Knock-go',
    description: 'Knock Subdomain Scan but written in golang.',
    link: 'https://github.com/rasperon/knock-go',
    iconURL: '/img/knock-go.png',
  },
  {
    name: 'Zuical',
    description: 'Zuical is a next gen text based RPG platform',
    link: 'https://www.zuical.fun/',
    iconURL: '/img/zuical.png',
  },
  {
    name: 'RedHood AI Pin',
    description: 'AI powered hacking device + bot',
    link: 'https://github.com/rasperon/RedHood-AI-Pin',
    iconURL: '/img/red-hood.png',
  },
];

export const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
export const discordId = process.env.NEXT_PUBLIC_DISCORD_ID;

export const socialMediaAccounts: SocialMediaAccount[] = [
  {
    name: 'Github',
    username: '@rasperon',
    link: 'https://github.com/' + process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    iconURL: FaGithub,
  },
  {
    name: 'Discord',
    username: '@rasperon',
    link: 'https://discord.com/users/1108799838876868738',
    iconURL: FaDiscord,
  },
  {
    name: 'Youtube',
    username: '@rasperon',
    link: 'https://www.youtube.com/@rasperon',
    iconURL: BsYoutube,
  },
  {
    name: 'X',
    username: '@rasperonc',
    link: 'https://x.com/rasperonc',
    iconURL: SiX,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'HTML5',
    iconURL: TbBrandHtml5,
  },
  {
    name: 'CSS',
    iconURL: SiCss3,
  },
];

export const openWeatherApiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';