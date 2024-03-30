import React from 'react';
import InternationalConference from "../components/datagrids/InternationalConference";
import Journal from "../components/datagrids/Journal";
import MembershipsDataGrid from "../components/datagrids/Membership";
import Award from "../components/datagrids/Award";
import Grant from "../components/datagrids/Grant";


export default function Activity() {
    return (
        <div style={{display: 'flex', flexDirection: 'column',gap:10, padding: "0px 30px"}}>
            <h3>Activities</h3>
            <span style={{margin:"0px 20px"}}>
                <div>
                    <InternationalConference/>
                </div>
                <div>
                    <Journal/>
                </div>
                <div>
                    <MembershipsDataGrid/>
                </div>
                <div>
                    <Award/>
                </div>
                <div>
                    <Grant/>
                </div>
            </span>
¬        </div>
    );
}
