import * as React from 'react';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';
import { CourseEntity } from '../../model/course';

interface State {
    course: CourseEntity;
}

interface Props {
    courses: CourseEntity[];
    createCourse: any;
}

class CoursesPage extends React.Component<Props, State> {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' },
        };
    }

    public render() {
        return(
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }

    private onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const course: CourseEntity = this.state.course;
        course.title = event.currentTarget.value;
        this.setState( { course } );
    }

    private onClickSave = () => {
        console.debug('1: dispatch the create course Action.');
        this.props.createCourse(this.state.course);
    }

    private courseRow = (course: CourseEntity, index: number) => {
        return <div key={index}>{course.title}</div>;
    }
}

const mapStateToProps = (state, ownProp) => {
    console.debug(`4: State to Props. Numbre of courses ${state.courseReducer.length}`);
    return {
        courses: state.courseReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCourse: (course: CourseEntity) => {
            console.debug('1.2: dispatch the create course Action.');
            dispatch(courseActions.createCourse(course));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
