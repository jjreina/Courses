import {mount, shallow} from 'enzyme';
import * as React from 'react';

import { AuthorEntity } from '../../model/author';
import { CourseEntity } from '../../model/course';
import { ManageCourse } from './manageCoursePage';

describe('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            actions: { saveCourse: () => Promise.resolve() },
            authors: [],
            course: new CourseEntity(),
        };
        const wrapper = mount(<ManageCourse {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).to.equal('submit');

        saveButton.simulate('click');
        expect(wrapper.state().errors.title).to.equal('Title must be at least 5 characters.');
    });
});
