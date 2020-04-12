import courseApi from '../api/mockCourseApi';

import { actionsEnum } from '../actions/actionsEnums';
import { CourseEntity } from '../model/course';
import { ajaxCallError, beginAjaxCall } from './ajaxStatusActions';

const loadCoursesSuccess = (courses) => {
    console.debug('2: When data arrive launch the load action.');
    return {
        payload: courses,
        type: actionsEnum.LOAD_COURSES_SUCCESS,
    };
};

export const createCourseSuccess = (course) => {
    return {
        payload: course,
        type: actionsEnum.CREATE_COURSE_SUCCESS,
    };
};

export const updateCourseSuccess = (course) => {
    return {
        payload: course,
        type: actionsEnum.UPDATE_COURSE_SUCCESS,
    };
};

export const deleteCourseSuccess = (courses) => {
    return {
        payload: courses,
        type: actionsEnum.DELETE_COURSE_SUCCESS,
    };
};

export const loadCourses = () => {
    console.debug('1: Dispatch initial load via promise.');
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));
        }).catch((error) => {
            throw(error);
        });
    };
};

export const saveCourse = (course: CourseEntity) => {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then((savedCourse) => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch((error) => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
};

export const deleteCourse = (courseId: string) => {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return courseApi.deleteCourse(courseId).then((curses) => {
            dispatch(deleteCourseSuccess(curses));
        }).catch((error) => {
            dispatch(ajaxCallError());
            throw(error);
        });
    };
};
