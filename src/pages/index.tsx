import { LocalesKeys } from 'typings/global';
import { SECTIONS } from 'utils/constants';
import { useRouter } from 'next/router';

export default function Home() {
  const { locale } = useRouter();

  return (
    <div className='flex flex-col min-h-screen text-white'>
      {SECTIONS.Components.sort((a, b) =>
        a.position > b.position ? 1 : -1
      ).map((SECTION, i) => (
        <SECTION.Component
          {...(SECTION.props[locale as LocalesKeys] as any)}
          key={i}
        />
      ))}
    </div>
  );
}
