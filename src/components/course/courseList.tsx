import * as React from 'react';

import { CourseEntity } from '../../model/course';
import { CourseListRow } from './courseListRow';

interface Props {
    courses: CourseEntity[];
    onDeleteCourse: any;
}

export const CourseList: React.StatelessComponent<Props> = (props) => {
    const onClickTrash = (deleteCourse) => {
        props.onDeleteCourse(deleteCourse);
    };

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
                {/* tslint:disable-next-line:max-line-length*/}
                {props.courses.map((course) => <CourseListRow key={course.id} course={course} onDeleteCourse={onClickTrash}/>)}
            </tbody>
        </table>
    );
};
