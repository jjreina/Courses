import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import { AuthorEntity } from '../../model/author';
import { CourseEntity } from '../../model/course';
import { CourseForm } from './courseForm';

interface State {
    course: CourseEntity;
    errors: any;
}

interface Props {
    authors: AuthorEntity[];
    actions: any;
    history?: any;
}

class ManageCourse extends React.Component<Props, State> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: new CourseEntity(),
            errors: {},
        };
    }

    public render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
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
        this.props.actions.saveCourse(this.state.course);
        this.props.history.push('/courses');
    }
}

const mapStateToProps = (state, ownProps) => {
    const course: CourseEntity = new CourseEntity();

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
