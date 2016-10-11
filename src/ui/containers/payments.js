
import React from 'react';
import {connect} from 'react-redux';
import _Payments from '../windows/payments';
import {
  navigation as navigationActions,
  payments as paymentsActions,
  user as userActions,
} from '../../actions';

class Payments extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    //when this component mounts, fetch account information from Stripe
    this.props.onLoadTransactions();
    this.props.onLoadAccount();
  }

  render() {

    return (
      <_Payments
        onToggleMode={this.props.onToggleMode}
        mode={this.props.user.mode}
        onPressPaymentOptions={() => {
          this.props.onNavigate('paymentsBankSetup');
        }}
      />
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
    payments: state.payments,
  }),
  (dispatch) => ({
    onNavigate: (key, props) => dispatch(navigationActions.push({key, props}, false)),
    onToggleMode: () => dispatch(userActions.toggleMode()),
    onCreateAccount: (data) => dispatch(paymentsActions.createAccount(data)),
    onLoadAccount: () => dispatch(paymentsActions.getAccount()),
    onLoadTransactions: () => dispatch(paymentsActions.getTransactions()),
  }),
)(Payments);
