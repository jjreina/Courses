import * as React from 'react';

import { About, Authors, Header, Home } from './components';

interface Props {
    route: string;
}

export const App: React.StatelessComponent<Props> = (props: { route: string }) => {
    let Child;
    switch (props.route) {
        case 'about': Child = About; break;
        case 'authors': Child = Authors; break;
        default: Child = Home; break;
    }
    return (
        <div>
            <Header />
            <Child />
        </div>
    );
};
