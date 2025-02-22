import Image from 'next/image';

interface ActivityCardProps {
  imageUrl: string;
  name: string;
  details: string;
  state: string;
  spotify?: boolean;
}

export default function ActivityCard({ imageUrl, name, details, state, spotify }: ActivityCardProps) {
  return (
    <div className="bg-zinc-800/50 rounded-full p-3 flex items-center gap-3">
      <div className="relative flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="rounded-lg"
          draggable={false}
        />
        {spotify && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-zinc-900 flex items-center justify-center ring-2 ring-zinc-900">
            <Image
              src="/spotify.png"
              alt="Spotify"
              width={12}
              height={12}
              className="rounded-full"
              draggable={false}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="text-sm font-medium text-zinc-300">
          {spotify ? 'Listening to Spotify' : name}
        </div>
        <div className="text-xs text-zinc-400">
          {spotify ? name : state}
        </div>
        {(state || details) && (
          <div className="text-xs text-zinc-500">
            {spotify ? details : details}
          </div>
        )}
      </div>
    </div>
  );
}