import {Card, CardContent} from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import MapView from "../components/MapView";

export default function Contact() {
    return (
        <div style={{padding: '0 30px'}}>
            <div style={{display: "flex", flexDirection: "column",flexWrap: "wrap"}}>
                <h3>Contact</h3>
                <p>
                    If you are interested in joining our group as a graduate (Masters and
                    Ph.D.) or undergraduate volunteer student, please send an email or drop
                    by. Summer interns are also welcome.
                </p>
                <p>
                    For Bilkent students please check{" "}
                    <a href="https://www.cs.bilkent.edu.tr/~eraytuzun/teaching/cs489/CS489_Proposals.pdf"
                       target="_blank">
                        CS 489{" "}
                    </a>and{" "}<a href="https://www.cs.bilkent.edu.tr/~eraytuzun/teaching/cs489/CS490_Proposals.pdf"
                                   target="_blank"
                >
                    CS 490
                </a>{" "}opportunities.
                </p>
            </div>
            <div style={{display: "flex", flexDirection: "row", marginTop: "30px", flexWrap: "wrap",}}>
                <Card
                    sx={{
                        minWidth: 500,
                        mr:3,
                        mb: {xs: 5, sm: 0}, // Add margin bottom for small screens
                        background: "rgba(58,51,51,0.03)",
                    }}

                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Contact Information
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>Bilkent University</p>
                            <p>Address: Department of Computer Engineering </p>
                            <p>EA-501 </p>
                            <p>ANKARA, Turkey </p>
                            <p> Bilkent, 06800</p>
                            Phone: +90 312 2903398
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{minWidth: 500, mb: {xs: 5, sm: 0}}}>
                    <MapView/>
                </Card>
            </div>
        </div>
    );
}
