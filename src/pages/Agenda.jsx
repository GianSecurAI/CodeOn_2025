import React, { useState } from 'react';
import '../styles/Agenda.css';
import speakersData from '../data/speakers.json';
import { speakerImages } from '../assets/images/speakers/index.js';

const Agenda = () => {
  const [selectedSpace, setSelectedSpace] = useState('auditorio');

  // Eventos fijos
  const fixedEvents = {
    auditorio: [
      {
        id: 'registro',
        title: 'Registro y Apertura',
        schedule: '9:00 AM - 9:45 AM',
        space: 'Auditorio',
        type: 'fixed'
      },
      {
        id: 'sorteos1',
        title: 'Sorteos',
        schedule: '1:20 PM - 1:35 PM',
        space: 'Auditorio',
        type: 'fixed'
      },
      {
        id: 'cierre',
        title: 'Cierre y Sorteos',
        schedule: '5:15 PM - 5:20 PM',
        space: 'Auditorio',
        type: 'fixed'
      }
    ],
    coffeeBreak: {
      title: 'Coffee Break',
      schedule: '12:00 PM - 1:20 PM',
      type: 'break'
    }
  };

  // Filtrar speakers por espacio
  const getEventsBySpace = (space) => {
    const spaceMap = {
      'auditorio': 'Auditorio',
      'aula401': 'Aula 401',
      'aula414': 'Aula 414'
    };

    const speakers = speakersData
      .filter(speaker => speaker.space === spaceMap[space] && speaker.name !== '')
      .map(speaker => ({
        ...speaker,
        type: 'talk'
      }));

    // Agrupar panel de IA
    const panelSpeakers = speakers.filter(s => s.title === 'Panel de IA');
    const otherSpeakers = speakers.filter(s => s.title !== 'Panel de IA');
    
    // Crear evento agrupado para panel de IA si existe
    const groupedEvents = [...otherSpeakers];
    if (panelSpeakers.length > 0) {
      groupedEvents.push({
        id: 'panel-ia',
        title: 'Panel de IA',
        schedule: panelSpeakers[0].schedule,
        space: spaceMap[space],
        type: 'panel',
        panelists: panelSpeakers
      });
    }

    // Agregar eventos fijos si es auditorio
    if (space === 'auditorio') {
      return [...fixedEvents.auditorio, ...groupedEvents].sort((a, b) => {
        const timeA = convertToMinutes(a.schedule.split(' - ')[0]);
        const timeB = convertToMinutes(b.schedule.split(' - ')[0]);
        return timeA - timeB;
      });
    }

    return groupedEvents.sort((a, b) => {
      if (!a.schedule || !b.schedule) return 0;
      const timeA = convertToMinutes(a.schedule.split(' - ')[0]);
      const timeB = convertToMinutes(b.schedule.split(' - ')[0]);
      return timeA - timeB;
    });
  };

  // Convertir hora a minutos para ordenar
  const convertToMinutes = (time) => {
    if (!time) return 0;
    const [timePart, period] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);
    
    if (period === 'PM' && hours !== 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;
    
    return hours * 60 + minutes;
  };

  // Verificar si debe mostrar coffee break después de este evento
  const shouldShowCoffeeBreakAfter = (currentSchedule, nextSchedule) => {
    if (!currentSchedule || !nextSchedule) return false;
    
    const currentEndTime = convertToMinutes(currentSchedule.split(' - ')[1] || currentSchedule.split(' - ')[0]);
    const nextTime = convertToMinutes(nextSchedule.split(' - ')[0]);
    const coffeeStart = convertToMinutes('12:00 PM');
    const coffeeEnd = convertToMinutes('1:20 PM');
    
    return currentEndTime <= coffeeStart && nextTime >= coffeeEnd;
  };

  const events = getEventsBySpace(selectedSpace);

  return (
    <div className="agenda-page">
      <div className="agenda-container">
        <h1 className="agenda-title">Agenda CodeON 2025</h1>
        <p className="agenda-subtitle">Sábado 15 de Noviembre</p>

        {/* Selector de espacio */}
        <div className="space-selector">
          <button
            className={`space-button ${selectedSpace === 'auditorio' ? 'active' : ''}`}
            onClick={() => setSelectedSpace('auditorio')}
          >
            Auditorio
          </button>
          <button
            className={`space-button ${selectedSpace === 'aula401' ? 'active' : ''}`}
            onClick={() => setSelectedSpace('aula401')}
          >
            Salón 401
          </button>
          <button
            className={`space-button ${selectedSpace === 'aula414' ? 'active' : ''}`}
            onClick={() => setSelectedSpace('aula414')}
          >
            Salón 414
          </button>
        </div>

        {/* Mensaje para salones */}
        {(selectedSpace === 'aula401' || selectedSpace === 'aula414') && (
          <div className="floor-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12l10-10 10 10"/>
            </svg>
            <span>Tomar ascensor hasta el piso 4</span>
          </div>
        )}

        {/* Timeline de eventos */}
        <div className="timeline">
          {events.map((event, index) => {
            const nextEvent = events[index + 1];
            const showCoffeeBreak = shouldShowCoffeeBreakAfter(event.schedule, nextEvent?.schedule);

            return (
              <React.Fragment key={event.id || event.name + index}>
                <div className={`timeline-item ${event.type === 'fixed' ? 'fixed-event' : ''} ${event.type === 'talk' ? 'talk-event' : ''} ${event.type === 'panel' ? 'panel-event' : ''}`}>
                  <div className="timeline-content">
                    {event.type === 'panel' ? (
                      <div className={`event-card panel-card`}>
                        <div className="event-time-left">{event.schedule}</div>
                        <div className="panel-images">
                          {event.panelists.map((panelist, idx) => (
                            panelist.image && speakerImages[panelist.image] && (
                              <a
                                key={idx}
                                href={panelist.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="speaker-image-wrapper clickable"
                              >
                                <img 
                                  src={speakerImages[panelist.image]} 
                                  alt={panelist.name}
                                  loading="lazy"
                                />
                              </a>
                            )
                          ))}
                        </div>
                        <div className="event-info">
                          <div className="event-header">
                            <h3 className="event-title">{event.title}</h3>
                          </div>
                          <div className="panel-speakers">
                            {event.panelists.map((panelist, idx) => (
                              <div key={idx} className="panelist-info">
                                <span className="event-speaker">{panelist.name}</span>
                                <p className="event-role">{panelist.role}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : event.type === 'talk' ? (
                      <a 
                        href={event.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`event-card talk-card clickable-card`}
                      >
                        <div className="event-time-left">{event.schedule}</div>
                        {event.image && speakerImages[event.image] && (
                          <div className="speaker-image-wrapper">
                            <img 
                              src={speakerImages[event.image]} 
                              alt={event.name}
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="event-info">
                          <div className="event-header">
                            <h3 className="event-title">{event.title}</h3>
                            <span className="event-speaker">{event.name}</span>
                          </div>
                          <p className="event-role">{event.role}</p>
                        </div>
                      </a>
                    ) : (
                      <div className={`event-card fixed-card`}>
                        <div className="event-time-left">{event.schedule}</div>
                        <div className="event-info">
                          <h3 className="event-title">{event.title}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {showCoffeeBreak && (
                  <div className="timeline-item coffee-break">
                    <div className="timeline-content break-content">
                      <div className="event-card break-card">
                        <div className="event-time-left">{fixedEvents.coffeeBreak.schedule}</div>
                        <div className="event-info">
                          <h3 className="event-title">{fixedEvents.coffeeBreak.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
