import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import MapView from "../components/MapView";

const smBreakpoint = 600; // Define your desired breakpoint value for 'sm'

export default function Contact() {
    const isDesktop = window.innerWidth >= smBreakpoint;

    return (
        <div style={{ padding: '0 30px' }}>
            <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
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
            <div style={{ display: "flex", flexDirection: "row", marginTop: "30px", flexWrap: "wrap" }}>
                <Card
                    sx={{
                        width: isDesktop ? 500 : 350,
                        mr: 2,
                        mb: 2, // Add margin bottom for small screens
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
                <Card sx={{
                    width: isDesktop ? 500 : 350,
                    mb: 2 }}>
                    <MapView />
                </Card>
            </div>
        </div>
    );
}
