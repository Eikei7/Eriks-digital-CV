import React, { useState, useRef, useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [activeYear, setActiveYear] = useState(1985);
  const timelineRef = useRef(null);
  
  // Data för tidslinje och händelser
  const timelineData = [
    {
      year: 1985,
      title: "Born in 1985",
      image: "",
      content: (
        <>
          <p>I was born in the year when the <a href="https://en.wikipedia.org/wiki/Live_Aid" target="_blank" rel="noopener noreferrer">Live Aid concerts</a> took place, <a href="https://en.wikipedia.org/wiki/Windows_1.0" target="_blank" rel="noopener noreferrer">Microsoft's Windows 1.0</a> was released and <a href="https://en.wikipedia.org/wiki/Super_Mario_Bros." target="_blank" rel="noopener noreferrer">Super Mario Bros.</a> on the NES was available in shops.</p>
          <p>I chose these three events from my birth year for a reason. The reason being that, apart from growing up using Windows, I also love retro video games and music.</p>
        </>
      )
    },
    {
      year: 1990,
      title: "Early Childhood",
      image: "/img/mario-nes.jpg",
      content: (
        <p>In the early 90s, I began developing my interest for video games. My sister and I shared a Nintendo 8-bit console between us, taking turns in playing Ice Climber, Zelda II, Volleyball and Super Mario bros. I found myself wondering
          about how video games work "under the hood". </p>
      )
    },
    {
      year: 1998,
      title: "First Website",
      content: (
        <>
          <p>I've experienced the web since the time of dial-up modems. I was 13 years old when I built my first HTML-only website about myself, complete with animated GIFs and marquee texts, hosted at Angelfire.com (remember those guys?).</p>
          <p>Right around this time (circa 1998 - 2000) I also quickly grew an interest in computers and the technology behind them. On the hardware side for example, I learnt how graphics cards and RAM sticks worked, and practiced swapping them out for newer components on our shared family computer.</p>
        </>
      )
    },
    {
      year: 2000,
      title: "Digital Media Beginnings",
      content: (
        <p>Eventually I saved up for a video capture card, which allowed me to put our recorded family holiday videos onto the computer, and that's when my interest in multimedia and graphics began.</p>
      )
    },
    {
      year: 2005,
      title: "Early Career",
      content: (
        <p>Started working with computers professionally, gaining experience with various technologies and software systems.</p>
      )
    },
    {
      year: 2010,
      title: "Career Development",
      content: (
        <p>Developed my professional skills further, working on various projects and expanding my knowledge in technology and web development.</p>
      )
    },
    {
      year: 2015,
      title: "Professional Growth",
      content: (
        <p>By this time, I had accumulated significant experience in the tech industry, working with diverse teams and technologies.</p>
      )
    },
    {
      year: 2020,
      title: "Recent Years",
      content: (
        <p>Focused on frontend development, honing my skills in modern JavaScript frameworks and UI/UX design principles.</p>
      )
    },
    {
      year: 2023,
      title: "Present Day",
      content: (
        <>
          <p>Currently working as a frontend developer, continuously learning and adapting to new technologies and methodologies in the ever-evolving tech landscape.</p>
          <p>Music remains a significant part of my life. I could talk for days about The Beatles' divine albums or John Mayer's incredible guitar playing.</p>
        </>
      )
    },
    {
      year: 2025,
      title: "Future Goals",
      content: (
        <p>Looking forward to further developing my skills in web development, contributing to meaningful projects, and perhaps exploring new areas like mobile application development or AI integration.</p>
      )
    }
  ];
  
  // Funktion för att scrolla till ett event när man klickar på året
  const scrollToEvent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  // Funktion för att uppdatera aktivt år
  const handleYearClick = (year) => {
    setActiveYear(year);
    scrollToEvent(`event-${year}`);
  };
  
  // Sätt upp scroll-lyssnare för att uppdatera aktivt år baserat på scroll-position
  useEffect(() => {
    const handleScroll = () => {
      const events = timelineData.map(item => {
        const element = document.getElementById(`event-${item.year}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            year: item.year,
            distance: Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
          };
        }
        return { year: item.year, distance: Infinity };
      });
      
      // Sortera efter avstånd till mitten av skärmen
      events.sort((a, b) => a.distance - b.distance);
      
      if (events.length > 0 && events[0].year !== activeYear) {
        setActiveYear(events[0].year);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeYear]);

  return (
    <div className="aboutme-container">
      <h2 className="aboutme-title">A history of Erik</h2>
      
      <div className="vertical-timeline-container">
        <div className="vertical-years-container">
          <div className="vertical-years">
            {timelineData.map((item) => (
              <div 
                key={item.year} 
                className={`vertical-year ${item.year === activeYear ? 'active' : ''}`}
                onClick={() => handleYearClick(item.year)}
              >
                {item.year}
              </div>
            ))}
            <div className="vertical-timeline-line"></div>
          </div>
        </div>
        
        <div className="vertical-events-container">
          {timelineData.map((item) => (
            <div 
              id={`event-${item.year}`}
              key={item.year} 
              className={`vertical-event ${item.year === activeYear ? 'active' : ''}`}
            >
              <div className="vertical-event-marker"></div>
              <div className="vertical-event-content">
                <h3 className="vertical-event-title">
                  <span className="vertical-event-year">{item.year}</span>
                  {item.title}
                </h3>
                <div className="vertical-event-body">
                  {item.content}
                  <div>{item.image}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;