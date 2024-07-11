import React from 'react';
import "../.././assets/./scss/paymentpage.css"

const PaymentSuccess = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="message-box _success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h2>Thank You</h2>
            <h4>Your payment was successful</h4>
            <p >upi transaction id is: 123456</p>

            <p>
              Thank you for your payment. we will <br />
              be in contact with more details shortly
            </p>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default PaymentSuccess;
