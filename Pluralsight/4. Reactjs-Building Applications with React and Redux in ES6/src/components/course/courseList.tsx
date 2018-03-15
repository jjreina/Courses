import * as React from 'react';

import { CourseEntity } from '../../model/course';
import { CourseListRow } from './courseListRow';

export const CourseList = (props: { courses: CourseEntity[] }) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map((course) => <CourseListRow key={course.id} course={course}/>)}
            </tbody>
        </table>
    );
};
