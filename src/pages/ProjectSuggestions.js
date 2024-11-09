// src/pages/ProjectSuggestions.js
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import './ProjectSuggestions.css';

function ProjectSuggestions() {
    const [suggestedProjects, setSuggestedProjects] = useState([]);

    useEffect(() => {
        // Dummy data, replace with actual API call that matches materials with projects
        setSuggestedProjects([
            { id: 1, title: 'DIY Book Shelf', shortDescription: 'Create a beautiful bookshelf' },
            { id: 2, title: 'DIY Coffee Table', shortDescription: 'Build a stylish coffee table' }
        ]);
    }, []);

    return (
        <div className="container">
            <h1>Project Suggestions</h1>
            <div className="project-list">
                {suggestedProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectSuggestions;
