import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import researches from "../data/researches";

const Research = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            {researches.map((research, index) => (
                <Card key={index} sx={{mx: 15, my: 1}}>
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
                            {research.selectedPublications}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Research;
