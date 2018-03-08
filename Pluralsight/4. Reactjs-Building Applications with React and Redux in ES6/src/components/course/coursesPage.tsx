import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as courseActions from '../../actions/courseActions';
import { CourseEntity } from '../../model/course';
import { CourseList } from './courseList';

interface Props {
    courses: CourseEntity[];
    history?: any;
}

class CoursesPage extends React.Component<Props, {}> {

    constructor(props, context) {
        super(props, context);
    }

    public render() {
        return(
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={this.props.courses} />
            </div>
        );
    }

    private redirectToAddCoursePage = () => {
        this.props.history.push('/course');
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

export default withRouter(connect(mapStateToProps)(CoursesPage));
