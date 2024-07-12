import React,{useEffect, useState} from "react";
import "../.././assets/./scss/paymentpage.css";
import { useLocation, useHistory  } from "react-router-dom";
import { Component } from "ag-grid-community";

const PaymentSuccess = () => {
  const [countDown, setCountDown] = useState(10);
  const location = useLocation();
  const history = useHistory();

  const getQueryParams = (query) => {
    return new URLSearchParams(query);
  };

  const queryParams = getQueryParams(location.search);
  const message = queryParams.get("message");
  const transactionId = queryParams.get("transactionId");
  const amount = queryParams.get("amount");

  // console.log("Message:", message);
  // console.log("Transaction ID:", transactionId);
  // console.log("Amount:", amount);

  // https://www.astrogyata.in/code=PAYMENT_SUCCESS&transactionId=T2407111735259614648730&message=Your+payment+is+successful.&amount=1.18&type=UPI
//   timer = () => {
//     const interval = setInterval(() => {
//       setCountDown((countDown) => countDown - 1);
//   })
// }

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((countDown) => countDown - 1);
    }, 1000);
    // Redirect to the home page after 10 seconds
    const timer = setTimeout(() => {
      history.push("/");
    }, 10000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [history]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="message-box _success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h2>Thank You</h2>
            <h4>{message}</h4>
            <p>Transaction ID: {transactionId}</p>
            <p>Amount: ${amount}</p>
            <p>
              Thank you for your payment. We will <br />
              be in contact with more details shortly.
            </p>
            <h1>Redirect in Home {countDown}</h1>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default PaymentSuccess;
