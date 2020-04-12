import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import { CourseEntity } from '../../model/course';

interface Props {
    actions?: any;
    course: CourseEntity;
    onDeleteCourse: any;
}

const style = {
    textAlign: 'center',
};

export const CourseListRow: React.StatelessComponent<Props> = (props) => {
    const onClickTrash = () => {
        props.onDeleteCourse(props.course.id);
    };

    return (
        <tr>
            <td><a href={props.course.watchHref} target="_blanck">Watch</a></td>
            <td><Link to={`/course/${props.course.id}`}>{props.course.title}</Link></td>
            <td>{props.course.authorId}</td>
            <td>{props.course.category}</td>
            <td>{props.course.length}</td>
            <td style={style}>
                <span onClick={onClickTrash} className="glyphicon glyphicon-trash"/>
            </td>
        </tr>
    );
};
