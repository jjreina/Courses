import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as Toastr from 'toastr';

import * as courseActions from '../../actions/courseActions';
import { AuthorEntity } from '../../model/author';
import { CourseEntity } from '../../model/course';
import { CourseForm } from './courseForm';

interface State {
    course: CourseEntity;
    errors: any;
    saving: boolean;
}

interface Props {
    authors: AuthorEntity[];
    actions: any;
    history?: any;
    course: CourseEntity;
}

export class ManageCourse extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            saving: false,
        };
    }

    public  componentWillReceiveProps(nextProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState( {course: Object.assign({}, nextProps.course)} );
        }
    }

    public render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }

    private updateCourseState = (event: React.ChangeEvent<HTMLInputElement>) => {
        const field: string = event.target.name;
        const course: CourseEntity = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({ course });
    }

    private saveCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch((error) => {
                Toastr.error(error);
                this.setState({ saving: false });
            });
    }

    private redirect = () => {
        this.setState({ saving: false });
        Toastr.success('Course saved');
        this.props.history.push('/courses');
    }
}

const getCourseById = (courses: CourseEntity[], id: string) => {
    const course = courses.filter((c) => c.id === id);
    return course.length ? course[0] : null;
};

const mapStateToProps = (state, ownProps) => {
    const courseId: string = ownProps.match.params.id;
    let course: CourseEntity = new CourseEntity();

    if (courseId) {
        course = getCourseById(state.courseReducer, courseId);
    }

    const authorsFormattedForDropdown = state.authorReducer.map((author) => {
        return {
            text: author.firstName + ' ' + author.lastName,
            value: author.id,
        };
    });
    return {
        authors: authorsFormattedForDropdown,
        course,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCourse));
