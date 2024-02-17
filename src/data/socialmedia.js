import PushPinIcon from "@mui/icons-material/PushPin";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import BlurCircularIcon from '@mui/icons-material/BlurCircular';

const socialmedia = [
    {
        icon: <PushPinIcon style={{color: '#3a3333'}} />,
        text: 'EA-501',
        link: 'https://maps.app.goo.gl/EH1bE2sbvhw78HZPA',
    },
    {
        icon: <XIcon style={{color: '#3a3333'}} />,
        text: 'X Profile',
        link: 'https://twitter.com/eraytuzun',
    },
    {
        icon: <LinkedInIcon style={{color: '#3a3333'}} />,
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/tuzuneray/',
    },
    {
        icon: <SchoolIcon style={{color: '#3a3333'}} />,
        text: 'Google Scholar',
        link: 'https://scholar.google.com/citations?hl=en&user=D4jovncAAAAJ&view_op=list_works&sortby=pubdate',
    },
    {
        icon: <BlurCircularIcon style={{color: '#3a3333'}} />,
        text: 'BILSEN Lab',
        link: 'https://bilsen.cs.bilkent.edu.tr',
    },
    {
        icon: <EmailIcon style={{color: '#3a3333'}} />,
        text: 'Email',
        link: 'mailto:<firstNameLastName>@cs.bilkent.edu.tr',
    },
];

export default socialmedia;
