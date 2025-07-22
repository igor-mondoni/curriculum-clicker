import React from 'react';
import { resumeData } from '../../data/data';


function Projects() {
  return (
    <section>
      <h2>Projetos</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p style={{ fontStyle: 'italic' }}>Tecnologias: {project.proggrammingLanguage}</p>
        </div>
      ))}
    </section>
  );
}
export default Projects;
