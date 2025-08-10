import React, { useState, useEffect, useRef } from 'react';
import '../styles/speakers.css';

// Datos de oradores con información más detallada
const speakerData = [
  { 
    id: 1, 
    name: 'Ana García', 
    role: 'ML Engineer @ Google', 
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    linkedin: 'https://linkedin.com/in/anagarciaml',
    bio: 'Especialista en Machine Learning con enfoque en modelos de visión por computadora',
    company: 'Google',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
  },
  { 
    id: 2, 
    name: 'Carlos Mendoza', 
    role: 'CTO @ Microsoft', 
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    linkedin: 'https://linkedin.com/in/carlosmendoza',
    bio: 'Líder tecnológico con más de 15 años de experiencia en desarrollo de software empresarial',
    company: 'Microsoft',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png'
  },
  { 
    id: 3, 
    name: 'María Rodríguez', 
    role: 'Full Stack Dev @ Amazon', 
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    linkedin: 'https://linkedin.com/in/mariarodriguez',
    bio: 'Desarrolladora full stack especializada en arquitecturas serverless y microservicios',
    company: 'Amazon',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png'
  },
  { 
    id: 4, 
    name: 'Juan Pérez', 
    role: 'Cloud Architect @ IBM', 
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    linkedin: 'https://linkedin.com/in/juanperez',
    bio: 'Arquitecto de soluciones cloud con experiencia en entornos híbridos y multicloud',
    company: 'IBM',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png'
  },
  { 
    id: 5, 
    name: 'Lucía Sánchez', 
    role: 'AI Researcher @ DeepMind', 
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    linkedin: 'https://linkedin.com/in/luciasanchez',
    bio: 'Investigadora en inteligencia artificial enfocada en aprendizaje por refuerzo',
    company: 'DeepMind',
    companyLogo: 'https://storage.googleapis.com/deepmind-live-cms/images/DeepMind_Logo_Black.width-600_RiPj1le.png'
  },
  { 
    id: 6, 
    name: 'Pedro López', 
    role: 'Data Scientist @ Meta', 
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    linkedin: 'https://linkedin.com/in/pedrolopez',
    bio: 'Científico de datos especializado en algoritmos de recomendación y análisis predictivo',
    company: 'Meta',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png'
  },
  { 
    id: 7, 
    name: 'Valentina Díaz', 
    role: 'Frontend Dev @ Apple', 
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    linkedin: 'https://linkedin.com/in/valentinadiaz',
    bio: 'Desarrolladora frontend con experiencia en interfaces de usuario avanzadas y animaciones',
    company: 'Apple',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png'
  },
  { 
    id: 8, 
    name: 'Miguel Torres', 
    role: 'Security Expert @ Oracle', 
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    linkedin: 'https://linkedin.com/in/migueltorres',
    bio: 'Experto en seguridad informática con enfoque en protección de bases de datos y aplicaciones',
    company: 'Oracle',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/512px-Oracle_logo.svg.png'
  },
  { 
    id: 9, 
    name: 'Sofía Martínez', 
    role: 'DevOps Engineer @ Netflix', 
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    linkedin: 'https://linkedin.com/in/sofiamartinez',
    bio: 'Ingeniera DevOps especializada en automatización de infraestructura y CI/CD',
    company: 'Netflix',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png'
  },
  { 
    id: 10, 
    name: 'Alejandro Ruiz', 
    role: 'Blockchain Dev @ Ethereum', 
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    linkedin: 'https://linkedin.com/in/alejandroruiz',
    bio: 'Desarrollador blockchain especializado en contratos inteligentes y DeFi',
    company: 'Ethereum',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/512px-Ethereum-icon-purple.svg.png'
  },
  { 
    id: 11, 
    name: 'Camila Flores', 
    role: 'UX Designer @ Adobe', 
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    linkedin: 'https://linkedin.com/in/camilaflores',
    bio: 'Diseñadora UX enfocada en investigación de usuarios y experiencias inclusivas',
    company: 'Adobe',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/512px-Adobe_Corporate_Logo.png'
  },
  { 
    id: 12, 
    name: 'Javier Vargas', 
    role: 'Backend Dev @ Twitter', 
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    linkedin: 'https://linkedin.com/in/javiervargas',
    bio: 'Desarrollador backend especializado en APIs escalables y procesamiento en tiempo real',
    company: 'Twitter',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'
  },
  { 
    id: 13, 
    name: 'Laura González', 
    role: 'Mobile Dev @ Uber', 
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    linkedin: 'https://linkedin.com/in/lauragonzalez',
    bio: 'Desarrolladora móvil especializada en apps nativas para iOS y Android',
    company: 'Uber',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/512px-Uber_logo_2018.svg.png'
  },
  { 
    id: 14, 
    name: 'Roberto Silva', 
    role: 'Game Dev @ Unity', 
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    linkedin: 'https://linkedin.com/in/robertosilva',
    bio: 'Desarrollador de videojuegos con experiencia en realidad virtual y aumentada',
    company: 'Unity',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/512px-Unity_Technologies_logo.svg.png'
  },
  { 
    id: 15, 
    name: 'Carolina Herrera', 
    role: 'Data Engineer @ Spotify', 
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    linkedin: 'https://linkedin.com/in/carolinaherrera',
    bio: 'Ingeniera de datos especializada en procesamiento de big data y streaming',
    company: 'Spotify',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/512px-Spotify_logo_without_text.svg.png'
  },
  { 
    id: 16, 
    name: 'Daniel Castro', 
    role: 'IoT Specialist @ Intel', 
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    linkedin: 'https://linkedin.com/in/danielcastro',
    bio: 'Especialista en Internet de las Cosas y sistemas embebidos',
    company: 'Intel',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/512px-Intel_logo_%282006-2020%29.svg.png'
  },
  { 
    id: 17, 
    name: 'Patricia Vega', 
    role: 'Product Manager @ Salesforce', 
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    linkedin: 'https://linkedin.com/in/patriciavega',
    bio: 'Gerente de producto con enfoque en soluciones empresariales cloud',
    company: 'Salesforce',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png'
  },
  { 
    id: 18, 
    name: 'Fernando Morales', 
    role: 'AR/VR Dev @ Oculus', 
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    linkedin: 'https://linkedin.com/in/fernandomorales',
    bio: 'Desarrollador de experiencias inmersivas en realidad virtual y aumentada',
    company: 'Oculus',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Meta_Quest_logo.svg/512px-Meta_Quest_logo.svg.png'
  },
  { 
    id: 19, 
    name: 'Isabel Torres', 
    role: 'Quality Engineer @ LinkedIn', 
    image: 'https://randomuser.me/api/portraits/women/19.jpg',
    linkedin: 'https://linkedin.com/in/isabeltorres',
    bio: 'Ingeniera de calidad especializada en pruebas automatizadas y CI/CD',
    company: 'LinkedIn',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/512px-LinkedIn_Logo.svg.png'
  },
  { 
    id: 20, 
    name: 'Ricardo Medina', 
    role: 'Security Researcher @ Mozilla', 
    image: 'https://randomuser.me/api/portraits/men/20.jpg',
    linkedin: 'https://linkedin.com/in/ricardomedina',
    bio: 'Investigador de seguridad enfocado en navegadores web y protocolos',
    company: 'Mozilla',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mozilla_logo.svg/512px-Mozilla_logo.svg.png'
  },
  { 
    id: 21, 
    name: 'Elena Ramírez', 
    role: 'ML Ops @ NVIDIA', 
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
    linkedin: 'https://linkedin.com/in/elenaramirez',
    bio: 'Especialista en operaciones de machine learning y computación acelerada',
    company: 'NVIDIA',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/512px-Nvidia_logo.svg.png'
  },
  { 
    id: 22, 
    name: 'Andrés Moreno', 
    role: 'Quantum Computing @ IBM', 
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    linkedin: 'https://linkedin.com/in/andresmoreno',
    bio: 'Investigador en computación cuántica y algoritmos cuánticos',
    company: 'IBM',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/512px-IBM_logo.svg.png'
  },
  { 
    id: 23, 
    name: 'Marina López', 
    role: 'UI Designer @ Figma', 
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    linkedin: 'https://linkedin.com/in/marinalopez',
    bio: 'Diseñadora de interfaces especializada en sistemas de diseño',
    company: 'Figma',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/512px-Figma-logo.svg.png'
  },
  { 
    id: 24, 
    name: 'Gabriel Ríos', 
    role: 'Systems Architect @ AWS', 
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
    linkedin: 'https://linkedin.com/in/gabrielrios',
    bio: 'Arquitecto de sistemas especializado en soluciones cloud nativas',
    company: 'AWS',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png'
  },
  { 
    id: 25, 
    name: 'Diana Ortiz', 
    role: 'Blockchain Research @ ConsenSys', 
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
    linkedin: 'https://linkedin.com/in/dianaortiz',
    bio: 'Investigadora blockchain especializada en protocolos de consenso',
    company: 'ConsenSys',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ConsenSys_logo_black.svg/512px-ConsenSys_logo_black.svg.png'
  }
];

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

  // Actualizar slidesToShow cuando cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getVisibleSlidesCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay con pausa al interactuar
  useEffect(() => {
    let interval;
    
    if (autoplay && !isAnimating) {
      interval = setInterval(() => {
        moveToNextSlide();
      }, 1000); // Cambio cada 1 segundo
    }
    
    return () => clearInterval(interval);
  }, [activeIndex, autoplay, isAnimating]);

  // Pausar autoplay al interactuar con el carrusel
  const pauseAutoplay = () => {
    setAutoplay(false);
    // Reanudar después de un tiempo de inactividad
    setTimeout(() => setAutoplay(true), 8000);
  };

  // Funciones de navegación mejoradas
  const moveToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      // Loop al llegar al final
      return nextIndex >= totalSlides - slidesToShow + 1 ? 0 : nextIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const moveToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      // Loop al llegar al inicio
      return nextIndex < 0 ? totalSlides - slidesToShow : nextIndex;
    });
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    
    pauseAutoplay();
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
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
          transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none'
        }}
      >
        {speakerData.map((speaker) => (
          <div 
            className="speaker-card" 
            key={speaker.id}
            onMouseEnter={handleMouseEnter}
          >
            <div className="speaker-image-container">
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} loading="lazy" />
              </div>
              <div className="speaker-social">
                <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon" aria-label="LinkedIn Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.47V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <p className="speaker-role">{speaker.role}</p>
              
              {/* Se eliminaron los logos de empresas */}
              
              <p className="speaker-bio">{speaker.bio}</p>
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
