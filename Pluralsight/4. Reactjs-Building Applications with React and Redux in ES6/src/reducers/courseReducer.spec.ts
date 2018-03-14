import * as courseActions from '../actions/courseActions';
import { CourseEntity } from '../model/course';
import { courseReducer } from './courseReducer';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        // Arrange
        const initialState: CourseEntity[] = [
            { authorId: '', category: '', id: '', length: '', title: 'A', watchHref: ''},
            { authorId: '', category: '', id: '', length: '', title: 'B', watchHref: ''},
        ];

        const newCourse = { title: 'C'};

        const action = courseActions.createCourseSuccess(newCourse);

        // Act
        const newState = courseReducer(initialState, action);

        // Assert
        expect(newState.length).to.equal(3);
        expect(newState[0].title).to.equal('A');
        expect(newState[1].title).to.equal('B');
        expect(newState[2].title).to.equal('C');
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        // Arrange
        const initialState: CourseEntity[] = [
            { authorId: '', category: '', id: 'A', length: '', title: 'A', watchHref: ''},
            { authorId: '', category: '', id: 'B', length: '', title: 'B', watchHref: ''},
            { authorId: '', category: '', id: 'C', length: '', title: 'C', watchHref: ''},
        ];

        const course = { id: 'B', title: 'New Title'};

        const action = courseActions.updateCourseSuccess(course);

        // Act
        const newState = courseReducer(initialState, action);
        const updateCourse = newState.find( (a) => a.id === course.id);
        const untouchedCourse = newState.find( (a) => a.id === 'A');

        // Assert
        expect(newState.length).to.equal(3);
        expect(updateCourse.title).to.equal('New Title');
        expect(untouchedCourse.title).to.equal('A');
    });
});
