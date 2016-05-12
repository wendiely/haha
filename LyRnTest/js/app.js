'use strict';

import React, { Component , Navigator} from 'react-native';
import {bindActionCreators} from 'redux';
import Login from './login';
import * as typesActions from './actions/types';
import { connect } from 'react-redux';

class LoginApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    let defaultName = 'ReactRedux';
    let defaultComponent = Login;
    console.log(this.props)
    return (
      <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route, navigator) => {
            console.log(route)
              let Component = route.component;
              return <Component {...this.props} {...route.params} navigator={navigator} />
          }}
      />
    );
  }
}

export default connect(state => ({
  state: state.Login
}),
(dispatch) => ({
  actions: bindActionCreators(typesActions, dispatch)
})
)(LoginApp);