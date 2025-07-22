import React from 'react';
import { resumeData } from '../../data/data';

function Experience() {
  return (
    <section>
      <h2>Experiência</h2>
      {resumeData.experience.map((job, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <h3>{job.role} - {job.company}</h3>
          <p style={{ fontStyle: 'italic' }}>{job.period}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
}
export default Experience;