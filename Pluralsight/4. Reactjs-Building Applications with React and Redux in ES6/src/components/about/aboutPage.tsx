import * as React from 'react';

export default class AboutPage extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return(
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router and variety of other helpful libraries.</p>
            </div>
        );
    }
}
