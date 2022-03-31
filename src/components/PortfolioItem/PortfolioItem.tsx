/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PortfolioItem: React.FC<any> = ({ item }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        className='fixed bg-[rgba(0,0,0,0.8)] will-change-[opacity] top-0 bottom-0 left-[50%] translate-x-[-50%] w-[100%] z-20'
      >
        <Link href='/' scroll={false}>
          <a className='absolute inset-0' />
        </Link>
      </motion.div>
      <div className=' fixed top-0 left-0 right-0 block w-full h-full pointer-events-none overflow-hidden py-[40px] z-30 md:px-0 px-8'>
        <motion.div
          className='mx-auto relative pointer-events-auto rounded-[20px] bg-[#1c1c1e] overflow-hidden w-full h-auto max-w-[700px]'
          layoutId={`card-container-${item.id}`}
        >
          <motion.div
            className='absolute top-0 left-0 w-[100vw] h-full'
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
            className='absolute w-full h-full p-[15px] backdrop-brightness-50'
            layoutId={`title-container-${item.id}`}
          >
            <span className='text-white uppercase'>{item.category}</span>
            <h2 className='text-white'>{item.title}</h2>
          </motion.div>
          <motion.div
            className='max-w-[700px] w-[90vw] md:p-[460px_35px_35px_35px] p-[260px_35px_35px_35px] backdrop-brightness-100'
            animate
          >
            <p className='text-white'>{item.title}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default PortfolioItem;
