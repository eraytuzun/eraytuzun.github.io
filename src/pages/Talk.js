import React from 'react';
import './pages.css';
import talks from '../data/talks';

const Talk = () => {
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
        <div className="timeline-container">
            {talkList.map(yearGroup => (
                <div key={yearGroup.year} className="year-section">
                    <div className="year-marker">
                        <div className="circle">
                            <p className="year-label">{yearGroup.year}</p>
                        </div>
                    </div>
                    <div className="talks">
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
    );
};

export default Talk;
