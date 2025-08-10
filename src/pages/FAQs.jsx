import React, { useState } from 'react';
import '../styles/FAQs.css';
import flechaCerrada from '../assets/images/hero/flechas1.png';
import flechaAbierta from '../assets/images/hero/flechas2.png';

const FAQs = () => {
  const faqs = [
    {
      question: "¿Necesito llevar mi entrada impresa?",
      answer: "No es necesario llevar la entrada impresa, te recomendamos bajar el app de luma y podrás mostrar tu entrada mediante el QR de la app."
    },
    {
      question: "¿Necesito llevar mi DNI para acceder al evento?",
      answer: "Sí, es necesario presentar tu DNI para verificar tu identidad al momento del ingreso."
    },
    {
      question: "¿Puedo salir y volver a entrar al evento?",
      answer: "Sí, los asistentes pueden salir y volver a entrar al evento en cualquier momento."
    },
    {
      question: "¿Hasta qué hora se extenderá el evento?",
      answer: "El evento se extenderá hasta las 6:00 PM. Te recomendamos revisar la agenda para no perderte ninguna actividad."
    },
    {
      question: "¿Es necesario llevar una laptop al evento?",
      answer: "No es obligatorio, pero si deseas traer laptop o algún otro dispositivo por favor no te olvides de llevar su adaptador ya que no brindaremos adaptadores."
    },
    {
      question: "¿Cuál es el horario máximo de ingreso al evento?",
      answer: "Los asistentes pueden ingresar en cualquier momento durante el evento si llegan más tarde de las 9:00 a.m., sin embargo se recomienda estar temprano para que puedas aprovechar al máximo las sesiones."
    },
    {
      question: "¿Habrá estacionamiento disponible en el lugar del evento?",
      answer: "No, no habrá estacionamiento disponible en esta ocasión. Le recomendamos tomar las precauciones del caso."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="faqs-container">
      <h1>FAQs</h1>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <div className="faq-icon">
                <img 
                  src={flechaCerrada}
                  alt="Abrir pregunta"
                  className="faq-arrow"
                  style={{ opacity: activeIndex === index ? 0 : 1 }}
                />
                <img 
                  src={flechaAbierta}
                  alt="Cerrar pregunta"
                  className="faq-arrow"
                  style={{ opacity: activeIndex === index ? 1 : 0 }}
                />
              </div>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
