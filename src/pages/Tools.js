import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import tools from "../data/tools";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

export default function Tools() {
    return (
        <Box sx={{ padding: "0px 30px", justifyContent: 'center', alignItems: 'center' }}>
            <h3>Tools</h3>
            <p>If you are interested in exploring these tools further, please feel free to contact me for more information</p>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                {tools.map(tool => (
                    <Grid item key={tool.id} xs={10} sm={10} md={9}>
                        <Card sx={{ maxWidth: "100%" }}>
                            <CardMedia
                                component="img"
                                sx={{ height: "20%" }}
                                image={tool.img}
                                alt={tool.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body" component="div">
                                    <b>{tool.title}</b>
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div" dangerouslySetInnerHTML={{ __html: tool.explanation }}>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
