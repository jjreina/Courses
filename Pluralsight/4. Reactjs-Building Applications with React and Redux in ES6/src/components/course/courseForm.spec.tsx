import {shallow} from 'enzyme';
import * as React from 'react';

import { CourseEntity } from '../../model/course';
import { CourseForm } from './courseForm';

const setup = (saving: boolean) => {
    const props = {
        course: new CourseEntity(),
        errors: {},
        // tslint:disable-next-line:no-empty
        onChange: () => {},
        // tslint:disable-next-line:no-empty
        onSave: () => {},
        saving,
    };

    return shallow(<CourseForm {...props} />);
};

describe('CourseForm via Enzyme', () => {

    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form')).to.have.lengthOf(1);
        expect(wrapper.find('h1').text()).to.equal('Manage Course');
    });

    it ('the CourseForm component is compose by 1 input, 3 TextInput and 1 SelectInput', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input')).to.have.lengthOf(1);
        expect(wrapper.find('TextInput')).to.have.lengthOf(3);
        expect(wrapper.find('SelectInput')).to.have.lengthOf(1);
    });

    it ('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).to.equal('Save');
    });

    it ('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).to.equal('Saving...');
    });

});
