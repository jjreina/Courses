import { actionsEnum } from '../actions/actionsEnums';
import { CourseEntity } from '../model/course';

export const courseReducer = (state: CourseEntity[] = [], action) => {
    switch (action.type) {
        case actionsEnum.CREATE_COURSE:
            console.debug('3: in create course reducers.');
            return [ ...state, Object.assign({}, action.payload) ];
        default:
            return state;
    }
};
