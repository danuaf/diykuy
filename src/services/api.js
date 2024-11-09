// src/services/api.js
export async function fetchDIYProjects() {
    const response = await fetch('http://localhost:5000/projects');
    return await response.json();
}

export async function fetchProjectDetails(id) {
    const response = await fetch(`http://localhost:5000/projects/${id}`);
    return await response.json();
}
