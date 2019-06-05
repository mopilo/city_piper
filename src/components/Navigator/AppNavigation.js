import React from 'react';
import { addNavigationHelpers, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Login from "../.././view/auth/Login";

 export const AppNavigator = createAppContainer(createSwitchNavigator({
    Login: {screen: Login}
}));

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator
    // navigation={{
    //     dispatch: dispatch,
    //     state:nav,
    //     // addListener,
    //  }}  
       /> );
  
  const mapStateToProps = state => ({
    nav: state.nav,
  });
    
  export default connect(mapStateToProps)(AppWithNavigationState);