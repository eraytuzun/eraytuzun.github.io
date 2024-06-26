import React from 'react';

const About = () => {

    const bilsenLink = "https://bilsen.cs.bilkent.edu.tr"
    const scholarLink = "https://scholar.google.com/citations?hl=en&user=D4jovncAAAAJ&view_op=list_works&sortby=pubdate"
    const ISERNLink = "https://isern.iese.de/isern-members-2/"
    //const graduate = "https://w3.cs.bilkent.edu.tr/graduate-programs/"
    //const working = "http://www.cs.bilkent.edu.tr/~guvenir/courses/CS490/index.html"

    return (
        <div style={{
            padding: "0px 30px"
        }}>
            <h3>About</h3>
            <p>
                Eray Tüzün is currently a faculty member and leading the <a href={bilsenLink} target="_blank">Bilkent
                University Software Engineering and Data Analytics Research Group (BILSEN)</a> in the Department of
                Computer Engineering at Bilkent University. He received his bachelor’s and master’s degrees in Computer Science and holds a PhD in Information Systems. 
            </p>
            <p>
            He has over 20 years of experience designing
                and building software. Prior to joining Bilkent University, he worked 9 years in Havelsan in various
                positions
                (Productization Lead, Scrum Master, Product Owner, and Software Engineer). He has previously worked as a
                Software Design Engineer at Microsoft in Microsoft Online Services group, Senior Software Engineer at
                Howard Hughes
                Medical Institute and Research Engineer at CWRU Genomics Center.
                He has CPM (Certified Product Manager, MCSD:
                Application Lifecycle Manager, PSM (Professional Scrum Master) and PSPO (Professional Scrum Product
                Owner) certifications.
                His research interests include software analytics, mining software repositories, and,
                empirical software
                engineering. He is the representative of the Bilkent University in the <a href={ISERNLink} target="_blank"> International Software Engineering Research Network (ISERN). </a>
                He is a senior member of the IEEE, and a member of ACM SIGSOFT and IEEE Computer Society. 
            </p>
            <p>
                For the latest updates on his research, please visit his <a href={scholarLink} target="_blank"> Google Scholar</a> page.
            </p>
            <p>
                    If you are interested in joining our group as a graduate (Masters and
                    Ph.D.) or undergraduate volunteer student, please send an email or drop
                    by. Summer interns are also welcome.
            </p>

        </div>
    );
};

export default About;