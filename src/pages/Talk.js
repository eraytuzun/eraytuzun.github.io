import React, { useRef, useEffect, useState } from 'react';
import './pages.css';
import talks from '../data/talks';

const Talk = () => {
    const [isVisible, setIsVisible] = useState({});
    const [animationStarted, setAnimationStarted] = useState({});
    const talkRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(prevState => ({
                        ...prevState,
                        [entry.target.dataset.year]: true
                    }));
                    observer.unobserve(entry.target);
                }
            });
        });

        if (talkRef.current) {
            talkRef.current.querySelectorAll('.year-section').forEach((yearSection) => {
                observer.observe(yearSection);
            });
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const animateTimeouts = {};
        Object.keys(isVisible).forEach(year => {
            if (isVisible[year] && !animationStarted[year]) {
                animateTimeouts[year] = setTimeout(() => {
                    setAnimationStarted(prevState => ({
                        ...prevState,
                        [year]: true
                    }));
                }, 100); // Delay for animation to start
            }
        });

        return () => {
            Object.keys(animateTimeouts).forEach(year => {
                clearTimeout(animateTimeouts[year]);
            });
        };
    }, [isVisible, animationStarted]);

    const groupedTalks = talks.reduce((result, talk) => {
        const year = talk.year;
        if (!result[year]) {
            result[year] = [];
        }
        result[year].push(talk);
        return result;
    }, {});

    let talkList = Object.keys(groupedTalks).map(year => ({
        year: parseInt(year, 10),
        entries: groupedTalks[year],
    }));

    talkList = talkList.reverse();

    return (
        <div ref={talkRef} style={{padding: "0px 30px"}}>
            <h3>Talks</h3>
            {isVisible && (
                <div className="timeline-container">
                    {talkList.map(yearGroup => (
                        <div key={yearGroup.year} className="year-section" data-year={yearGroup.year}>
                            <div className="year-marker">
                                <div className="circle">
                                    <p className="year-label">{yearGroup.year}</p>
                                </div>
                            </div>
                            <div className={`talks ${animationStarted[yearGroup.year] ? 'animate' : ''}`}>
                                {yearGroup.entries.map(talk => (
                                    <div key={talk.title} className="talk">
                                        <div className="talk-details">
                                            <div className="talk-title">
                                                <b>{talk.title}</b>, <i>{talk.event}</i>
                                            </div>
                                            <p style={{margin: '0px'}}>Location: {talk.location}</p>
                                            <p style={{marginTop: '0px'}}>Date: {talk.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="timeline-line"></div>
                </div>
            )}
        </div>
    );
};

export default Talk;
