import { actionsEnum } from '../actions/actionsEnums';
import { CourseEntity } from '../model/course';

export const courseReducer = (state: CourseEntity[] = [], action) => {
    switch (action.type) {
        case actionsEnum.LOAD_COURSES_SUCCESS:
            console.debug('3: in create course reducers.');
            return action.payload;
        default:
            return state;
    }
};
