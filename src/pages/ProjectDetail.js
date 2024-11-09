// src/pages/ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectDetails } from '../services/api';

function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        async function loadProject() {
            const data = await fetchProjectDetails(id);
            setProject(data);
        }
        loadProject();
    }, [id]);

    return (
        <div className="container">
            {project ? (
                <>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <h3>Materials:</h3>
                    <ul>
                        {project.materials.map((material, index) => (
                            <li key={index}>{material}</li>
                        ))}
                    </ul>
                    <h3>Steps:</h3>
                    <ul>
                        {project.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProjectDetail;
