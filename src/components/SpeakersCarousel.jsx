import React, { useState, useEffect, useRef } from 'react';
import '../styles/speakers.css';
import speakerData from '../data/speakers.json';
import { speakerImages } from '../assets/images/speakers/index.js';

const SpeakersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  // Configuración responsive para diferentes tamaños de pantalla
  const visibleSlides = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const totalSlides = speakerData.length;

  // Determinar cuántos slides mostrar según el ancho de la pantalla
  const getVisibleSlidesCount = () => {
    if (window.innerWidth < 768) {
      return visibleSlides.mobile;
    } else if (window.innerWidth < 992) {
      return visibleSlides.tablet;
    } else {
      return visibleSlides.desktop;
    }
  };

  const [slidesToShow, setSlidesToShow] = useState(getVisibleSlidesCount());
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Precargar todas las imágenes al montar el componente con prioridad alta
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = speakerData.map((speaker) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.fetchPriority = 'high';
          img.src = speakerImages[speaker.image];
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error precargando imágenes:', error);
        setImagesLoaded(true); // Continuar aunque haya errores
      }
    };

    preloadImages();
  }, []);

  // Actualizar slidesToShow cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getVisibleSlidesCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay con pausa al interactuar - velocidad optimizada
  useEffect(() => {
    let interval;
    
    if (autoplay && !isAnimating) {
      interval = setInterval(() => {
        moveToNextSlide();
      }, 3000); // Cambio cada 3 segundos para mejor experiencia visual
    }
    
    return () => clearInterval(interval);
  }, [activeIndex, autoplay, isAnimating]);

  // Pausar autoplay al interactuar con el carrusel
  const pauseAutoplay = () => {
    setAutoplay(false);
    // Reanudar después de un tiempo de inactividad
    setTimeout(() => setAutoplay(true), 8000);
  };

  // Funciones de navegación mejoradas - transición más rápida
  const moveToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Loop al llegar al final
      return nextIndex >= totalSlides - slidesToShow + 1 ? 0 : nextIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const moveToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      // Loop al llegar al inicio
      return nextIndex < 0 ? totalSlides - slidesToShow : nextIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    
    pauseAutoplay();
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Gestión mejorada de eventos táctiles
  const handleTouchStart = (e) => {
    pauseAutoplay();
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 50) { // Umbral para swipes
      moveToNextSlide();
      setTouchPosition(null);
    }

    if (direction < -50) {
      moveToPrevSlide();
      setTouchPosition(null);
    }
  };

  // Añadir manejo de eventos de mouse para pausar autoplay al hover
  const handleMouseEnter = () => {
    pauseAutoplay();
  };

  // Renderizar speakers con diseño mejorado
  const renderSpeakers = () => {
    return (
      <div 
        className="speakers-track" 
        style={{ 
          transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)`,
          transition: isAnimating ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          willChange: 'transform'
        }}
      >
        {speakerData.map((speaker) => (
          <div 
            className="speaker-card" 
            key={speaker.id}
            onMouseEnter={handleMouseEnter}
          >
            <a 
              href={speaker.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="speaker-image-container"
              aria-label={`Ver perfil de LinkedIn de ${speaker.name}`}
            >
              <div className="speaker-image">
                <img 
                  src={speakerImages[speaker.image]} 
                  alt={speaker.name}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>
            </a>
            
            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p className="speaker-role">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="speakers-carousel-container">
      <h2 className="speakers-heading">Speakers</h2>
      <p className="speakers-description">Conoce a los Speakers que nos acompañarán en esta segunda edición.</p>
      
      <div className="speakers-carousel-wrapper" ref={carouselRef}>
        <button 
          className="carousel-control prev" 
          onClick={() => {
            pauseAutoplay();
            moveToPrevSlide();
          }} 
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
        </button>
        
        <div 
          className="speakers-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseEnter={handleMouseEnter}
        >
          {renderSpeakers()}
        </div>
        
        <button 
          className="carousel-control next" 
          onClick={() => {
            pauseAutoplay();
            moveToNextSlide();
          }} 
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SpeakersCarousel;
