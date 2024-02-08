import React from 'react';
import InternationalConference from "../components/datagrids/InternationalConference";
import Journal from "../components/datagrids/Journal";
import MembershipsDataGrid from "../components/datagrids/Membership";
import Award from "../components/datagrids/Award";



export default function Activity() {
    return (
        <>
            <InternationalConference/>
            <Journal/>
            <MembershipsDataGrid/>
            <Award/>
        </>
    );
}
