export default function Schema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          'name': 'Parsher',
          'url': 'https://parsher.xyz',
          'sameAs': [
            'https://github.com/parsherr',
            'https://www.youtube.com/@parsher_',
            'https://www.deviantart.com/itzparsher',
            'https://discord.com/users/1108799838876868738',
          ],
          'jobTitle': 'Full-Stack Web Developer',
          'worksFor': {
            '@type': 'Organization',
            'name': 'SetScript',
          },
          'description': 'Full-Stack Web Developer ve İçerik Üreticisi. Modern web teknolojileri ve kullanıcı deneyimi odaklı çözümler üretiyorum.',
          'knowsAbout': [
            'TypeScript',
            'React',
            'Next.js',
            'Node.js',
            'Web Development',
            'UI/UX Design',
          ],
        }),
      }}
    />
  );
}