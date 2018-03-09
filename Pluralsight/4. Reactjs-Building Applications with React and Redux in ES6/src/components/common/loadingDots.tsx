import * as React from 'react';


interface State {
    frame: number;
}

interface Props {
    dots: number;
    interval: number;
}

export class LoadingDots extends React.Component<Props, State> {

    private static defaultProps: Partial<Props> = {
        dots: 3,
        interval: 300,
    };

    private interval: number;

    constructor(props) {
        super(props);

        this.state = { frame: 1 };
    }

    public componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({  // eslint-disable-line react/no-did-mount-set-state
              frame: this.state.frame + 1,
            });
          }, this.props.interval);
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return (<span {...this.props}>{text}&nbsp;</span>);
    }
}

