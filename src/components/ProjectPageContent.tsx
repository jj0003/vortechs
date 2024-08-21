import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

interface Project {
  title: string;
  description: string;
  copyright: string;
  slug: string;
  url: string;
  images: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

interface Props {
  loading: boolean;
  project: Project | null;
  exploreProjects: Project[];
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const ProjectPageContent: React.FC<Props> = ({ loading, project, exploreProjects }) => {
  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
      <hr className="mt-20 border-t border-white" />

      {/* Hero */}
      <motion.div className="flex lg:flex-row flex-col mt-5 gap-10 w-full" variants={fadeInVariants}>
        <h1 className="text-white lg:text-4xl md:text-2xl lg:mr-96 text-2xl uppercase satoshi-regular">
          {project.title}
        </h1>
        <h6 className="flex flex-col text-white">
          {project.description}
          <p className="text-xs mt-4">
            {project.copyright}
          </p>        
          <Link href={project.url} target="_blank" className="btn btn-tertiary mt-4 self-start">
            visit live site ↗
          </Link>
        </h6>
      </motion.div>

      {/* Slider */}
      <motion.div className="lg:hidden" variants={fadeInVariants}>
        <Swiper
          slidesPerView={1.1}
          spaceBetween={10}
          loop={true}
          modules={[Pagination]}
          className="mySwiper hover:cursor-grab mt-40"
        >
          {project.images.data.map((image, index) => (
            <SwiperSlide key={index}>
              <img alt="" className="rounded-md" src={`http://localhost:1337${image.attributes.url}`} width={500} height={100} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div className="lg:block hidden" variants={fadeInVariants}>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={10}
          loop={true}
          modules={[Pagination]}
          className="mySwiper hover:cursor-grab mt-40"
        >
          {project.images.data.map((image, index) => (
            <SwiperSlide key={index}>
              <Image alt="" className="rounded-md" src={`http://localhost:1337${image.attributes.url}`} width={1000} height={100}></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* More to Explore */}
      <motion.div className="bg-black rounded-2xl p-5 mt-20 lg:mx-20 mx-5 mb-20" variants={fadeInVariants}>
        <h1 className="my-10 satoshi-regular text-white text-center uppercase">More to explore</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-3">
          {exploreProjects.map((item, index) => (
            <motion.div 
              key={index} 
              className="lg:h-96 h-48 flex flex-col justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * index, duration: 0.8, ease: 'easeOut' }}}
            >
              <Link href={`/work/${item.slug}`} className="relative group h-96 block rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:blur-sm"
                  style={{ backgroundImage: `url(http://localhost:1337${item.images.data[0]?.attributes.url})` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-3 py-1 uppercase text-black text-xs rounded-full bg-white">
                    Explore
                  </p>
                </div>
              </Link>
              <h5 className="mt-2 text-white font-light text-sm">
                {item.title}
              </h5>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPageContent;
