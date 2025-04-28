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
      image: "img/windows1.png",
      content: (
        <p>I was born in the year when the <a href="https://en.wikipedia.org/wiki/Live_Aid" target="_blank" rel="noopener noreferrer">Live Aid concerts</a> took place, <a href="https://en.wikipedia.org/wiki/Windows_1.0" target="_blank" rel="noopener noreferrer">Microsoft's Windows 1.0</a> was released and <a href="https://en.wikipedia.org/wiki/Super_Mario_Bros." target="_blank" rel="noopener noreferrer">Super Mario Bros.</a> on the NES was available in shops. I chose these three events from my birth year for a reason. The reason being that, apart from growing up using Windows, I also love retro video games and music.</p>
      )
    },
    {
      year: 1990,
      title: "Early Childhood",
      image: "img/mario-nes.jpg",
      content: (
        <p>In the early 90s, I began developing my interest for video games. My sister and I shared a <a href="https://sv.wikipedia.org/wiki/Nintendo_Entertainment_System" target="_blank">Nintendo 8-bit</a> console between us, taking turns in playing Ice Climber, Zelda II, Volleyball and Super Mario bros. I found myself wondering about how video games work "under the hood".</p>
      )
    },
    {
      year: 1998,
      title: "First Website",
      image: "img/angelfire.jpeg",
      content: (
        <p>I've experienced the web since the time of dial-up modems. I was 13 years old when I built my first HTML-only website about myself, complete with animated GIFs and marquee texts, hosted at Angelfire.com. Right around this time (circa 1998 - 2000) I also quickly grew an interest in computers and the technology behind them. On the hardware side for example, I learnt how graphics cards and RAM sticks worked, and practiced swapping them out for newer components on our shared family computer.</p>
      )
    },
    {
      year: 2000,
      title: "Digital Media Beginnings",
      image: "img/moviemaker.png",
      content: (
        <p>Eventually I saved up for a video capture card, which allowed me to put our recorded family holiday videos onto our computer, 
          and that's when my interest in multimedia and graphics really took off. I frequently visited websites like Newgrounds (flash animation) and DeviantArt (photos and digital art)'
          for inspiration.</p>
      )
    },
    {
      year: 2002,
      title: "Media Studies",
      image: "img/moviemaker.png",
      content: (
        <p>This year I started my media studies at Sundsvalls gymnasium. 
          Three exciting years of learning how to use Adobe Photoshop, Adobe Illustrator, Macromedia Director, InDesign, Pro Tools and more.
          I grew a fond interest for photography and sound work during this period. At home I used Adobe Audition to record myself playing guitar and singing.</p>
      )
    },
    {
      year: 2005,
      title: "University studies",
      image: "img/umea.png",
      content: (
        <p>After college I decided that I wanted to become a teacher, so I applied and got accepted into the teacher programme at <a href="https://umu.se" target="_blank">Umeå university</a> in Sweden. My two subjects were Music and English. </p>
      )
    },
    {
      year: 2010,
      title: "Teacher position",
      image: "img/musicteacher.jpg",
      content: (
        <p>I started my first real job as a music teacher at a school outside of Sundsvall, Sweden.</p>
      )
    },
    {
      year: 2020,
      title: "Student assistant",
      image: "img/nti.png",
      content: (
        <p>This was the year when working remotely became a reality for many people around the world. I had a position at <a href="https://ntigymnasiet.se/sundsvall/" target="_blank">NTI Gymnasiet</a> in Sundsvall, working as a student assistant. 
          I came across many new and interesting subjects and technologies, such as JavaScript, PHP and Electromechanics.</p>
      )
    },
    {
      year: 2023,
      title: "Frontend studies",
      image: "img/folkuniversitetet.jpg",
      content: (
        <p>This year I began my two year path at <a href="https://www.folkuniversitetet.se/kontakt/goteborg/" target="_blank">Folkuniversitetet</a> in Göteborg, Sweden to become a Frontend developer.</p>
      )
    },
    {
      year: 2025,
      title: "Future Goals",
      image: "img/developer.png",
      content: (
        <p>Looking forward to graduate in June, I hope to succeed in finding a place to work where I can make use of my skills in web development, 
          contributing to meaningful projects, and perhaps exploring new areas like mobile app development or AI integration.</p>
      )
    }
  ];
  
  const scrollToEvent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  const handleYearClick = (year) => {
    setActiveYear(year);
    scrollToEvent(`event-${year}`);
  };
  
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
                  <div className="vertical-event-flex">
                    <div className="vertical-event-text">
                      {item.content}
                    </div>
                    {item.image && (
                      <div className="vertical-event-image">
                        <img src={item.image} alt={`${item.title} illustration`} />
                      </div>
                    )}
                  </div>
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