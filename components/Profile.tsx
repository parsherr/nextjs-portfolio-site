import { DiscordUserData } from '@/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ActivityCard from './ActivityCard';

interface ProfileDetailsProps {
  discord: DiscordUserData | null;
  onMailClick: () => void;
}

export default function ProfileDetails({ discord, onMailClick }: ProfileDetailsProps) {
  const activities = discord?.data?.activities || [];
  const spotify = activities.find(activity => activity.name === 'Spotify');
  const filteredActivities = activities.filter(activity => activity.type !== 4);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (discord) {
      setAvatarUrl(
        discord.data.discord_user?.avatar
          ? `https://cdn.discordapp.com/avatars/${discord.data.discord_user.id}/${discord.data.discord_user.avatar}.webp`
          : 'https://avatars.githubusercontent.com/u/143193225?v=4'
      );
    }
  }, [discord]);

  return (
    <div className="container mx-auto w-11/12 sm:w-9/12 md:w-7/12 mt-4" id='profile'>
      <div className="p-6">
        {/* Profile Section */}
        <div className="mt-8 flex rounded-full items-center bg-zinc-800/50 p-4">
          {/* Avatar Section */}
          <div className="relative flex-shrink-0">
            {discord ? (
              <div className={`relative w-16 h-16 rounded-full ring-2 ${
                discord.data.discord_status === 'dnd' ? 'ring-[#ed4245]' :
                  discord.data.discord_status === 'idle' ? 'ring-[#fee75c]' :
                    discord.data.discord_status === 'online' ? 'ring-[#57f287]' :
                      'ring-[#2c2f33]'
              }`}>
                <Image
                  className="rounded-full hover:opacity-75 transition duration-300"
                  src={avatarUrl}
                  alt="avatar"
                  width={64}
                  height={64}
                  quality={100}
                  draggable={false}
                />
                {/* Status Indicator */}
                <div className="absolute bottom-0 -right-1 w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center ring-2 ring-zinc-900">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    discord.data.discord_status === 'dnd' ? 'bg-[#ed4245]' :
                      discord.data.discord_status === 'idle' ? 'bg-[#fee75c]' :
                        discord.data.discord_status === 'online' ? 'bg-[#57f287]' :
                          'bg-[#2c2f33]'
                  }`} />
                </div>
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-zinc-800 animate-pulse" />
            )}
          </div>

          {/* Info Section */}
          <div className="flex-1 ml-4">
            <div className="flex flex-col">
              {/* Name and Badge */}
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold text-zinc-100">
                  Rasperon
                </h1>

                {/* Discord Status Badge */}
                <span className={`hidden md:flex px-2 py-0.5 text-xs font-medium rounded-full border items-center gap-1.5 ${
                  discord?.data?.discord_status === 'dnd' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                    discord?.data?.discord_status === 'idle' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                      discord?.data?.discord_status === 'online' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                        'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                }`}>
                  {discord?.data?.discord_status === 'online' ? 'online' :
                    discord?.data?.discord_status === 'idle' ? 'idle' :
                      discord?.data?.discord_status === 'dnd' ? 'do not disturb' :
                        'offline'}
                </span>
              </div>

              {/* Username */}
              <div className="hidden md:block text-sm text-zinc-400 font-medium">
                Security Penetration Tester ・ Backend Developer
              </div>

              {/* Status */}
              <div className="mt-1 text-sm text-zinc-300 italic flex items-center gap-2">
                {discord?.data?.activities?.find(activity => activity.type === 4)?.emoji && (
                  <Image
                    src={`https://cdn.discordapp.com/emojis/${discord.data.activities.find(activity => activity.type === 4)?.emoji?.id}.png`}
                    alt="status emoji"
                    width={16}
                    height={16}
                    className="rounded-full"
                    draggable={false}
                  />
                )}
                {discord?.data?.activities?.find(activity => activity.type === 4)?.state || 'No custom status'}
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        {filteredActivities.length > 0 && (
          <div className="mt-6 space-y-2">
            {spotify && (
              <ActivityCard
                imageUrl={
                  spotify.assets?.large_image
                    ? `https://i.scdn.co/image/${spotify.assets.large_image.replace('spotify:', '')}`
                    : '/spotify-default.png'
                }
                name={spotify.details || ''}
                details={spotify.state || ''}
                state={spotify.assets?.large_text || 'Listening to Spotify'}
                spotify
              />
            )}
            {filteredActivities
              .filter(activity => activity.name !== 'Spotify')
              .map((activity, index) => (
                <ActivityCard
                  key={index}
                  imageUrl={
                    activity.assets && activity.assets.large_image
                      ? `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
                      : 'https://cdn.discordapp.com/attachments/1037116702403127377/1037116702403127378/default.png'
                  }
                  name={activity.name}
                  details={activity.details || ''}
                  state={activity.state || ''}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}