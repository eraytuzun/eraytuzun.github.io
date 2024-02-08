import React from 'react';
import './pages.css';
import publications from '../data/publications';
import PublicationSitesList from "../components/PublicationSitesList";

const Publication = () => {
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
        <>
            <div style={{width:'70%', display:'flex', margin:'2px auto'}}>
                <PublicationSitesList/>
            </div>
            <div className="timeline-container">
                {publ.map(yearGroup => (
                    <div key={yearGroup.year} className="year-section">
                        <div className="year-marker">
                            <div className="circle">
                                <p className="year-label">{yearGroup.year}</p>
                            </div>
                        </div>
                        <div className="publications">
                            {yearGroup.entries.map(entry => (
                                <div key={entry.title} className="publication">
                                    <div className="publication-details">
                                        <p style={{margin: '0px', fontSize: '0.9em'}}><i> {entry.type} </i></p>
                                        <div className="publication-title">
                                            {entry.title}
                                        </div>
                                        <p style={{margin: '0px'}}>Authors: {entry.authors} </p>
                                        <p style={{margin: '0px'}}>Source: {entry.source}</p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </>
    );
};

export default Publication;
