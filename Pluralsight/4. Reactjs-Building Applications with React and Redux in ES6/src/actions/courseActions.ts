import courseApi from '../api/mockCourseApi';

import { actionsEnum } from '../actions/actionsEnums';

export const loadCoursesSuccess = (courses) => {
    console.debug('2: When data arrive launch the load action.');
    return {
        payload: courses,
        type: actionsEnum.LOAD_COURSES_SUCCESS,
    };
};

export const loadCourses = () => {
    console.debug('1: Dispatch initial load via promise.');
    return (dispatch) => {
        return courseApi.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));
        }).catch((error) => {
            throw(error);
        });
    };
};
