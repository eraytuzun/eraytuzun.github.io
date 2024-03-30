import React, { useRef, useEffect, useState } from 'react';
import './pages.css';
import publications from '../data/publications';
import PublicationSitesList from "../components/PublicationSitesList";

const Publication = () => {
    const [isVisible, setIsVisible] = useState({});
    const [animationStarted, setAnimationStarted] = useState({});
    const publicationRef = useRef(null);

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

        if (publicationRef.current) {
            publicationRef.current.querySelectorAll('.year-section').forEach((yearSection) => {
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

    const groupedPublications = publications.reduce((result, publication) => {
        const year = publication.year;
        if (!result[year]) {
            result[year] = [];
        }
        result[year].push(publication);
        return result;
    }, {});

    let publ = Object.keys(groupedPublications).map(year => ({
        year: parseInt(year, 10),
        entries: groupedPublications[year],
    }));

    publ = publ.reverse();

    return (
        <div ref={publicationRef} style={{padding: "0px 30px"}}>
            <h3>Publications</h3>
            <div style={{width: '70%', display: 'flex', margin: '2px auto'}}>
                <PublicationSitesList/>
            </div>
            <div className="timeline-container">
                {publ.map(yearGroup => (
                    <div key={yearGroup.year} className="year-section" data-year={yearGroup.year}>
                        <div className="year-marker">
                            <div className="circle">
                                <p className="year-label">{yearGroup.year}</p>
                            </div>
                        </div>
                        <div className={`publications ${animationStarted[yearGroup.year] ? 'animate' : ''}`}>
                            {yearGroup.entries.map(entry => (
                                <div key={entry.title} className="publication">
                                    <div className="publication-details">
                                        <p style={{margin: '0px', fontSize: '0.9em'}}><i> {entry.type} </i></p>
                                        <div className="publication-title">
                                            {entry.title}
                                        </div>
                                        <p style={{margin: '0px'}}>Authors: {entry.authors} </p>
                                        <p style={{margin: '0px'}}>Venue: {entry.venue}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
};

export default Publication;
