import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import '../styles/sponsors.css';
import '../styles/speakers.css';
import { conferenceImage, recuerdo1, recuerdo2, recuerdo3, recuerdo4, recuerdo5 } from '../assets/images';
import callForSpeakersImg from '../assets/images/backgrounds/Call for Speakers.png';
import utpImage from '../assets/images/backgrounds/UTP Centro.jpg';
import './../../src/assets/images/backgrounds/hexagon-pattern.svg';
import './../../src/assets/images/backgrounds/hero-bg.png';
import dscUtpLogo from '../assets/images/logos/DSCUTP.svg';
import codeOnImage from '../assets/images/backgrounds/CodeOn2024.jpg';
import SpeakersCarousel from '../components/SpeakersCarousel';

// Pequeño carrusel/reel de imágenes con cambio automático
const EventImageReel = ({ images, interval = 1250 }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className="reel-container" role="region" aria-label="Galería de imágenes del evento">
      {images.map((src, idx) => (
        <img
          key={`${idx}-${src}`}
          src={src}
          alt="CodeON Perú"
          className={`reel-slide ${idx === active ? 'active' : ''}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  );
};

// Componente de transición suave para las imágenes de recuerdos
const RecuerdosTransition = ({ images, interval = 3000 }) => {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className="recuerdos-container" role="region" aria-label="Galería de recuerdos del evento">
      {images.map((src, idx) => (
        <img
          key={`recuerdo-${idx}`}
          src={src}
          alt={`Recuerdo ${idx + 1} de CodeON`}
          className={`recuerdo-slide ${idx === active ? 'active' : ''}`}
          loading={idx === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className="recuerdos-indicators">
        {images.map((_, idx) => (
          <span 
            key={`indicator-${idx}`} 
            className={`recuerdos-indicator ${idx === active ? 'active' : ''}`}
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const reelImages = [
    codeOnImage
  ];
  
  const recuerdosImages = [
    recuerdo1,
    recuerdo2,
    recuerdo3,
    recuerdo4,
    recuerdo5
  ];
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="event-info">
                <div className="event-date">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5M16 2V5M3.5 9H20.5M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  25 de Octubre, 2025
                </div>
                <div className="event-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.418 17.165 20 13.12 20 8.5C20 4.35786 16.6421 1 12.5 1C8.35786 1 5 4.35786 5 8.5C5 13.12 8.582 17.165 13 21H12Z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12.5" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  Lima, Perú
                </div>
              </div>
              
              <h1 className="hero-title">
                CodeOn<br />
                <span className="hero-title-accent">Edition 2th</span>
              </h1>
              
              <p className="hero-description">
                Vive la experiencia definitiva en CodeOn 2025, donde convergen talento, innovación y las últimas tendencias tecnológicas. Un día que transformará tu carrera y <br />
                expandirá tu visión del futuro tech.
              </p>
              
              <div className="hero-buttons">
                <a href="https://sessionize.com/codeon-2025/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Envía tu charla</a>
                <a href="https://strong-prince-450.notion.site/24bdd0196ce28009b763f5d91bf3d943?pvs=105" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Quiero ser patrocinador</a>
                {/* Botón solo visible en mobile */}
                <a href="https://lu.ma/dt831ksd" className="btn btn-primary btn-mobile-entrada" target="_blank" rel="noopener noreferrer">Inscribirse al evento</a>
              </div>
              
              <div className="organizer-info">
                <span>Organizado por:</span>
                <div className="organizer-logo">
                  <img src={dscUtpLogo} alt="Developer Student Clubs Universidad Tecnológica del Perú" />
                </div>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-image-container">
                <EventImageReel images={reelImages} interval={2000} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Silver y Bronze eliminadas según solicitud */}

      <section className="event-description">
        <div className="event-description-container">
          <h2 className="description-title">¿Qué es CodeOn?</h2>
          <p className="description-subtitle">
            CodeOn es la conferencia anual que reúne a desarrolladores, entusiastas y expertos para impulsar la innovación tecnológica en el Perú.
          </p>

          <div className="description-content">
            <div className="feature-cards-container">
              <div className="feature-card">
                <div className="feature-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#ff5252" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-text-container">
                  <h3 className="feature-title">Innovación Sin Límites</h3>
                  <p className="feature-description">
                    Explora IA, Data, Cloud y más, de la mano de expertos que marcan tendencia en el mundo tech.
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-text-container">
                  <h3 className="feature-title">Comunidad Que Inspira</h3>
                  <p className="feature-description">
                    Conéctate con entusiastas y profesionales. Comparte ideas, colabora y crea conexiones que trascienden.
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 21.5C9.5 21.5 5.5 18.5 5.5 13.5C5.5 8.5 9.5 2.5 12 2.5C14.5 2.5 18.5 8.5 18.5 13.5C18.5 18.5 14.5 21.5 14.5 21.5H9.5Z" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="#ff5252" strokeWidth="1.5"/>
                    <path d="M7.5 18.5L5.5 20.5" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 18.5L18.5 20.5" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21.5V22.5" stroke="#ff5252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-text-container">
                  <h3 className="feature-title">Un Salto En Tu Futuro</h3>
                  <p className="feature-description">
                    Accede a charlas y talleres que impulsarán tus habilidades y te prepararán para tu desarrollo profesional.
                  </p>
                </div>
              </div>
            </div>

            <div className="event-image-wrapper">
              <RecuerdosTransition images={recuerdosImages} interval={3000} />
            </div>
          </div>
        </div>
      </section>

      <section className="call-for-speakers">
        <div className="call-for-speakers-container">
          <div className="speakers-content">
            <div className="speakers-card">
              <h2>Comparte tu conocimiento</h2>
              <p className="speakers-description">
                ¿Tienes experiencia en tecnología? ¿Has creado algo innovador? ¿Quieres inspirar y enseñar a una comunidad apasionada? Esta es tu oportunidad.
              </p>
              <div className="speakers-options">
                <div className="speaker-option">
                  <svg viewBox="0 0 24 24" fill="none" className="option-icon">
                    <path d="M8 13H16M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div className="option-content">
                    <h3 className="option-title">Charlas de 40 min</h3>
                    <p className="option-description">presentaciones técnicas, casos de éxito, tendencias o lecciones aprendidas.</p>
                  </div>
                </div>
                
                <div className="speaker-option">
                  <svg viewBox="0 0 24 24" fill="none" className="option-icon">
                    <path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H9M15 4V3C15 2.44772 14.5523 2 14 2H10C9.44772 2 9 2.44772 9 3V4M15 4H9M12 12V16M12 12L10 14M12 12L14 14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div className="option-content">
                    <h3 className="option-title">Talleres de 40 min</h3>
                    <p className="option-description">sesiones prácticas para enseñar habilidades, herramientas o metodologías paso a paso.</p>
                  </div>
                </div>
                
                <div className="speaker-option">
                  <svg viewBox="0 0 24 24" fill="none" className="option-icon">
                    <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div className="option-content">
                    <h3 className="option-title">Panel de IA de 50 min</h3>
                    <p className="option-description">Conversaciones entre expertos sobre los retos, avances y futuro de la Inteligencia Artificial.</p>
                  </div>
                </div>
              </div>

              <div className="speakers-cta">
                <p className="deadline">
                  Abierto hasta el 27 de septiembre
                </p>
                <a href="https://sessionize.com/codeon-2025/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Enviar propuesta</a>
              </div>
            </div>
          </div>
          <div className="speakers-image">
            <img src={callForSpeakersImg} alt="Call for Speakers" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </section>
      
      {/* Sección de Speakers */}
      {/*<section className="speakers-section">
        <div className="speakers-container">
          <SpeakersCarousel />
        </div>
      </section>*/}
      <section className="sponsors-section">
        <div className="sponsors-container">
          {/*
          <h2 className="sponsors-title">Nuestros Sponsors</h2>
          <div className="sponsor-categories">
            <div className="sponsor-category-label">
              <div className="category-badge platinum-badge">
                <span>Platinum</span>
              </div>
            </div>
            <div className="sponsor-category">
              <div className="category-content">
                <div className="sponsor-logos platinum-logos">
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Codeabien" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="GDG Callao" className="sponsor-logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sponsor-category-label">
              <div className="category-badge golden-badge">
                <span>Golden</span>
              </div>
            </div>
            <div className="sponsor-category">
              <div className="category-content">
                <div className="sponsor-logos golden-logos">
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Golden Sponsor 1" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Golden Sponsor 2" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Golden Sponsor 3" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Golden Sponsor 4" className="sponsor-logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="sponsor-category-label">
              <div className="category-badge partner-badge">
                <span>Comunidades Aliadas</span>
              </div>
            </div>
            <div className="sponsor-category">
              <div className="category-content">
                <div className="sponsor-logos partner-logos">
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Community Partner 1" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Community Partner 2" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Community Partner 3" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Community Partner 4" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Community Partner 5" className="sponsor-logo" />
                  </div>
                  <div className="sponsor-logo-wrapper">
                    <img src={utpImage} alt="Community Partner 6" className="sponsor-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
          <div className="be-sponsor-card">
            <h3 className="be-sponsor-title">¿Quieres ser patrocinador?</h3>
            <p className="be-sponsor-text">
              Únete a las empresas líderes que apoyan el crecimiento de la comunidad tecnológica en Perú. 
              Conecta con más de 500 desarrolladores apasionados y posiciona tu marca en el evento más importante del año.
            </p>
            <a href="https://strong-prince-450.notion.site/24bdd0196ce28009b763f5d91bf3d943?pvs=105" className="sponsor-btn" target="_blank" rel="noopener noreferrer">
              Información de patrocinio
            </a>
          </div>
        </div>
      </section>
      {/* Fin de sección de patrocinadores */}

      <section className="venue">
        <div className="venue-container">
          <h2 className="venue-title">VENUE</h2>
          
          <div className="venue-content">
            <div className="venue-left">
              <a 
                href="https://www.google.com/maps/place/UTP+-+Torre+Arequipa/@-12.0660852,-77.0370961,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c8ea52a218f9:0x4931f570fd313227!8m2!3d-12.0660905!4d-77.0345212!16s%2Fg%2F11c1z0w9x8"
                target="_blank"
                rel="noopener noreferrer"
                className="venue-image-link"
              >
                <div className="venue-image-container">
                  <img src={utpImage} alt="Universidad Tecnológica del Perú - Torre Arequipa" className="venue-image" />
                  <div className="venue-info-overlay">
                    <h3 className="venue-name">Universidad Tecnológica del Perú - Torre Arequipa</h3>
                    <div className="venue-address-line">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                      Av. Arequipa 265, Lima 15046
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="venue-right">
              <div className="venue-info-card">
                <h3 className="venue-subtitle">Un espacio diseñado para la innovación</h3>
                
                <div className="venue-features">
                  <div className="venue-feature-item">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4>Capacidad para 600 personas</h4>
                      <p>Auditorio principal con capacidad para todos los asistentes</p>
                    </div>
                  </div>
                  
                  <div className="venue-feature-item">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4>Networking</h4>
                      <p>Espacios cómodos para coffee breaks y networking</p>
                    </div>
                  </div>
                  
                  <div className="venue-feature-item">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m14 16l1.32 1.76C14.32 19.68 12.31 21 10 21c-3.31 0-6-2.69-6-6c0-2.43 1.46-4.5 3.55-5.45l.21 2.17C6.71 12.44 6 13.63 6 15c0 2.21 1.79 4 4 4c1.86 0 3.41-1.28 3.86-3zm5.55.11l-1.25.62L15.5 13h-4.59l-.2-2H14V9h-3.5l-.3-3c1.01-.12 1.8-.96 1.8-2a2 2 0 1 0-4 0v.1L9.1 15h5.4l3.2 4.27l2.75-1.37z"/>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4>Totalmente accesible</h4>
                      <p>Instalaciones adaptadas para personas con discapacidad</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
