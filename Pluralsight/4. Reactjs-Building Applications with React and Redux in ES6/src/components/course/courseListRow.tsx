import * as React from 'react';
import { Link } from 'react-router-dom';

import { CourseEntity } from '../../model/course';

interface Props {
    course: CourseEntity;
}

export const CourseListRow: React.StatelessComponent<Props> = (props) => {
    return (
        <tr>
            <td><a href={props.course.watchHref} target="_blanck">Watch</a></td>
            <td><Link to={`/course/${props.course.id}`}>{props.course.title}</Link></td>
            <td>{props.course.authorId}</td>
            <td>{props.course.category}</td>
            <td>{props.course.length}</td>
        </tr>
    );
};
