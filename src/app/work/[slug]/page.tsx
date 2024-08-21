"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // useParams is a better alternative for getting dynamic parameters in the app directory
import axios from 'axios';
import ProjectPageContent from '@/components/ProjectPageContent';

export default function ProjectPage() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [exploreProjects, setExploreProjects] = useState([]);
  
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;

    // Fetch the specific project based on slug
    axios.get(`http://localhost:1337/api/projects?filters[slug][$eq]=${slug}&populate=*`)
      .then((response) => {
        const projectData = response.data.data[0]?.attributes;
        setProject(projectData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching project:', error);
        setLoading(false);
      });

    // Fetch all projects for "More to Explore"
    axios.get('http://localhost:1337/api/projects?populate=*')
      .then((response) => {
        const allProjects = response.data.data.map((item: { attributes: any; }) => item.attributes);
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
