"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  attributes: {
    slug: string;
    title: string;
    images?: {
      data?: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://healing-hope-db164f5808.strapiapp.com/api/projects?populate=*')
      .then((response) => {
        console.log(response.data.data); // Check if image data is coming correctly
        setProjects(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  const renderSkeletons = () => (
    <>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="relative bg-gray-300 rounded-lg h-64 animate-pulse"></div>
      ))}
    </>
  );

  return (
    <div>
      {/* Hero */}
      <motion.div 
        className="flex lg:flex-row flex-col mt-5 gap-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      >
        <h6 className="flex">
          Vortechs is your go-to web development studio, specializing in affordable and stunningly fast web applications. We pride ourselves on creating fresh, dynamic experiences that captivate and engage users. At Vortechs, we are always exploring new technologies to ensure our solutions are both cutting-edge and effective.
        </h6>
        <h6 className="flex">
          Our guiding principle is simple: to deliver work that fills both us and our clients with immense pride. We achieve this by blending artistry with performance, dedicating meticulous attention to each project, and carefully choosing the clients we collaborate with.
        </h6>
        <h6 className="flex">
          Partnering with Vortechs is like having a dedicated designer and developer by your side, ready to support you on your digital journey. We are approachable and friendly, yet highly organized and proactive – the kind of partner you would love to tell your friends about.
        </h6>
      </motion.div>

      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      >
        <Link href={"/about"} className="btn-link">
          (vortechs values)
        </Link>
        <h1 className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular">
          We bring <i>stunning online experiences</i> at the reach of small businesses.
        </h1>
      </motion.div>

      {/* WE BUILD STUNNING ONLINE EXPERIENCES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {loading ? (
          renderSkeletons() // Display skeletons while loading
        ) : (
          projects.map((item) => {
            const imageUrl = item.attributes.images?.data?.[0]?.attributes.url;
            const fullImageUrl = imageUrl?.startsWith('http')
              ? imageUrl // Use the full URL if already provided
              : `https://healing-hope-db164f5808.strapiapp.com${imageUrl}`; // Otherwise, prepend the base URL

            return (
              <motion.div
                key={item.id}
                className="relative bg-cover bg-center rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
                style={{ backgroundImage: `url(${fullImageUrl})` }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }}
              >
                <div className="p-4">
                  <motion.h5
                    className="text-white font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }}
                  >
                    {item.attributes.title}
                  </motion.h5>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 } }}
                  >
                    <Link href={`/work/${item.attributes.slug}`} className="btn btn-secondary mt-2 inline-block">
                      View Project
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {loading ? (
        <div className="h-4 bg-gray-300 rounded mt-10 animate-pulse"></div> // Skeleton for final paragraph
      ) : (
        <motion.p
          className="text-gray-400 mt-2 text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.6 } }}
        >
          * These are some of the projects our team members have worked on in the past. Vortechs does not take credit for the design or development of these projects. All the rights belong to the respective owners.
        </motion.p>
      )}

      {/* What We Do */}
      <motion.div 
        className="bg-[#0049FF] rounded-md p-5 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      >
        <div className="flex flex-col items-center">
          <p className="inline-block text-white px-2 py-1 rounded-full uppercase text-black border border-white tracking-wider text-xs">
            In a Nutshell
          </p>  
          <h1 className="satoshi-black text-white">What We Do</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
          <div className="p-4 rounded-md bg-white">
              <h5 className="font-semibold">
                design
              </h5>
              <p>
                visual identity<br></br>
                brand guidelines<br></br>
                information architecture<br></br>
                user experience<br></br>
                web/mobile apps
              </p>
          </div>
          <div className="p-4 rounded-md bg-white">
              <h5 className="font-semibold">
                development
              </h5>
              <p>
                custom landing pages<br></br>
                CMS integrations<br></br>
                analytics<br></br>
                A/B testing<br></br>
                web development
              </p>
          </div>
        </div>
      </motion.div>

      {/* Apply for a Slot */}
      <motion.h1 
        className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
      >
        APPLY FOR A SLOT TO BECOME ONE OF FIVE NEW CLIENTS WE SELECT EVERY YEAR
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-4 mb-20">
        {[...Array(5)].map((_, index) => (
          <motion.div 
            key={index} 
            className={`relative p-4 rounded-md border-2 border-gray-400 ${
              index === 0 || index === 1 ? 'bg-gray-400' : 'bg-[#0049FF] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'
            } lg:h-96 md:h-72 sm:h-40 h-40`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index, duration: 0.8, ease: 'easeOut' } }}
          >
            <h5 className="font-medium uppercase text-3xl text-white">
              slot<br></br>{index + 1}
            </h5>
            {index === 0 || index === 1 ? (
              <span className="absolute bottom-4 left-4 btn btn-disabled cursor-not-allowed">
                Unavailable
              </span>
            ) : (
              <Link href={"https://cal.com/vortechs/30min"} className="absolute bottom-4 left-4 btn btn-apply hover:bg-black">
                🔥available
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
