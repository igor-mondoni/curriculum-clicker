import React from 'react';
import { resumeData } from '../../data/data';

function Skills() {
  return (
    <section>
      <h2>Habilidades</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
        {resumeData.skills.map((skill, index) => (
          <li key={index} style={{ margin: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#6828fc', borderRadius: '5px' }}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Skills;