import * as React from 'react';

import { AuthorEntity } from '../../model/author';
import { CourseEntity } from '../../model/course';
import { SelectInput } from '../common/selectInput';
import { TextInput } from '../common/textInput';

interface Props {
    course: CourseEntity;
    allAuthors: AuthorEntity[];
    onChange: any;
    onSave: any;
    loading?: any;
    errors: any;
}

export const CourseForm: React.StatelessComponent<Props> =
    ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return(
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                onChange={onChange}
            />
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
            />
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}
            />
            <input
                type="submit"
                disabled={loading}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}
            />
        </form>
    );
};
