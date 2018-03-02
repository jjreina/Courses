import { actionsEnum } from '../actions/actionsEnums';
import { CourseEntity } from '../model/course';

export const createCourse = (course: CourseEntity) => {
    console.debug('2: inside of create course Action.');
    return {
        payload: course,
        type: actionsEnum.CREATE_COURSE,
    };
};
