"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // useParams is a better alternative for getting dynamic parameters in the app directory
import axios from 'axios';
import ProjectPageContent from '@/components/ProjectPageContent';

// Define interfaces for image and item
interface Image {
  attributes: {
    url: string;
  };
}

interface Project {
  attributes: {
    images?: {
      data: Image[];
    };
  };
}

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [exploreProjects, setExploreProjects] = useState<Project[]>([]);
  
  const { slug } = useParams();

  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

  useEffect(() => {
    if (!slug) return;

    // Fetch the specific project based on slug
    axios.get(`${API_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`)
      .then((response) => {
        const projectData = response.data.data[0]?.attributes;
        
        // Handle image URLs here if necessary
        if (projectData?.images?.data) {
          projectData.images.data = projectData.images.data.map((image: Image) => ({
            ...image,
            attributes: {
              ...image.attributes,
              url: image.attributes.url.startsWith('http') 
                ? image.attributes.url 
                : `${API_URL}${image.attributes.url}`
            }
          }));
        }

        setProject(projectData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project:', error);
        setLoading(false);
      });

    // Fetch all projects for "More to Explore"
    axios.get(`${API_URL}/api/projects?populate=*`)
      .then((response) => {
        const allProjects = response.data.data.map((item: Project) => {
          const projectAttributes = item.attributes;
          
          // Handle image URLs for exploreProjects if necessary
          if (projectAttributes?.images?.data) {
            projectAttributes.images.data = projectAttributes.images.data.map((image: Image) => ({
              ...image,
              attributes: {
                ...image.attributes,
                url: image.attributes.url.startsWith('http') 
                  ? image.attributes.url 
                  : `${API_URL}${image.attributes.url}`
              }
            }));
          }

          return projectAttributes;
        });

        const shuffledProjects = allProjects.sort(() => 0.5 - Math.random());
        setExploreProjects(shuffledProjects.slice(0, 3));
      })
      .catch((error) => {
        console.error('Error fetching explore projects:', error);
      });
  }, [slug]);

  return (
    <ProjectPageContent 
      loading={loading} 
      project={project} 
      exploreProjects={exploreProjects} 
    />
  );
}
