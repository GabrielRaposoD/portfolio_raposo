import { PortfolioCard } from 'components/PortfolioCard';
import { SectionTitle } from 'components';

interface PortfolioProps {
  title: string;
  portfolioItems: any[];
}

const Portfolio: React.FC<PortfolioProps> = ({ title, portfolioItems }) => {
  return (
    <section className='bg-gray w-full py-[100px] px-8 xl:px-0' id='portfolio'>
      <div className=' container flex flex-col items-center justify-center mx-auto'>
        <SectionTitle title={title} />
        <ul className='justify-evenly gap-y-16 flex flex-row flex-wrap'>
          {portfolioItems.map((item, i) => (
            <li
              className='w-[120px] max-w-[432px] lg:h-[420px] md:h-[407px] h-[225px] relative md:flex-[0_0_40%] flex-[0_0_100%]'
              key={item.id + i}
            >
              <PortfolioCard key={item.id + i} item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
