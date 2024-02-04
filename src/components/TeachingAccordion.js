import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import courses from "../data/courses";

const sortedCourses = courses.slice().sort((a, b) => a.title.localeCompare(b.title));

export default function TeachingAccordion() {
    return (
        <div>
            {sortedCourses.map((course, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls={`panel${index + 1}-content`}
                        id={`panel${index + 1}-header`}
                    >
                        {course.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        <p><strong>Prerequisite:</strong> {course.prerequisite}</p>
                        <p><strong>Description:</strong> {course.description}</p>
                        <p><strong>Catalog:</strong> <a href={course.catalog} target="_blank"
                                                        rel="noopener noreferrer">{course.catalog}</a></p>
                        {course.url && <p><strong>Homepage:</strong> <a href={course.url} target="_blank"
                                                                        rel="noopener noreferrer">{course.url}</a></p>}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}