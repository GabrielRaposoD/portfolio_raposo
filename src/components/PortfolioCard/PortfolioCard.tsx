/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem } from 'typings/global';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <>
      <div className='relative block w-full h-full pointer-events-none'>
        <motion.div
          className='relative pointer-events-auto rounded-[20px] bg-[#1c1c1e] overflow-hidden w-full h-full'
          layoutId={`card-container-${item.id}`}
        >
          <motion.div
            className='absolute top-0 left-0 w-[100vw] h-full backdrop-brightness-50'
            layoutId={`card-image-container-${item.id}`}
          >
            <Image
              width={850}
              height={450}
              src={`/images/${item.id}.jpg`}
              alt={item.title}
            />
          </motion.div>
          <motion.div
            className='absolute p-[15px] w-full h-full backdrop-brightness-50'
            layoutId={`title-container-${item.id}`}
          >
            <span className='uppercase'>{item.category}</span>
            <h2>{item.title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link href={{ query: { itemId: item.id } }} scroll={false}>
        <a className='absolute inset-0' aria-label={item.title} />
      </Link>
    </>
  );
};

export default PortfolioCard;
