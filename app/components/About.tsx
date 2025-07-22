import React from 'react';
import { resumeData } from '../../data/data';

function About() {
  return (
    <section>
      <h2
        style={{
          borderBottom: "2px solid var(--color-primary)",
          paddingBottom: "0.5rem",
          display: "inline-block",
        }}
      >
        Sobre Mim
      </h2>
      <p style={{ lineHeight: 1.6 }}>{resumeData.about}</p>
    </section>
  );
}
export default About;