import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import tools from "../data/tools";
import Grid from "@mui/material/Grid";

export default function Tools() {

    return (
        <div style={{padding: "0px 30px"}}>
            <h3>Tools</h3>
            <p>If you are interested in exploring these tools further, please feel free to contact me for more information</p>
            <Grid container spacing={3}>
                {tools.map(tool => (
                    <Grid item key={tool.id} xs={12} sm={12} md={12}>
                        <Card sx={{maxWidth: "100%"}}>
                            <CardMedia
                                component="img"
                                sx={{height: "20%"}}
                                image={tool.img}
                                alt={tool.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="body" component="div">
                                    <b>{tool.title}</b>
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {tool.explanation}
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    PI: {tool.pi}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
