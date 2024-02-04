import XIcon from '@mui/icons-material/X';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PushPinIcon from '@mui/icons-material/PushPin';

export default function () {
    const name = "Eray Tüzün"
    const status = "Assistant Professor of Computer Engineering at Bilkent University, Head of BILSEN Research Group "
    const twitterLink = 'https://twitter.com/eraytuzun';
    const linkedinLink = "https://www.linkedin.com/in/tuzuneray/"
    const emailLink = 'mailto:eraytuzun@cs.bilkent.edu.tr';


    return (
        <div style={{textAlign: 'center'}}>
            <h2>{name}</h2>
            <p style={{fontSize: '0.8em'}}>{status}</p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left',}}>
                    <Link style={{textDecoration: 'none'}}>
                        <IconButton color="primary" style={{fontSize: '0.8em'}}>
                            <PushPinIcon style={{color: '#3a3333'}}/> EA-501
                        </IconButton>
                    </Link>

                    <Link href={twitterLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <IconButton color="primary" style={{fontSize: '0.8em'}}>
                            <XIcon style={{color: '#3a3333'}}/> X Profile
                        </IconButton>
                    </Link>

                    <Link href={linkedinLink} target="_blank" rel="noopener noreferrer"
                          style={{textDecoration: 'none'}}>
                        <IconButton color="primary" style={{fontSize: '0.8em'}}>
                            <LinkedInIcon style={{color: '#3a3333'}}/> LinkedIn
                        </IconButton>
                    </Link>

                    <Link href={emailLink} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        <IconButton color="primary" style={{fontSize: '0.8em'}}>
                            <EmailIcon style={{color: '#3a3333'}}/> Email
                        </IconButton>
                    </Link>
                </div>
            </div>

        </div>
    )
}