import React from 'react';

const About = () => {

    const bilsenLink = "https://bilsen.cs.bilkent.edu.tr"
    const scholarLink = "https://scholar.google.com/citations?user=D4jovncAAAAJ&hl=en"
    const graduate = "https://w3.cs.bilkent.edu.tr/graduate-programs/"
    const working = "http://www.cs.bilkent.edu.tr/~guvenir/courses/CS490/index.html"

    return (
        <div style={{
            padding: "0px 30px"
        }}>
            <h3>About</h3>
            <p>
                Eray Tüzün is currently a faculty member and leading the <a href={bilsenLink} target="_blank">Bilkent
                University Software Engineering and Data Analytics Research Group (BILSEN)</a> in the Department of
                Computer Engineering at Bilkent University. He has over 15 years of experience designing
                and building software. Prior to joining Bilkent University, he worked 9 years in HAVELSAN in various
                positions
                (Productization Lead, Academy Manager, Product Owner, and Software Engineer).
            </p>
            <p>
                He has previously worked as a
                Software Design Engineer at Microsoft in Microsoft Online Services group, Senior Software Engineer at
                Howard Hughes
                Medical Institute and Research Engineer at CWRU Genomics Center.
                He has CPM (Certified Product Manager, MCSD:
                Application Lifecycle Manager, PSM (Professional Scrum Master) and PSPO (Professional Scrum Product
                Owner) certifications.
                His research interests include software analytics, application lifecycle management, gamification,
                empirical software
                engineering, and software engineering education.
            </p>
            <p>
                Please visit my <a href={scholarLink} target="_blank"> Google Scholar</a> page for my research. Eray
                Tüzün received his bachelor’s and master’s
                degrees in Computer Science and holds a PhD in Information Systems.
            </p>

        </div>
    );
};

export default About;