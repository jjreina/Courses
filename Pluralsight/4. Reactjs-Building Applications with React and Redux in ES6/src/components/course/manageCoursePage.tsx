import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MandageCoursPage extends React.Component {
     constructor(props, context) {
         super(props, context);
     }

     public render () {
         return (
             <div></div>
         );
     }
}

const mapStateToProps = (state, ownProp) => {
    return {
        state: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect()(MandageCoursPage);