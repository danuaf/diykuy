// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <div className="card">
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <Link to={`/detail/${project.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    );
}

export default ProjectCard;
