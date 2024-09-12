"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import axios from 'axios';
import ProjectPageContent from '@/components/ProjectPageContent';

// Define the unified Work interface
interface Image {
  attributes: {
    url: string;
  };
}

interface Work {
  title: string;
  description: string;
  copyright: string;
  slug: string;
  url: string;
  images: {
    data: Image[];
  };
}

export default function ProjectPage() {
  const [project, setProject] = useState<Work | null>(null); // Using Work directly
  const [loading, setLoading] = useState(true);
  const [exploreProjects, setExploreProjects] = useState<Work[]>([]); // Using Work directly
  
  const { slug } = useParams(); // Get slug from params
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  useEffect(() => {
    if (!slug) return;
  
    // Fetch the specific project based on slug
    axios.get(`${API_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`)
      .then((response) => {
        const projectData = response.data.data[0]?.attributes;
  
        const projectWithUrl: Work = {
          title: projectData.title || "",
          description: projectData.description || "",
          copyright: projectData.copyright || "",
          slug: projectData.slug || "",
          url: `${API_URL}/work/${slug}`,
          images: projectData.images?.data.length ? projectData.images : { data: [] }
        };
  
        setProject(projectWithUrl);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project:', error);
        setLoading(false);
      });
  
    // Fetch all projects for "More to Explore"
    axios.get(`${API_URL}/api/projects?populate=*`)
      .then((response) => {
        const allProjects = response.data.data.map((item: { attributes: any }) => {
          const workAttributes = item.attributes;
  
          const workWithUrl: Work = {
            title: workAttributes.title || "",
            description: workAttributes.description || "",
            copyright: workAttributes.copyright || "",
            slug: workAttributes.slug || "",
            url: `${API_URL}/work/${workAttributes.slug}`,
            images: workAttributes.images?.data.length ? workAttributes.images : { data: [] }
          };
  
          return workWithUrl;
        });
  
        const shuffledProjects = allProjects.sort(() => 0.5 - Math.random());
        setExploreProjects(shuffledProjects.slice(0, 3));
      })
      .catch((error) => {
        console.error('Error fetching explore projects:', error);
      });
  }, [slug, API_URL]); // Include API_URL as a dependency
  

  return (
    <ProjectPageContent 
      loading={loading} 
      project={project} 
      exploreProjects={exploreProjects} 
    />
  );
}
