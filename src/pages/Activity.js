import React from 'react';
import InternationalConference from "../components/datagrids/InternationalConference";
import Journal from "../components/datagrids/Journal";
import MembershipsDataGrid from "../components/datagrids/Membership";
import Award from "../components/datagrids/Award";



export default function Activity() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            margin: '0 auto',
            textAlign: 'left'
        }}>
            <InternationalConference/>
            <br/>
            <Journal/>
            <br/>
            <MembershipsDataGrid/>
            <br/>
            <Award/>
            <br/>
        </div>
    );
}
