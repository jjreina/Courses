import * as React from 'react';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';
import { CourseEntity } from '../../model/course';
import { CourseList } from './courseList';

interface Props {
    courses: CourseEntity[];
}

class CoursesPage extends React.Component<Props, {}> {

    constructor(props, context) {
        super(props, context);

    }

    public render() {
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProp) => {
    if (state.courseReducer.length === 0) {
        console.debug('Waiting data from promise....');
    } else {
        console.debug(`4: State to Props. Numbers of courses ${state.courseReducer.length}`);
    }
    return {
        courses: state.courseReducer,
    };
};

export default connect(mapStateToProps)(CoursesPage);
