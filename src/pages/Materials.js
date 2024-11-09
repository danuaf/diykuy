// src/pages/Materials.js
import React, { useState } from 'react';
import './Materials.css';

function Materials() {
    const [materials, setMaterials] = useState([]);
    const [input, setInput] = useState("");

    const addMaterial = () => {
        setMaterials([...materials, input]);
        setInput("");
    };

    return (
        <div className="container">
            <h1>Your Materials</h1>
            <div className="materials-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a material"
                />
                <button onClick={addMaterial}>Add</button>
            </div>
            <ul>
                {materials.map((material, index) => (
                    <li key={index}>{material}</li>
                ))}
            </ul>
        </div>
    );
}

export default Materials;
