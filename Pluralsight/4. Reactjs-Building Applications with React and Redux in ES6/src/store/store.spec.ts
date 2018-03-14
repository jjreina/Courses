import { createStore } from 'redux';
import * as courseActions from '../actions/courseActions';
import { CourseEntity} from '../model/course';
import { rootReducer } from '../reducers/index';
import initialState from '../reducers/initialState';

describe('Store', () => {
    it('should handle creating courses', () => {
        // Arrange
        const store: any = createStore(rootReducer, initialState);
        const course: CourseEntity = {
            authorId: '', category: '', id: 'clean-code', length: '', title: 'Clean Code', watchHref: '',
        };

        // Act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // Assert
        const actual = store.getState().courseReducer[0];
        expect(actual).to.eql(course);
    });
});
