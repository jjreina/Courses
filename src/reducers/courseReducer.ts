import { actionsEnum } from '../actions/actionsEnums';
import { CourseEntity } from '../model/course';
import initialState from './initialState';

export const courseReducer = (state: CourseEntity[] = initialState.courses, action) => {
    switch (action.type) {
        case actionsEnum.LOAD_COURSES_SUCCESS:
            console.debug('3: in create course reducers.');
            return action.payload;
        case actionsEnum.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.payload)];
        case actionsEnum.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter( (course) => course.id !== action.payload.id),
                Object.assign({}, action.payload)];
        case actionsEnum.DELETE_COURSE_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
