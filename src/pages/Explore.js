// src/pages/Explore.js
import React, { useEffect, useState } from 'react';
import { fetchDIYProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';

function Explore() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const data = await fetchDIYProjects();
            setProjects(data);
        }
        loadProjects();
    }, []);

    return (
        <div className="container">
            <h1>Explore DIY Projects</h1>
            <div className="project-list">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Explore;
