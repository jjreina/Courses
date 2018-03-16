import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as Toastr from 'toastr';

import * as courseActions from '../../actions/courseActions';
import { CourseEntity } from '../../model/course';
import { CourseList } from './courseList';

interface Props {
    actions: any;
    courses: CourseEntity[];
    history?: any;
}

class CoursesPage extends React.Component<Props, {}> {

    constructor(props, context) {
        super(props, context);
    }

    public render() {
        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={this.props.courses} onDeleteCourse={this.onClickTrash}/>
            </div>
        );
    }

    private redirectToAddCoursePage = () => {
        this.props.history.push('/course');
    }

    private onClickTrash = (deleteCourseId) => {
        console.log('Course Id to remove: ' + deleteCourseId);
        this.props.actions.deleteCourse(deleteCourseId).
        then(() => Toastr.success('Course removed'))
        .catch((error) => {
            Toastr.error(error);
        });
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
};

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoursesPage));
