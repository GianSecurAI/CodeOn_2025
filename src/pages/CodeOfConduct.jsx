import React from 'react';
import '../styles/CodeOfConduct.css';

const CodeOfConduct = () => {
  return (
    <div className="code-of-conduct">
      <div className="code-container">
        <header className="code-header">
          <h1 className="code-title">Código de Conducta</h1>
        </header>
        <div className="code-content">
          <section className="code-section">
            <p className="section-text">
              En Developer Student Clubs UTP, nos comprometemos a crear un ambiente seguro e inclusivo para el evento CodeOn 2025. Nuestro objetivo es que todos los participantes tengan una experiencia positiva, colaborativa y respetuosa.
            </p>
          </section>
          <section className="code-section">
            <h2 className="section-title">Lo que esperamos de ti</h2>
            <ul className="section-list">
              <li>Sé respetuoso y amable: Trata a todos los participantes con cortesía, sin importar su experiencia o identidad.</li>
              <li>Promueve un ambiente positivo: Fomenta la colaboración y el aprendizaje. </li>
              <li>Comunícate constructivamente: Expresa tus ideas de forma profesional y respeta las opiniones de los demás.</li>
            </ul>
          </section>
          <section className="code-section">
            <h2 className="section-title">Lo que no toleramos</h2>
            <ul className="section-list">
              <li>Acoso y discriminación: No se permite ninguna forma de intimidación, acoso o discriminación por género, etnia, religión, habilidad técnica, etc.</li>
              <li>Lenguaje ofensivo: Evita el discurso de odio, comentarios despectivos y cualquier contenido inapropiado.</li>
              <li>Interrupción: La interrupción intencional de las actividades del evento no serán tolerados.</li>
            </ul>
          </section>
          <section className="code-section">
            <h2 className="section-title">¿Cómo reportar un incidente?</h2>
            <p className="section-text">
              Si experimentas o presencias una violación de este código de conducta, contacta de inmediato a un organizador del evento o a un líder de DSC UTP. Puedes hacerlo en persona o a través de nuestros canales oficiales. Tu informe se manejará de forma confidencial y se tomarán las medidas necesarias.
            </p>
            <p className="section-text">
              Las consecuencias pueden incluir desde una advertencia hasta la expulsión del evento.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
