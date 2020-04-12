import * as nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { CourseEntity } from '../model/course';
import { actionsEnum } from './actionsEnums';
import * as courseActions from './courseActions';


describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            // Arrange
            const courseMock: CourseEntity = {
                authorId: '', category: '', id: 'clean-code', length: '', title: 'Clean Code', watchHref: ''};
            const expectedAction = {
                payload: courseMock,
                type: actionsEnum.CREATE_COURSE_SUCCESS,
            };

            // Act
            const action = courseActions.createCourseSuccess(courseMock);

            // Assert
            expect(action).to.eql(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        const expectedActions = [
            { type: actionsEnum.BEGIN_AJAX_CALL },
            {
                body: {
                    courses: [
                        {authorId: '', category: '', id: 'clean-code', length: '', title: 'Clean Code', watchHref: '' },
                    ],
                },
                type: actionsEnum.LOAD_COURSES_SUCCESS,
            },
        ];

        const store = mockStore({courses: []});
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).to.equal(actionsEnum.BEGIN_AJAX_CALL);
            expect(actions[1].type).to.equal(actionsEnum.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});
