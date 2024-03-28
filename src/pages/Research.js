import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import researches from "../data/researches";

const Research = () => {
    return (
        <div style={{padding: "0px 30px"}}>
            <h3>Research</h3>
            {researches.map((research, index) => (
                <Card key={index} sx={{my: 2, background: "rgba(58,51,51,0.03)"}}>
                    <CardContent style={{flex: 1}}>
                        <Typography variant="h5" component="div">
                            {research.title}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {research.description}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Selected Publications:
                            <ul>
                                {research.selectedPublications.map((p) => (
                                    <li>{p.authors}, <cite>"{p.title},"</cite> {p.venue}, {p.date}.</li>
                                ))}
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Research;
