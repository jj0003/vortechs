"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

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

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/projects?populate=*`)
      .then((response) => {
        setProjects(response.data.data);
        setLoading(false); // Data has been fetched, stop loading
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  // Helper function to get the full image URL
  const getFullImageUrl = (url: string) => {
    return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
  };

  const renderSkeletons = () => (
    <>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>
      <div className="relative bg-gray-300 rounded-lg h-32 animate-pulse"></div>

    </>
  );

  return (
    <div>
      <h1 className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular">
        TAKE A LOOK AT OUR WORK
      </h1>
      <div className="grid gap-5 mt-10">
        {loading ? (
          // Display skeletons while loading
          renderSkeletons()
        ) : (
          projects.length > 0 ? (
            projects.map((item) => {
              const imageUrl = item.attributes.images?.data?.[0]?.attributes.url;
              const fullImageUrl = imageUrl ? getFullImageUrl(imageUrl) : '/default-image.jpg';

              return (
                <Link href={`/work/${item.attributes.slug}`} key={item.id} className="block">
                  <div
                    className="relative bg-cover bg-center rounded-lg h-32 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none"
                    style={{ backgroundImage: `url(${fullImageUrl})` }}
                  >
                    <div className="p-4">
                      <h5 className="text-white font-semibold">
                        {item.attributes.title}
                      </h5>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>No projects found.</p>
          )
        )}
      </div>
      <p className="text-gray-400 mt-2 mb-10 text-xs">
        * These are some of the projects our team members have worked on in the past. Vortechs does not take credit for the design or development of these projects. All the rights belong to the respective owners.
      </p>
    </div>
  );
};

export default ProjectsPage;
